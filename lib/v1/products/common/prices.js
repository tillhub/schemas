const price = require('./price')

module.exports = {
  anyOf: [
    {
      type: 'object',
      properties: {
        branch_prices: {
          type: 'array',
          items: {
            type: 'object',
            properties: {
              branch: {
                // NOTE: to to legacy regression, we currently need to allow null branches
                oneOf: [
                  {
                    type: 'string',
                    format: 'uuid'
                  },
                  {
                    type: 'null'
                  }
                ]
              },
              prices: {
                type: 'array',
                items: {
                  type: 'object',
                  properties: {
                    ...price
                  }
                }
              }
            }
          }
        },
        scaled_prices: {
          type: 'array',
          items: {
            type: 'object',
            properties: {
              qty: {
                type: 'number'
              },
              prices: {
                type: 'array',
                items: {
                  type: 'object',
                  properties: {
                    ...price
                  }
                }
              }
            }
          }
        },
        time_based_prices: {
          type: 'array',
          items: {
            type: 'object',
            properties: {
              time_range: {
                type: 'object',
                properties: {
                  start: {
                    type: 'string',
                    format: 'date'
                  },
                  end: {
                    type: 'string',
                    format: 'date'
                  }
                },
                required: [
                  'start',
                  'end'
                ]
              },
              prices: {
                type: 'array',
                items: {
                  type: 'object',
                  properties: {
                    ...price
                  }
                }
              }
            }
          }
        },
        default_prices: {
          type: 'array',
          items: {
            type: 'object',
            properties: {
              ...price
            }
          }
        }
      },
      required: [
        'default_prices'
      ]
    },
    {
      type: 'null'
    }
  ]
}
