const { oneOf } = require('../../../helpers/payload-or-null')

module.exports = {
  description: 'Payments grouped by payment_option',
  additionalProperties: false,
  type: 'object',
  required: [
    'payment_option',
    'currency',
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
    payment_option: {
      type: 'string',
      format: 'uuid',
      example: '5ad2351d-9a67-45f9-ad4f-0abcbefa9037',
      description: 'The payment_option ressource id'
    },
    payment_option_id: {
      ...oneOf({
        type: 'integer',
        example: 131,
        description: 'Legacy id of the payment option'
      })
    },
    payment_option_name: {
      ...oneOf({
        type: 'string',
        example: 'American Express',
        description: 'Name of the used payment option'
      })
    },
    payment_option_type_name: {
      ...oneOf({
        type: 'string',
        enum: [
          'undefined',
          'cash',
          'invoice',
          'gift_card', // -> voucher
          'card_opi', // deprecated -> use 'card'
          'card_concardis', // deprecated -> use 'card'
          'card_tim', // deprecated -> use 'card'
          'card_adyen', // deprecated -> use 'card'
          'card',
          'terminal_gift_card' // e.g. Adyen Gift Card
        ],
        description: 'Payment option type'
      })
    },
    fa_account: {
      ...oneOf({
        type: 'string',
        example: '1505',
        description: 'Custom identifier for the payment option financial account'
      })
    },
    cost_center: {
      ...oneOf({
        type: 'string',
        example: '0005',
        description: 'Custom identifier for the payment option cost center'
      })
    },
    currency_iso_code: {
      type: 'string',
      example: 'EUR',
      description: 'The three letter [ISO currency](https://en.wikipedia.org/wiki/ISO_4217) of this balance payment.'
    },
    amount: {
      type: 'integer',
      example: 1850,
      description: 'The daily amount for this payment option, tips included (in cent-format: 1267 == 12.67€)'
    },
    amount_tip: {
      ...oneOf({
        type: 'integer',
        example: 1850,
        description: 'The daily tip amount for this payment option (in cent-format: 1267 == 12.67€)'
      })
    },
    discrepancy: {
      ...oneOf({
        type: 'integer',
        example: 1850,
        description: 'The daily discrepancy between calculated and counted amounts, POS: counted - calculated, not available anymore for non-cash types (e.g. terminal) (in cent-format: 1267 == 12.67€)'
      })
    },
    exchangeRate: {
      ...oneOf({
        type: 'number',
        example: 1.403,
        description: 'Exchange rate of the payment option, not used.'
      })
    }
  }
}
