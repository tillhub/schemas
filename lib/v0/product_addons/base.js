const { oneOf } = require('../../helpers/payload-or-null')

module.exports = {
  name: {
    description: 'Product Addon name',
    type: 'string',
    maxLength: 512
  },
  addon_group: oneOf({
    type: 'string',
    format: 'uuid',
    description: 'Group that was assigned the Addon, can be assigned up to one Group'
  }),
  product: oneOf({
    type: 'string',
    format: 'uuid',
    description: 'Addon could reference a product'
  }),
  price_change: oneOf(
    {
      type: 'array',
      items: {
        type: 'object',
        properties: {
          currency: {
            type: 'string',
            minLength: 3,
            maxLength: 3
          },
          amount: {
            example: '27633.02',
            type: 'number',
            minimum: 0,
            maximum: 1000000,
            multipleOf: 0.01
          }
        }
      }
    }
  ),
  stock_quantity: {
    type: 'number',
    description: 'How much of the product stock will be moved  (defaults to 1 - only important if it affects stock). This value can be negative number!',
    default: 1
  },
  add_to_cart: {
    type: 'boolean',
    description: 'Only applicable if the price and {{product}}is set. It will instruct the POS to add the product as a separate cart item - upsell rather than an addon.',
    default: false
  },
  allow_quantity_edit: {
    type: 'boolean',
    description: 'Can the cashier edit the quantity of the addon selected (only important if it affects stock)',
    default: false
  },
  max_quantity: {
    type: 'number',
    description: 'Maximum count the product stock will be moved. Related to the allow_quantity_edit - only if it set to true',
    default: 1
  },
  order_index: {
    type: 'number',
    description: 'Display the Addon in a specific order',
    default: 1
  },
  active: {
    type: 'boolean',
    default: true
  },
  deleted: {
    type: 'boolean',
    default: false
  }
}
