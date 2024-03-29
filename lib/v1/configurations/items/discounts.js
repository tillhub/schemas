const { oneOf } = require('../../../helpers/payload-or-null')
const currencyAmountObject = require('../../../common/currency_amount')

const discountOptions = {
  maximum_rate: {
    ...oneOf({
      type: 'number',
      description: 'Effective rate that a discount can not exceed',
      minimum: 0,
      maximum: 1,
      multipleOf: 0.001
    })
  },
  maximum_value: {
    ...oneOf({
      type: 'array',
      description: 'Effective monetary values (by currency) that a discount can not exceed',
      items: {
        ...currencyAmountObject
      }
    })
  }
}

module.exports = {
  type: 'object',
  additionalProperties: false,
  properties: {
    value_distribution: oneOf({
      description: 'Defines the distribution for absolute value discounts applied to more than one cart item.',
      type: 'string',
      enum: [
        'uniform', // each item will get the same amount (~ target / N)
        'proportional' // item will get an amount proportional to it's current total with respect to the cart total (~ target * item / total)
      ],
      default: 'proportional'
    }),
    display: oneOf({
      type: 'object',
      additionalProperties: false,
      properties: {
        show_inactive: oneOf({
          type: 'boolean',
          description: 'If true, non-active discounts will be still displayed (greyed out)',
          default: false
        }),
        item_details: oneOf({
          description: 'Discount display on cart item details',
          type: 'object',
          additionalProperties: false,
          properties: {
            hide_cart_behavior: oneOf({
              description: 'If true - hide discounts that have the behavior type \'cart\'',
              type: 'boolean',
              default: false
            })
          }
        })
      }
    }),
    limits: oneOf({
      type: 'object',
      description: 'Global limits for effective discount values',
      additionalProperties: false,
      properties: {
        cart_item: oneOf({
          type: 'object',
          description: 'Global limits for effective discount values on single cart items (affects current cart via multi-assignment)',
          additionalProperties: false,
          properties: {
            variable: oneOf({
              type: 'object',
              description: '0-discounts (Frank) that let the cashier enter a value, limits e.g. to 30% AND $2.00',
              additionalProperties: false,
              properties: {
                ...discountOptions,
                can_exceed_cart_item_total: oneOf({
                  description: 'If true, negative outcomes are alowed (via stacking value discounts) or having rates > 1.0',
                  type: 'boolean',
                  default: false
                })
              }
            }),
            fixed: oneOf({
              type: 'object',
              description: 'Standard-discounts (have 5% or $3.00 already) - limit creation values in the Dashboard',
              additionalProperties: false,
              properties: {
                ...discountOptions,
                can_exceed_cart_item_total: oneOf({
                  description: 'If true, negative outcomes are alowed (via stacking value discounts) or having rates > 1.0',
                  type: 'boolean',
                  default: false
                })
              }
            }),
            automatic: oneOf({
              type: 'object',
              description: 'Rules for automatic discounts when adding a product to the cart',
              additionalProperties: false,
              properties: {
                override_stacked_on_product: oneOf({
                  description: 'If true, overrides generic limits.stacked_on_product.',
                  type: 'boolean',
                  default: false
                })
              }
            }),
            price_and_quantity_edit_condition: oneOf({
              description: 'In case of discounted items - specifies if quantity and price can still be edited',
              type: 'string',
              enum: [
                'none',
                'no_value_discounts',
                'no_discounts'
              ],
              default: 'no_value_discounts'
            })
          }
        }),
        cart: oneOf({
          type: 'object',
          description: 'Global limits for effective discount values on the whole cart (must additionally respect values for items)',
          additionalProperties: false,
          properties: {
            ...discountOptions
          }
        }),
        stacked_on_product: oneOf({
          description: 'Regulates if cart items can have more than 1 discount.',
          type: 'boolean',
          default: true
        })
      }
    })
  }
}
