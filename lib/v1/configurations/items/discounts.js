const { oneOf } = require('../../../helpers/payload-or-null')
const currencyAmountObject = require('../../../common/currency_amount')

const discountOptions = {
  exceed_product_price: {
    type: 'boolean',
    default: false
  },
  maximum_rate: {
    type: 'number',
    minimum: 0,
    maximum: 1,
    multipleOf: 0.001
  },
  maximum_value: {
    ...oneOf({
      type: 'array',
      description: 'A list of non-negative monetary values by currency',
      items: {
        ...currencyAmountObject
      }
    })
  }
}

module.exports = {
  type: 'object',
  properties: {
    display: {
      type: 'object',
      properties: {
        show_inactive: {
          default: false,
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
    variable: {
      type: 'object',
      properties: {
        ...discountOptions
      }
    },
    fixed: {
      type: 'object',
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
