const { oneOf } = require('../../../helpers/payload-or-null')

module.exports = {
  description: 'A number of aggregated customer centric analytics data. Usually this data is being compiled at transaction time. Rehydrating data or adding missing data, requires a transaction with this customer.',
  ...oneOf({
    type: 'object',
    properties: {
      summary: {
        description: 'Global analytics summary of this customer.',
        ...oneOf({
          type: 'object',
          additionalProperties: false,
          properties: {
            top_seller: {
              description: 'Reference to top selling Tillhub staff.',
              ...oneOf({
                type: 'string',
                format: 'uuid'
              })
            },
            top_branch: {
              description: 'Reference to top selling Tillhub branch.',
              ...oneOf({
                type: 'string',
                format: 'uuid'
              })
            },
            average_items_per_transaction: {
              description: 'The anbsolute number of cart items (products), including the absolute returns. This is meant as "items handled" per customer.',
              ...oneOf({
                type: 'number',
                min: 0
              })
            },
            total_returns: {
              description: 'Absolute number of all transactions that include at least a return.',
              ...oneOf({
                type: 'number',
                min: 0
              })
            },
            total_amount_returns: {
              description: 'The revenue of all returns.',
              ...oneOf({
                type: 'array',
                items: {
                  type: 'object',
                  additionalProperties: false,
                  properties: {
                    amount: {
                      type: 'object',
                      properties: {
                        net: {
                          example: '27633.02',
                          type: 'number',
                          minimum: 0,
                          maximum: 1000000,
                          multipleOf: 0.01
                        },
                        gross: {
                          example: '27633.02',
                          type: 'number',
                          minimum: 0,
                          maximum: 1000000,
                          multipleOf: 0.01
                        }
                      }
                    },
                    currency: {
                      type: 'string',
                      minLength: 3,
                      maxLength: 3
                    }
                  }
                }
              })
            },
            total_amount_transactions: {
              description: 'Revenue of that customer.',
              ...oneOf({
                type: 'array',
                items: {
                  type: 'object',
                  additionalProperties: false,
                  properties: {
                    amount: {
                      type: 'object',
                      properties: {
                        net: {
                          example: '27633.02',
                          type: 'number',
                          minimum: 0,
                          maximum: 1000000,
                          multipleOf: 0.01
                        },
                        gross: {
                          example: '27633.02',
                          type: 'number',
                          minimum: 0,
                          maximum: 1000000,
                          multipleOf: 0.01
                        }
                      }
                    },
                    currency: {
                      type: 'string',
                      minLength: 3,
                      maxLength: 3
                    }
                  }
                }
              })
            },
            total_amount_items_sold: {
              description: 'Revenue of all cart items that were a sale.',
              ...oneOf({
                type: 'array',
                items: {
                  type: 'object',
                  additionalProperties: false,
                  properties: {
                    amount: {
                      type: 'object',
                      properties: {
                        net: {
                          example: '27633.02',
                          type: 'number',
                          minimum: 0,
                          maximum: 1000000,
                          multipleOf: 0.01
                        },
                        gross: {
                          example: '27633.02',
                          type: 'number',
                          minimum: 0,
                          maximum: 1000000,
                          multipleOf: 0.01
                        }
                      }
                    },
                    currency: {
                      type: 'string',
                      minLength: 3,
                      maxLength: 3
                    }
                  }
                }
              })
            },
            average_purchase_value: {
              description: 'Average of revenue of all sales.',
              ...oneOf({
                type: 'array',
                items: {
                  type: 'object',
                  additionalProperties: false,
                  properties: {
                    amount: {
                      type: 'object',
                      properties: {
                        net: {
                          example: '27633.02',
                          type: 'number',
                          minimum: 0,
                          maximum: 1000000,
                          multipleOf: 0.01
                        },
                        gross: {
                          example: '27633.02',
                          type: 'number',
                          minimum: 0,
                          maximum: 1000000,
                          multipleOf: 0.01
                        }
                      }
                    },
                    currency: {
                      type: 'string',
                      minLength: 3,
                      maxLength: 3
                    }
                  }
                }
              })
            },
            last_seen: {
              description: 'The last interaction with this customer.',
              ...oneOf({
                type: 'string',
                format: 'date-time'
              })
            }
          }
        })
      },
      last_transactions_v0: {
        description: 'Array of v0 transactions. DEPRECATED.',
        ...oneOf({
          type: 'array',
          items: {
            type: 'object'
          }
        })
      }
    }
  })
}
