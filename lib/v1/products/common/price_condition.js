const grossPriceCondition = {
  if: {
    allOf: [
      {
        required: ['configuration'],
        properties: {
          configuration: {
            type: 'object',
            properties: {
              pricing: {
                type: 'object',
                properties: {
                  request_input: {
                    not: {
                      const: true
                    }
                  }
                }
              }
            }
          }
        }
      },
      {
        properties: {
          sellable: {
            not: { const: false }
          }
        }
      }
    ]
  },
  then: {
    required: ['prices'],
    properties: {
      prices: {
        type: 'object',
        required: ['default_prices'],
        properties: {
          default_prices: {
            type: 'array',
            contains: {
              type: 'object',
              required: ['amount'],
              properties: {
                amount: {
                  type: 'object',
                  required: ['gross'],
                  properties: {
                    gross: {
                      type: 'number',
                      minimum: 0,
                      multipleOf: 0.01
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
}

module.exports = { grossPriceCondition }
