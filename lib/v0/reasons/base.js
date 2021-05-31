const { oneOf } = require('../../helpers/payload-or-null')

module.exports = {
  name: {
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
          // does currently ONLY apply for type 'refund'
          ...oneOf({
            description: 'defines automatic navigation, e.g. directly navigating to payments when a reason for an item refund was given',
            type: 'string',
            enum: [
              'payment_view',
              'carts',
              'ask'
            ]
          })
        }
      }
    },
    {
      'type': 'null'
    }
    ])
  },
  deleted: {
    type: 'boolean'
  },
  active: {
    type: 'boolean'
  },
  type: {
    type: 'string',
    enum: [
      'refund',
      'stock_change',
      'expense',
      'deposit'
    ]
  },
  noted_required: {
    type: 'boolean',
    default: false
  },
  image_required: {
    type: 'boolean',
    default: false
  },
  approval_required: {
    type: 'boolean',
    default: false
  }
}
