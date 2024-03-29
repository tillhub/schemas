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
        type: 'string',
        maxLength: 128
      },
      {
        type: 'null'
      }
    ]
  },
  type: {
    type: 'string',
    'enum': [
      'vat'
    ]
  },
  account: {
    description: 'DEPRECATED: do not use',
    type: 'string'
  },
  rate: {
    type: 'number',
    minimum: 0
  },
  percentage: {
    type: 'number',
    minimum: 0
  },
  is_fixed: {
    type: 'boolean',
    'default': false
  },
  active: {
    type: 'boolean',
    default: true
  },
  deleted: {
    type: 'boolean',
    default: false
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
  jurisdiction: {
    default: null,
    oneOf: [
      {
        description: 'Additional regional limits for taxes, e.g. one account with branches in Germany and Switzerland',
        type: 'string',
        'enum': [
          'austria',
          'belgium',
          'bulgaria',
          'croatia',
          'cyprus',
          'czechia',
          'denmark',
          'estonia',
          'finland',
          'france',
          'germany',
          'greece',
          'hungary',
          'ireland',
          'italy',
          'latvia',
          'lithuania',
          'luxembourg',
          'malta',
          'monaco',
          'netherlands',
          'poland',
          'portugal',
          'romania',
          'slovakia',
          'slovenia',
          'spain',
          'sweden',
          'switzerland'
        ]
      },
      {
        type: 'null'
      }
    ]
  },
  rate_class: {
    default: 'normal',
    description: 'Rate class according to international standards, used in Germany to map types for e.g. fiscalization',
    type: 'string',
    'enum': [
      'normal',
      'reduced',
      'super_reduced'
    ]
  }
}
