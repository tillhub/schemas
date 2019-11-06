const { oneOf } = require('../../../../../helpers/payload-or-null')

module.exports = {
  ...oneOf({
    type: 'object',
    description: 'Information about a returned item.',
    properties: {
      // those keys should be renegotiated! This just reflects the current implementation
      id: {
        ...oneOf({
          type: 'string',
          format: 'uuid',
          example: '9d110eb2-2245-4e14-9574-49b502f3a9b3',
          description: 'The associated Tillhub reason resource.'
        }),
        default: null
      },
      reason: {
        ...oneOf({
          type: 'string',
          maxLength: 64,
          example: 'Accidental Charge',
          description: 'The  Tillhub reason resource\'s name.'
        }),
        default: null
      },
      description: {
        ...oneOf({
          type: 'string',
          maxLength: 1024,
          example: 'Accidentally charged the customer for products he did not buy',
          description: 'The  Tillhub reason resource\'s description.'
        }),
        default: null
      },
      custom_reason: {
        ...oneOf({
          type: 'string',
          maxLength: 1024,
          example: 'Cashier entered here a custom reason.',
          description: 'A client side user defined custom description for this return process.'
        }),
        default: null
      },
      behavior: {
        ...oneOf([{
          type: 'object',
          description: 'Copy of the behavior object from the reasons table.',
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
      }
    }
  }),
  default: null
}
