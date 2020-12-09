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
      default: 'once'
    })
  }
}
