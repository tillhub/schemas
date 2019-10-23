const price = require('./price')

module.exports = {
  additionalProperties: false,
  properties: {
    branch: {
      oneOf: [
        {
          type: 'string',
          format: 'uuid'
        },
        {
          type: 'null'
        }
      ]
    },
    prices: {
      type: 'array',
      items: {
        type: 'object',
        properties: {
          ...price
        }
      }
    }
  },
  required: [
    'branch',
    'prices'
  ]
}
