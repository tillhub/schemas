module.exports = {
  amount: {
    type: 'number',
    minimum: 0
  },
  type: {
    type: 'string',
    'enum': [
      'percentage',
      'value'
    ]
  },
  account: {
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
  name: {
    anyOf: [
      {
        type: 'string',
        maxLength: 64
      },
      {
        type: 'null'
      }
    ]
  },
  group: {
    type: 'string',
    'enum': [
      'cart',
      'customer'
    ]
  },
  active: {
    type: 'boolean'
  },
  deleted: {
    type: 'boolean'
  },
  constraints: {
    oneOf: [
      {
        type: 'object'
      },
      {
        type: 'null'
      }
    ]
  }
}
