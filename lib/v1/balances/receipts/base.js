const { oneOf } = require('../../../helpers/payload-or-null')

module.exports = {
  description: 'Taxes grouped by tax accounts (and currencies if neccessary)',
  additionalProperties: false,
  required: [
    'type',
    'text'
  ],
  properties: {
    type: {
      type: 'string',
      enum: [
        'balance', // the main receipt
        'terminal' // reconciliation texts from card terminals
      ]
    },
    text: {
      type: 'string',
      maxLength: 16384
    },
    comments: {
      ...oneOf({
        type: 'string',
        example: 'Terminal reconciliation, Adyen.',
        maxLength: 8192,
        description: 'Any arbitrary comment.'
      }),
      default: null
    }
  }
}
