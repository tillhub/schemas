module.exports = {
  anyOf: [
    {
      type: 'object',
      additionalProperties: true,
      properties: {
        allow_zero_prices: {
          description: 'Allow adding this product to a cart if it has no price.',
          type: 'boolean'
        }
      }
    },
    {
      type: 'null'
    }
  ]
}
