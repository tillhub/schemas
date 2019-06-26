const { oneOf } = require('../../../helpers/payload-or-null')

module.exports = {
  ...oneOf({
    type: 'object',
    properties: {
      summary: {
        ...oneOf({
          type: 'object',
          additionalProperties: false,
          properties: {
            top_seller: {
              ...oneOf({
                type: 'string',
                format: 'uuid'
              })
            },
            top_branch: {
              ...oneOf({
                type: 'string',
                format: 'uuid'
              })
            },
            average_items_per_transaction: {
              ...oneOf({
                type: 'number',
                min: 0
              })
            },
            total_returns: {
              ...oneOf({
                type: 'number',
                min: 0
              })
            },
            total_amount_returns: {
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
              ...oneOf({
                type: 'string',
                format: 'date-time'
              })
            }
          }
        })
      },
      last_transactions_v0: {
        ...oneOf({
          type: 'array',
          items: {
            description: 'Array of v0 transactions. DEPRECATED.',
            type: 'object'
          }
        })
      }
    }
  })
}
