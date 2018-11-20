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
  }
}
