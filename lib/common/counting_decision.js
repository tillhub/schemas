const { oneOf } = require('../helpers/payload-or-null')

module.exports = {
  type: 'object',
  additionalProperties: false,
  description: 'Describes a non-negative monetary value in a specific currency.',
  required: ['type', 'currency'],
  properties: {
    date: {
      description: 'Date of a counting number decision',
      type: 'string',
      format: 'date-time',
      example: '2019-01-23 16:51:29.143+00'
    },
    type: {
      type: 'string',
      description: 'The affected transaction type',
      enum: [
        'sale',
        'expense',
        'balance',
        'delivery_note',
        'saved_cart'
      ]
    },
    local: oneOf({
      type: 'integer',
      description: 'The local number at the time of the decision.',
      example: 7,
      minimum: 0
    }),
    remote: oneOf({
      type: 'integer',
      description: 'The remote number at the time of the decision.',
      example: 7,
      minimum: 0
    }),
    decision: {
      type: 'integer',
      description: 'The effective number after the decision.',
      example: 7,
      minimum: 0
    }
  }
}
