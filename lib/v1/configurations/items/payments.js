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
    blacklisted_payment_types: oneOf({
      description: 'Hides the payment options that match the blacklisted types from payment screen',
      type: 'array',
      items: {
        type: 'string',
        enum: [
          'cash',
          'card',
          'invoice',
          'gift_card',
          'terminal_gift_card'
        ]
      }
    }),
    blacklisted_payment_options: oneOf({
      description: 'Hides the payment options that match the blacklisted uuids from payment screen',
      type: 'array',
      items: {
        type: 'string',
        format: 'uuid'
      }
    }),
    allow_split_by_person: oneOf({
      description: 'If true, allows split by person',
      default: false,
      type: 'boolean'
    }),
    allow_refund_split: oneOf({
      description: 'If true, allows multiple payments on negative cart totals, e.g. undefined + cash (e.g. health insurance case).',
      default: false,
      type: 'boolean'
    }),
    allow_change_on_cards: oneOf({
      description: 'If true, allows entering values for split payments that are higher than the remaining price - thus potentially handing back cash (legacy behavior).',
      default: false,
      type: 'boolean'
    }),
    show_foreign_currencies: oneOf({
      description: 'If true, show also payment options outside the currently used one. This still will ot have any effect on payments!',
      default: false,
      type: 'boolean'
    }),
    allow_change_on_undefined: oneOf({
      description: 'If true, allows entering values for split payments that are higher than the remaining price - thus potentially handing back cash (legacy behavior).',
      default: false,
      type: 'boolean'
    }),
    trigger_amount_on_undefined: oneOf({
      description: 'If true, will ask for the amount on undefined payment types (rather than setting the total price of the cart).',
      default: false,
      type: 'boolean'
    }),
    buy_now_pay_later: oneOf({
      description: 'Settings for Unzer BNPL',
      type: 'object',
      additionalProperties: false,
      properties: {
        secret: oneOf({
          type: 'string',
          description: 'Configured secret for the Unzer BNPL API',
          example: 'QmSgQtMNfm0uZjVedM1BvqGRIQ3D9wjclLYDZcXPZve'
        }),
        success_url: oneOf({
          type: 'string',
          description: 'Configured success url, customers will be redirected to it after finishing the pay-later flow',
          default: 'https://bnpl.tillhub.com/?data=',
          example: 'https://bnpl.tillhub.com/?data=BNPL-{CART_UUID}'
        })
      }
    })
  }
}
