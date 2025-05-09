const { oneOf } = require('../../../../../helpers/payload-or-null')

module.exports = {
  type: 'object',
  additionalProperties: false,
  description: 'Any applied addons as they happened at transaction creation time.',
  properties: {
    addon: {
      type: 'string',
      format: 'uuid',
      description: 'The Tillhub addon resource reference ID.',
      example: 'ac847a66-d7dc-4ac2-8e8a-c44920e1f220'
    },
    product: oneOf({
      type: 'string',
      format: 'uuid',
      description: 'If available - the product set on the addon.',
      example: 'ff847a44-07dc-4ac2-8e8a-c44920e1f220'
    }),
    price: {
      type: 'number',
      description: 'The fixed price for any addon, completely independent on the quantity.',
      example: 0.99,
      minimum: -1000000,
      maximum: 1000000,
      multipleOf: 0.01
    },
    currency: {
      type: 'string',
      description: 'The ISO currency code for the addon\'s price.',
      example: 'EUR',
      minLength: 3,
      maxLength: 3
    },
    quantity: {
      type: 'number',
      description: 'Number of times the addon is applied to the cart item. Respects the max_quantity setting on the Addon',
      example: 3.6,
      minimum: -32767.000,
      maximum: 32767.000,
      multipleOf: 0.001
    },
    stock_quantity: {
      type: 'number',
      description: 'The quantity of this addon, e.g. 1 pc or 0.125kg - this does never affect the price (only used for stock).',
      example: 3.6,
      minimum: -32767.000,
      maximum: 32767.000,
      multipleOf: 0.001
    },
    name: {
      type: 'string',
      description: 'The name of this addon to keep in case if original product has been changed',
      example: 'Extra Mushrooms',
      minLength: 1,
      maxLength: 256
    },
    group_name: {
      type: 'string',
      description: 'Optional name of the addon group this item belongs to.',
      example: 'Toppings'
    },
    is_add_to_cart: {
      type: 'boolean',
      description: 'Flag indicating whether this addon was explicitly added to cart.',
      example: true
    }
  },
  required: [
    'addon',
    'price',
    'currency',
    'quantity',
    'name'
  ]
}
