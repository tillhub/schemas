const { oneOf } = require('../../../helpers/payload-or-null')
const { stripIndents } = require('common-tags')

module.exports = {
  description: 'Defines various product behaviours.',
  default: {
    allow_zero_prices: true,
    pricing: {
      allow_is_free: false
    }
  },
  anyOf: [
    {
      type: 'object',
      additionalProperties: true,
      properties: {
        external_rewards: oneOf({
          type: 'object',
          description: stripIndents`
                Can grant external rewards when added to a cart.

                NOTE: Should be used sparsely for special campign products that require barcode scanning as sort of campaign activator.
                Should be used for products that are bound to specific branch groups.
                These products will be currently visible to anyone as there is no dedicated type planned (Summer 2023).
              `,
          additionalProperties: true,
          properties: {
            coop: oneOf({
              type: 'object',
              description: 'Can grant Coop rewards when added to a cart.',
              properties: {
                campaign: oneOf({
                  type: 'object',
                  description: 'Can grant Coop campaign rewards when part of an active cart.',
                  properties: {
                    name: {
                      description: 'Name of the campaign',
                      type: 'string',
                      example: 'Super Summer',
                      minLength: 2,
                      maxLength: 24
                    },
                    multiplier: {
                      type: 'integer',
                      description: 'Superpoint multiplier on cart total',
                      minimum: 1,
                      maximum: 100,
                      default: 1
                    },
                    date_start: oneOf({
                      type: 'string',
                      format: 'date-time',
                      example: '2023-08-04 12:00:21.165+00',
                      description: 'Start date of the campaign',
                      default: null // fallback: distant past
                    }),
                    date_end: oneOf({
                      type: 'string',
                      format: 'date-time',
                      example: '2023-10-23 16:51:29.143+00',
                      description: 'End date of the campaign',
                      default: null // fallback: distant future
                    })
                  }
                })
              }
            })
          }
        }),
        allow_zero_prices: {
          deprecated: true,
          description: 'Allow adding this product to a cart if it has no price.',
          type: 'boolean'
        },
        pricing: {
          type: 'object',
          properties: {
            allow_is_free: {
              deprecated: true,
              description: 'If an eligible price is 0 define whether the user is prompted to enter a price or whether the price can stay 0, to essentially be a freebie.',
              type: 'boolean'
            },
            request_input: {
              type: 'boolean',
              default: false,
              description: stripIndents`
                If true, request cashier input - regardless of the current price value, but pre-filled with it.

                NOTE: If false and price is 0 - adds item with 0 price automatically.
              `
            },
            zero_input_allowed: {
              type: 'boolean',
              default: false,
              description: stripIndents`
                Defines whether a requested price input can be confirmed with a zero value or not.

                NOTE: Does not affect any zero price behavior directly, just the input validation when 'request_input'=true.
              `
            }
          }
        }
      }
    },
    {
      type: 'null'
    }
  ]
}
