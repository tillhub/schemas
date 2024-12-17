module.exports = {
  type: 'object',
  additionalProperties: false,
  description: 'Describes a monetary value in a specific currency.',
  required: ['amount', 'currency'],
  properties: {
    currency: {
      type: 'string',
      description: 'The three letter [ISO currency](https://en.wikipedia.org/wiki/ISO_4217) of this item.',
      example: 'EUR',
      minLength: 3,
      maxLength: 3
    },
    amount: {
      type: 'number',
      description: 'The value as .2-Decimal.',
      example: '47.02',
      minimum: -1000000,
      maximum: 1000000,
      multipleOf: 0.01
    }
  }
}
