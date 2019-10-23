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
    display: {
      type: 'object',
      additionalProperties: false,
      properties: {
        show_inactive: {
          default: false,
          description: 'If true, non-active discounts will be still displayed (greyed out)',
          oneOf: [
            {
              type: 'null'
            },
            {
              type: 'boolean'
            }
          ]
        }
      }
    },
    limits: {
      type: 'object',
      description: 'Global limits for effective discount values',
      additionalProperties: false,
      properties: {
        cart_item: {
          type: 'object',
          description: 'Global limits for effective discount values on single cart items (affects current cart via multi-assignment)',
          additionalProperties: false,
          properties: {
            variable: {
              type: 'object',
              description: '0-discounts (Frank) that let the cashier enter a value, limits e.g. to 30% AND $2.00',
              additionalProperties: false,
              properties: {
                ...discountOptions,
                can_exceed_cart_item_total: {
                  description: 'If true, negative outcomes are alowed (via stacking value discounts) or having rates > 1.0',
                  type: 'boolean',
                  default: false
                }
              }
            },
            fixed: {
              type: 'object',
              description: 'Standard-discounts (have 5% or $3.00 already) - limit creation values in the Dashboard',
              additionalProperties: false,
              properties: {
                ...discountOptions,
                can_exceed_cart_item_total: {
                  description: 'If true, negative outcomes are alowed (via stacking value discounts) or having rates > 1.0',
                  type: 'boolean',
                  default: false
                }
              }
            }
          }
        },
        cart: {
          type: 'object',
          description: 'Global limits for effective discount values on the whole cart (must additionally respect values for items)',
          additionalProperties: false,
          properties: {
            ...discountOptions
          }
        },
        stacked_on_product: {
          type: 'boolean',
          default: true
        }
      }
    }
  }
}
