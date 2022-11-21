const { oneOf } = require('../../../helpers/payload-or-null')

module.exports = {
  type: 'object',
  properties: {
    card_mapping_warnings: oneOf({
      description: 'If true, notifies the user about failed automatic mapping of card-circuits to a different payment-option.',
      default: false,
      type: 'boolean'
    }),
    allow_disconnected_terminals: oneOf({
      type: 'string',
      enum: [
        'never',
        'once',
        'always'
      ],
      default: 'never'
    }),
    blacklisted_payment_types: {
      description: 'Hides the payment options that match the blacklisted type from payment screen',
      type: 'array',
      items: {
        type: {
          type: 'string',
          'enum': [
            'cash',
            'card',
            'invoice',
            'gift_card',
            'terminal_gift_card'
          ]
        }
      }
    },
    allow_refund_split: oneOf({
      description: 'If true, allows multiple payments on negative cart totals, e.g. undefined + cash (e.g. health insurance case).',
      default: false,
      type: 'boolean'
    }),
    allow_change_on_cards: oneOf({
      description: 'If true, allows entering values for split payments that are higher than the remaining price - thus potentially handing back cash (legacy behavior).',
      default: false,
      type: 'boolean'
    })
  }
}
