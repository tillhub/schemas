const { oneOf } = require('../../../helpers/payload-or-null')

module.exports = {
  description: 'The discrepancy amount by currency',
  additionalProperties: false,
  type: 'object',
  required: [
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
    currency: {
      type: 'string',
      description: 'The three letter [ISO currency](https://en.wikipedia.org/wiki/ISO_4217) of this item.',
      example: 'EUR',
      minLength: 3,
      maxLength: 3
    },
    amount: {
      type: 'number',
      description: 'The quantity of this unit.',
      example: '27633.02',
      minimum: 0,
      maximum: 1000000,
      multipleOf: 0.01
    }
  }
}
