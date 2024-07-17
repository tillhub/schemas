const { oneOf } = require('../../../../helpers/payload-or-null')
const currencyAmount = require('../../../../common/currency_amount')

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
    total_count_transactions: oneOf({
      description: 'Count of all transactions (sale, expense ... cancel)',
      type: 'integer',
      minimum: 0,
      maximum: 5000
    }),
    total_count_expenses: oneOf({
      description: 'Count of all expenses ... cancel)',
      type: 'integer',
      minimum: 0,
      maximum: 5000
    }),
    first_transaction_timestamp: oneOf({
      type: 'string',
      format: 'date-time',
      example: '2018-01-29T14:55:05.000Z',
      description: 'Date of the first transaction'
    }),
    last_transaction_timestamp: oneOf({
      type: 'string',
      format: 'date-time',
      example: '2018-01-29T14:55:05.000Z',
      description: 'Date of the last transaction'
    }),
    first_transaction_client_uuid: oneOf({
      type: 'string',
      example: 'fd5bf507-e0e0-48f5-b322-619b6712b719',
      minLength: 6,
      maxLength: 64,
      description: 'client id of the first transaction'
    }),
    last_transaction_client_uuid: oneOf({
      type: 'string',
      example: 'd0d40841-b1a7-438a-9d1e-2bfec590d2e3',
      minLength: 6,
      maxLength: 64,
      description: 'client id of the last transaction'
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
    device: oneOf({
      type: 'object',
      properties: {
        identifier_for_vendor: oneOf({
          type: 'string',
          description: 'Current vendor identifier regardless of value stored in keychain'
        }),
        keychain_counting_numbers: oneOf({
          type: 'string',
          description: 'Snapshot of the keychain counting numbers table'
        })
      }
    })
  }
}
