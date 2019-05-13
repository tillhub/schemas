const locationsAccounts = require('../locations/accounts')

module.exports = {
  name: {
    anyOf: [
      {
        type: 'string'
      },
      {
        type: 'null'
      }
    ]
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
  type: {
    type: 'string',
    'enum': [
      'vat',
      'discount',
      'revenue',
      'payment'
    ]
  },
  metadata: {
    type: 'object'
  },
  accfinancial_accountsounts: {
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
