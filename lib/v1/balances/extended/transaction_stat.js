const { oneOf } = require('../../../helpers/payload-or-null')
const currencyAmountObject = require('../../../common/currency_amount')

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
    }
  }
}
