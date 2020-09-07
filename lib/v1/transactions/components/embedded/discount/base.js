const { stripIndents } = require('common-tags')
const { oneOf } = require('../../../../../helpers/payload-or-null')

module.exports = {
  type: 'object',
  additionalProperties: false,
  description: 'Any applied discounts as they happened at transaction creation time.',
  properties: {
    amount: {
      description: 'The effective amount for this discount per item qty base 1',
      type: 'number',
      minimum: -1000000,
      maximum: 1000000,
      multipleOf: 0.01
    },
    amount_total: {
      description: 'The effective amount for this discount per qty items',
      type: 'number',
      minimum: -1000000,
      maximum: 1000000,
      multipleOf: 0.01
    },
    order_index: {
      type: 'integer',
      minimum: 0,
      maximum: 100
    },
    currency: {
      type: 'string',
      minLength: 3,
      maxLength: 3
    },
    value: {
      description: 'The absolute reduction via this discounting object e.g. a value discount.',
      oneOf: [
        {
          type: 'number',
          minimum: -1000000,
          maximum: 1000000,
          multipleOf: 0.01
        },
        {
          type: 'null'
        }
      ]
    },
    rate: {
      description: 'The relative reduction via this voucher',
      oneOf: [
        {
          type: 'number',
          minimum: 0,
          maximum: 1,
          multipleOf: 0.001
        },
        {
          type: 'null'
        }
      ]
    },
    client_id: {
      description: 'Client id to map this object back',
      type: 'string',
      maxLength: 128
    },
    external_reference_id: {
      description: 'A caller defined custom ID for the purpose of syncing from external resources, or to use in analytics.',
      oneOf: [
        {
          type: 'string',
          maxLength: 128
        },
        {
          type: 'null'
        }
      ]
    },
    group: oneOf({
      description: stripIndents`
      The effective type of the discounting object.
      `,
      type: 'string',
      enum: [
        'customer',
        'staff',
        'cart',
        'product_set',
        'sconto',
        'item',
        'promotion',
        'voucher'
      ]
    }),
    name: {
      type: 'string',
      minLength: 1,
      maxLength: 128
    },
    source_id: {
      description: stripIndents`
      The Tillhub discounting resource (if available) e.g. a discount, promotion etc.
      `,
      oneOf: [
        {
          type: 'string',
          format: 'uuid'
        },
        {
          type: 'null'
        }
      ]
    },
    assignment_id: {
      description: 'Identification of the client process that created this discount',
      oneOf: [
        {
          type: 'string',
          maxLength: 128
        },
        {
          type: 'null'
        }
      ]
    },
    assignment_source: {
      description: 'Identification of the client source of the process that created this discount',
      oneOf: [
        {
          type: 'string',
          enum: [
            'cart',
            'item',
            'customer',
            'promotion',
            'sconto'
          ]
        },
        {
          type: 'null'
        }
      ]
    },
    is_automatic: {
      type: 'boolean',
      default: false,
      description: 'If true, this discount was trigger automatically.'
    },
    order: {
      type: 'string',
      enum: [
        'first',
        'last'
      ],
      default: 'last'
    }
  },
  required: [
    'amount',
    'amount_total',
    'currency',
    'name',
    'value',
    'rate'
  ]
}
