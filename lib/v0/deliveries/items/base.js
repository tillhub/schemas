module.exports = {
  type: 'object',
  additionalProperties: false,
  properties: {
    position: {
      type: 'number',
      minimum: 0
    },
    product: {
      type: 'string',
      format: 'uuid'
    },
    delivery: {
      type: 'string',
      format: 'uuid'
    },
    qty: {
      oneOf: [
        {
          type: 'number'
        },
        {
          type: 'null'
        }
      ]
    },
    qty_picked: {
      oneOf: [
        {
          type: 'number'
        },
        {
          type: 'null'
        }
      ]
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
