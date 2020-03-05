const locationsAccounts = require('../locations/accounts')

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
  }
}
