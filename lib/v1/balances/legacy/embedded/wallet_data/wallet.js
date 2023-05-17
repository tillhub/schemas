const { oneOf } = require('../../../../../helpers/payload-or-null')
const currencyAmount = require('../../../../../common/currency_amount')

module.exports = {
  description: 'Cash balance for a specific wallet',
  additionalProperties: false,
  type: 'object',
  required: [
    'id'
  ],
  properties: {
    id: {
      type: 'string',
      example: '860defb8-5598-421d-9da4-f0826e767536',
      format: 'uuid',
      description: 'The Tillhub wallet resource ID'
    },
    outstanding: {
      ...oneOf({
        description: 'The outstanding cash for this wallet at the time of the balance',
        ...currencyAmount
      })
    }
  }
}
