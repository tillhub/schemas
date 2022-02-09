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
