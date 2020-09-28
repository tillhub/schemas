const locationsAccounts = require('../locations/accounts')
const { oneOf } = require('../../helpers/payload-or-null')

module.exports = {
  active: {
    type: 'boolean'
  },
  type: {
    type: 'string',
    'enum': [
      'cash',
      'card',
      'invoice',
      'card_opi', // deprecated, use 'card' instead
      'card_concardis', // deprecated, use 'card' instead
      'card_tim', // deprecated, use 'card' instead
      'card_adyen', // deprecated, use 'card' instead
      'gift_card',
      'default',
      'undefined',
      'voucher',
      'sumup'
    ]
  },
  metadata: {
    type: 'object'
  },
  name: {
    type: 'string',
    maxLength: 64
  },
  cost_center: {
    type: 'string',
    maxLength: 64
  },
  currency: {
    type: 'string',
    minLength: 3,
    maxLength: 3
  },
  diff_account: {
    type: 'string',
    maxLength: 64
  },
  order_index: {
    type: 'number',
    minimum: 0
  },
  summable: {
    type: 'boolean'
  },
  fa_account_number: {
    anyOf: [
      {
        type: 'string'
      },
      {
        type: 'null'
      }
    ]
  },
  discrepancy_account: {
    anyOf: [
      {
        type: 'string'
      },
      {
        type: 'null'
      }
    ]
  },
  accounts: {
    description: 'DEPRECATED: do not use',
    anyOf: [
      {
        type: 'array',
        items: {
          type: 'string'
        }
      },
      {
        type: 'null'
      }
    ]
  },
  financial_accounts: {
    anyOf: [
      {
        ...locationsAccounts
      },
      {
        type: 'null'
      }
    ]
  },
  card_circuits: {
    description: 'A list of card circuits (e.g. VISA, Girocard ...) that should trigger a matching re-assignment after payments with terminals',
    anyOf: [
      {
        type: 'array',
        items: {
          type: 'string'
        }
      },
      {
        type: 'null'
      }
    ]
  },
  price_range: {
    ...oneOf({
      type: 'object',
      additionalProperties: false,
      description: 'Define a price range where the payment option is available.',
      properties: {
        min_amount: {
          description: 'Defines the minimum gross amount for this payment option availability.',
          ...oneOf({
            example: '9.99',
            type: 'number',
            multipleOf: 0.01

          })
        },
        max_amount: {
          description: 'Defines the maximum gross amount for this payment option availability.',
          ...oneOf({
            example: '16550.99',
            type: 'number',
            multipleOf: 0.01

          })
        }
      }
    })
  }
}
