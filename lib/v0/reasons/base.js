const { oneOf } = require('../../helpers/payload-or-null')

module.exports = {
  reason: {
    ...oneOf([{
      type: 'string',
      minLength: 1,
      maxLength: 128
    }])
  },
  description: {
    ...oneOf([{
      type: 'string',
      minLength: 1,
      maxLength: 4096
    }])
  },
  behavior: {
    ...oneOf([{
      type: 'object',
      properties: {
        stock: {
          type: 'string',
          enum: [
            'restock'
            // more to come
          ]
        },
        stock_location: {
          type: 'string',
          enum: [
            'current'
            // more to come
          ]
        },
        navigation: {
          type: 'string',
          enum: [
            'payment_view',
            'carts',
            'ask'
          ]
        }
      }
    }])
  },
  deleted: {
    type: 'boolean'
  },
  active: {
    type: 'boolean'
  }
}
