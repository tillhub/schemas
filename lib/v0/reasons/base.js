const { oneOf } = require('../../helpers/payload-or-null')

module.exports = {
  name: {
    ...oneOf([{
      description: 'The reason name',
      example: 'Returned goods',
      type: 'string',
      minLength: 1,
      maxLength: 128
    }])
  },
  description: {
    ...oneOf([{
      description: 'The reason description',
      example: 'Goods were returned by the customer',
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
    description: 'The reason is active',
    type: 'boolean'
  },
  type: {
    description: 'The reason type',
    example: 'expense',
    type: 'string',
    enum: [
      'refund',
      'pos_price_change',
      'stock_change',
      'expense',
      'deposit'
    ]
  },
  noted_required: {
    description: 'The action must be noted',
    type: 'boolean',
    default: false
  },
  image_required: {
    description: 'The image must be enclosed',
    type: 'boolean',
    default: false
  },
  approval_required: {
    description: 'The action must be approved by supervisor',
    type: 'boolean',
    default: false
  }
}
