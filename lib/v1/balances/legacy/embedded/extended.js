const { oneOf } = require('../../helpers/payload-or-null')
const currencyAmount = require('../../base/currencyAmount')

module.exports = {
  description: 'Extended balance stats',
  additionalProperties: false,
  type: 'object',
  required: [
  ],
  properties: {
    cancellation_amount: {
      description: 'Revenue total of sale cancellations',
      ...oneOf({
        ...currencyAmount
      }),
      default: null
    },
    cancellation_count: {
      ...oneOf({
        description: 'Count of sale cancellations',
        type: 'integer',
        minimum: 0,
        maximum: 5000
      }),
      default: null
    },
    transaction_stats: oneOf({
      type: 'array',
      description: 'Stats per time intervals',
      items: {
        description: 'Stats per time interval',
        additionalProperties: false,
        type: 'object',
        properties: {
          start_date: {
            type: 'string',
            format: 'date-time',
            example: '2018-01-29T14:55:05.000Z',
            description: 'Date when this payment was created'
          },
          end_date: {
            type: 'string',
            format: 'date-time',
            example: '2018-01-29T14:55:05.000Z',
            description: 'Date when this payment was created'
          },
          count: {
            description: 'Count of sales between start and end',
            type: 'integer',
            minimum: 0,
            maximum: 5000
          },
          amount: {
            description: 'Revenue of sales between start and end',
            ...currencyAmount
          }
        }
      }
    }),
    discount_stats: oneOf({
      type: 'array',
      description: 'Stats per source discount',
      items: {
        description: 'Stats per time interval',
        additionalProperties: false,
        type: 'object',
        properties: {
          source_id: {
            type: 'string',
            format: 'uuid',
            example: '03063bbe-e44d-42f6-8bbf-971f5d88f848',
            description: 'The Tillhub discount resource identifier'
          },
          name: {
            type: 'string',
            example: 'Christmas Bonus',
            description: 'The Tillhub discount name'
          },
          count: {
            description: 'Count of applications',
            type: 'integer',
            minimum: 0,
            maximum: 5000
          },
          amount: {
            description: 'Amount per this discount',
            ...currencyAmount
          }
        }
      }
    }),
    first_transaction_date: oneOf({
      type: 'string',
      format: 'date-time',
      example: '2018-01-29T14:55:05.000Z',
      description: 'Date of the first transaction'
    }),
    last_transaction_date: oneOf({
      type: 'string',
      format: 'date-time',
      example: '2018-01-29T14:55:05.000Z',
      description: 'Date of the last transaction'
    }),
    first_transaction_number: oneOf({
      type: 'integer',
      example: 221,
      description: 'Counting number of the first transaction'
    }),
    last_transaction_number: oneOf({
      type: 'integer',
      example: 234,
      description: 'Counting number of the last transaction'
    }),
    first_sale_transaction_number: oneOf({
      type: 'integer',
      example: 221,
      description: 'Counting number of the first sale'
    }),
    last_sale_transaction_number: oneOf({
      type: 'integer',
      example: 234,
      description: 'Counting number of the last sale'
    }),
    first_expense_transaction_number: oneOf({
      type: 'integer',
      example: 221,
      description: 'Counting number of the first expense'
    }),
    last_expense_transaction_number: oneOf({
      type: 'integer',
      example: 234,
      description: 'Counting number of the last expense'
    }),
    revenue_gross: oneOf({
      description: 'Gross revenue',
      ...currencyAmount
    }),
    revenue_net: oneOf({
      description: 'Net revenue',
      ...currencyAmount
    }),
    average_amount_gross_per_cart: oneOf({
      description: 'revenue_gross / sales_count',
      ...currencyAmount
    }),
    cart_items_count: oneOf({
      description: 'Count of cart items',
      type: 'integer',
      minimum: 0,
      maximum: 5000
    }),
    total_quantity: oneOf({
      description: 'Total item quantity',
      type: 'number',
      example: 245.73
    }),
    average_quantity_per_cart: oneOf({
      type: 'number',
      example: 4.73,
      description: 'total_quantity / sales_count'
    }),
    average_cart_items_count_per_cart: oneOf({
      type: 'number',
      example: 3.108,
      description: 'cart_items_count / sales_count'
    }),
    discount_amount: oneOf({
      description: 'sum(discount_stats.amount)',
      ...currencyAmount
    }),
    voucherAmount: oneOf({
      description: 'total balance of all voucher increments and decrements',
      ...currencyAmount
    })
  }
}
