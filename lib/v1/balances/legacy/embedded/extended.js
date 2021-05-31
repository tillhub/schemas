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
      description: 'Stats per time intervals - e.g. hourly stats',
      items: {
        description: 'Stats per time interval - e.g. stats per thisd specific hour',
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
        description: 'Stats per this specific source discount',
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
      description: 'Date of the first transaction (including expenses)'
    }),
    last_transaction_date: oneOf({
      type: 'string',
      format: 'date-time',
      example: '2018-01-29T14:55:05.000Z',
      description: 'Date of the last transaction (including expenses)'
    }),
    first_transaction_number: oneOf({
      type: 'integer',
      example: 221,
      description: 'Counting number of the first transaction (including expenses)'
    }),
    last_transaction_number: oneOf({
      type: 'integer',
      example: 234,
      description: 'Counting number of the last transaction (including expenses)'
    }),
    first_sale_transaction_number: oneOf({
      type: 'integer',
      example: 221,
      description: 'Counting number of the first sale (thus excluding expenses)'
    }),
    last_sale_transaction_number: oneOf({
      type: 'integer',
      example: 234,
      description: 'Counting number of the last sale (thus excluding expenses)'
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
      description: 'Total count of cart items of that day/balance period',
      type: 'integer',
      minimum: 0,
      maximum: 5000
    }),
    total_quantity: oneOf({
      description: 'Total item quantity of that day/balance period',
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
    voucher_amount: oneOf({
      description: 'total sum/balance of all voucher increments and decrements',
      ...currencyAmount
    }),
    excluded_vouchers: oneOf({
      description: 'values that exclude voucher-items from their calculation',
      type: 'object',
      properties: {
        average_cart_items_count_per_cart: oneOf({
          type: 'number',
          example: 3.108,
          description: 'cart_items_count / excluded_vouchers.sales_count'
        }),
        average_quantity_per_cart: oneOf({
          type: 'number',
          example: 4.73,
          description: 'total_quantity / excluded_vouchers.sales_count'
        }),
        cart_items_count: oneOf({
          description: 'Count of all cart items that are not vouchers',
          type: 'integer',
          minimum: 0,
          maximum: 5000
        }),
        revenue_gross: oneOf({
          description: 'Gross revenue, excluding vouchers',
          ...currencyAmount
        }),
        revenue_net: oneOf({
          description: 'Net revenue, excluding vouchers',
          ...currencyAmount
        }),
        sales_count: oneOf({
          type: 'integer',
          example: 26,
          description: 'Daily balance count of sales, excluding sales that have ONLY vocuher items'
        }),
        total_quantity: oneOf({
          description: 'Total item quantity of all items that are not vouchers',
          type: 'number',
          example: 245.73
        })
      }
    }),
    cashier_name: {
      ...oneOf({
        type: 'string',
        example: 'Baris Atamaer',
        description: 'Name of the cashier that conducted the balance.'
      })
    },
    expense_amount_excluding_bank: oneOf({
      description: 'Sum of all expense amounts (all tx of type expense with expense_account_type == expense | safe_expense | tip_expense',
      ...currencyAmount
    }),
    deposit_amount_excluding_bank: oneOf({
      description: 'Sum of all deposit amounts (all tx of type expense with expense_account_type == deposit | safe_deposit',
      ...currencyAmount
    }),
    refund_count: oneOf({
      type: 'integer',
      example: 4,
      description: 'Daily count of refunded cart items'
    }),
    refund_net: oneOf({
      description: 'Daily net revenue amount of all refunded cart items',
      ...currencyAmount
    }),
    refund_gross: oneOf({
      description: 'Daily gross revenue amount of all refunded cart items',
      ...currencyAmount
    })
  }
}
