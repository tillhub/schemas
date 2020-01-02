module.exports = {
  description: 'Defines various product behaviours.',
  default: {
    allow_zero_prices: true,
    pricing: {
      allow_is_free: false
    }
  },
  anyOf: [
    {
      type: 'object',
      additionalProperties: true,
      properties: {
        allow_zero_prices: {
          description: 'Allow adding this product to a cart if it has no price.',
          type: 'boolean'
        },
        pricing: {
          type: 'object',
          properties: {
            allow_is_free: {
              description: 'If an eligible price is 0 define whether the user is prompted to enter a price or whether the price can stay 0, to essentially be a freebie.',
              type: 'boolean'
            }
          }
        }
      }
    },
    {
      type: 'null'
    }
  ]
}
