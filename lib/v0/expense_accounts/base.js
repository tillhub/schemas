const locationsAccounts = require('../locations/accounts')

module.exports = {
  active: {
    type: 'boolean'
  },
  deleted: {
    type: 'boolean'
  },
  name: {
    anyOf: [
      {
        description: 'A custom name for an expense account.',
        example: 'Utilities expense',
        type: 'string',
        minLength: 1,
        maxLength: 64
      },
      {
        type: 'null'
      }
    ]
  },
  fa_account_number: {
    anyOf: [
      {
        description: 'The custom financial account identifier.',
        example: '1776',
        type: 'string',
        minLength: 1,
        maxLength: 64
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
  type: {
    type: 'string',
    'enum': [
      'expense',
      'deposit',
      'bank',
      'transit',
      'safe'
    ]
  },
  tax: {
    description: 'DEPRECATED',
    // NOTE: due to migration path, make sure clients always write this value with actual uuid. Nullability is reserved for future refactoring
    oneOf: [
      {
        type: 'string',
        maxLength: 64
      },
      {
        type: 'null'
      }
    ]
  }
}
