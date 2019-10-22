module.exports = {
  description: 'The discrepancy amount by currency',
  additionalProperties: false,
  type: 'object',
  required: [
    'currency',
    'amount'
  ],
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
      description: 'The quantity of this unit.',
      examples: [27633.02],
      minimum: -1000000,
      maximum: 1000000,
      multipleOf: 0.01
    }
  }
}
