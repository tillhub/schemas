const { oneOf } = require('../../../../../helpers/payload-or-null')
const currencyAmountObject = require('../../../../../common/currency_amount')

module.exports = {
  description: 'VATs grouped by VAT fa_account',
  additionalProperties: false,
  type: 'object',
  required: [
    'fa_account',
    'percentage',
    'amount'
  ],
  properties: {
    client_id: {
      ...oneOf({
        type: 'string',
        example: 'd0d40841-b1a7-438a-9d1e-2bfec590d2e3',
        minLength: 6,
        maxLength: 64,
        description: 'A implementer defined identifier. This can be used for local resource matching and has no business implication.'
      }),
      default: null
    },
    fa_account: {
      type: 'string',
      example: '1505',
      description: 'Custom identifier for the revenue financial account'
    },
    percentage: {
      type: 'integer',
      example: '1900',
      description: 'Millis representattion for the VAT percentage, 1900 == 19% == 0.19'
    },
    amount: {
      type: 'number',
      example: 18.50,
      description: 'The per fa_account daily VAT amount. 18.50 == 18.50 CHF'
    },
    amount_gross: {
      ...oneOf({
        type: 'object',
        example: '{"amount": 666.7, "currency": "CHF"}',
        description: 'The per VAT fa_account daily gross amount',
        ...currencyAmountObject
      })
    },
    amount_net: {
      ...oneOf({
        type: 'object',
        example: '{"amount": 634.96, "currency": "CHF"}',
        description: 'The per VAT fa_account daily net amount',
        ...currencyAmountObject
      })
    }
  }
}
