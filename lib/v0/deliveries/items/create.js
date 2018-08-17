module.exports = {
  tpye: 'array',
  minItems: 1,
  items: {
    type: 'object',
    additionalProperties: false,
    required: [
      'product',
      'qty'
    ],
    properties: {
      position: {
        type: 'number',
        minimum: 0
      },
      product: {
        type: 'string',
        format: 'uuid'
      },
      qty: {
        type: 'number'
      },
      stock: {
        type: 'string',
        format: 'uuid'
      },
      stock_location: {
        type: 'string',
        format: 'uuid'
      },
      added_at: {
        type: 'string',
        format: 'date-time'
      },
      comments: {
        oneOf: [
          {
            type: 'string',
            minLength: 1,
            maxLength: 4096
          },
          {
            type: 'null'
          }
        ]
      }
    }
  }
}
