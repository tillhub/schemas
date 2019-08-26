module.exports = {
  amount: {
    description: 'Either net or gross should be set (not null). Tax will be calculated accordingly automatically. We do not validate for either to be set, for data flexibility reasons.',
    type: 'object',
    properties: {
      net: {
        oneOf: [
          {
            example: '27633.02',
            type: 'number',
            minimum: 0,
            maximum: 1000000,
            multipleOf: 0.01
          },
          {
            type: 'null'
          }
        ]
      },
      gross: {
        oneOf: [
          {
            example: '27633.02',
            type: 'number',
            minimum: 0,
            maximum: 1000000,
            multipleOf: 0.01
          },
          {
            type: 'null'
          }
        ]
      }
    }
  },
  currency: {
    type: 'string',
    minLength: 3,
    maxLength: 3
  },
  percentage: {
    description: 'DEPRECATED',
    type: 'number'
  },
  purchase_price: {
    description: 'Define the opportunity cost or calculatory base price of this product and currency.',
    oneOf: [
      {
        example: '27633.02',
        type: 'number',
        minimum: 0,
        maximum: 1000000,
        multipleOf: 0.01
      },
      {
        type: 'null'
      }
    ]
  },
  cost: {
    description: 'Define additional cost.',
    oneOf: [
      {
        example: '27633.02',
        type: 'number',
        minimum: 0,
        maximum: 1000000,
        multipleOf: 0.01
      },
      {
        type: 'null'
      }
    ]
  },
  margin: {
    description: 'Add a margin to pruchase_price and cost to result in net.',
    oneOf: [
      {
        type: 'number',
        multipleOf: 0.0001
      },
      {
        type: 'null'
      }
    ]
  }
}
