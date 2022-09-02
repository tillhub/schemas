module.exports = {
  added_at: {
    oneOf: [
      {
        type: 'string',
        description: 'ISO string (UTC) with timezone',
        example: '2018-07-11T10:43:46.888Z'
      },
      {
        type: 'null'
      }
    ]
  },
  issuer: {
    oneOf: [
      {
        type: 'object',
        example: {
          name: 'Mr. Smith'
        }
      },
      {
        type: 'null'
      }
    ]
  },
  order_qty: {
    type: 'number',
    default: 1
  },
  auto: {
    oneOf: [
      {
        type: 'boolean'
      },
      {
        type: 'null'
      }
    ],
    description: 'The string representation of boolean values as `false` or `true`. In almost all cases this can be omitted or set to \'false\'. Only send auto = true if the order item is a suggestion AND has been generated automatically (not by an end-user)'
  },
  suggestion: {
    oneOf: [
      {
        type: 'boolean'
      },
      {
        type: 'null'
      }
    ],
    description: 'the string representation of boolean values as `false` or `true`. Set to \'true\' if the order item is supposed to be a suggestion (as opposed to an actual item in the order)'
  },
  deleted: {
    type: 'boolean',
    default: false,
    description: 'the string representation of boolean values as `false` or `true`'
  },
  order: {
    type: 'string',
    description: 'Alphanumeric client ID of the order',
    example: '5cc4d431-0ee0-4d1f-8857-7f3f0cfdf528'
  },
  product: {
    type: 'string',
    description: 'Alphanumeric client ID of the product',
    example: 'e7f0bff9-2285-49d3-bfae-3cba4fbabbd5'
  },
  stock: {
    oneOf: [
      {
        type: 'string',
        description: 'Alphanumeric client ID of the stock',
        example: '603e723a-5484-4b86-9469-09025f773345'
      },
      {
        type: 'null'
      }
    ]
  },
  branch: {
    oneOf: [
      {
        type: 'string',
        description: 'Alphanumeric client ID of the branch',
        example: 'f5225fe4-29bd-479b-be70-a174e1cf1854'
      },
      {
        type: 'null'
      }
    ]
  }
}
