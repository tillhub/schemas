const grossPriceCondition = {
  if: {
    allOf: [
      {
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
    properties: {
      prices: {
        type: 'object',
        properties: {
          default_prices: {
            type: 'array',
            contains: {
              type: 'object',
              properties: {
                amount: {
                  type: 'object',
                  properties: {
                    gross: {
                      type: 'number',
                      minimum: 0,
                      multipleOf: 0.01
                    }
                  },
                  required: ['gross']
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
