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
  'accounts': {
    description: 'DEPRECATED: do not use',
    'type': 'array',
    'items': {
      'type': 'object',
      'properties': {
        'branch': {
          'type': 'string',
          'minLength': 12,
          'maxLength': 64
        },
        'branch_number': {
          'type': 'number'
        },
        'name': {
          'type': 'string',
          'minLength': 1,
          'maxLength': 64
        },
        'account': {
          'type': 'string',
          'minLength': 12,
          'maxLength': 64
        }
      }
    }
  }
}
