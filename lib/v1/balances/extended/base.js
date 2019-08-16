const { oneOf } = require('../../../helpers/payload-or-null')
const currencyAmountObject = require('../../../common/currency_amount')
const transactionStatObject = require('./transaction_stat')
const discountStatObject = require('./discount_stat')

module.exports = {
  description: 'Extended balance statistics.',
  additionalProperties: false,
  type: 'object',
  required: [
    'first_transaction_date',
    'last_transaction_date'
  ],
  properties: {
    first_transaction_date: {
      type: 'string',
      format: 'date-time',
      example: '2018-01-29T14:55:05.000Z',
      description: 'Date of the first transaction within that balance'
    },
    last_transaction_date: {
      type: 'string',
      format: 'date-time',
      example: '2018-01-29T18:15:02.000Z',
      description: 'Date of the last transaction within that balance'
    },
    cancellation_amount: {
      description: 'Total amount of cancellations within the balance.',
      ...oneOf({
        ...currencyAmountObject
      })
    },
    cancellation_count: {
      description: 'Total count of cancellations within the balance.',
      ...oneOf({
        type: 'integer',
        minimum: 0
      })
    },
    transaction_stats: {
      ...oneOf({
        type: 'array',
        description: 'A list of transaction statistics',
        items: {
          ...transactionStatObject
        }
      }),
      default: null
    },
    discount_stats: {
      ...oneOf({
        type: 'array',
        description: 'A list of discount statistics',
        items: {
          ...discountStatObject
        }
      }),
      default: null
    }
  }
}
