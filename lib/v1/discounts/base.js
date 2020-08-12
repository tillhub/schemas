const { oneOf } = require('../../helpers/payload-or-null')

const day = {
  type: 'object',
  additionalProperties: false,
  properties: {
    slots: {
      type: 'array',
      items: {
        type: 'object',
        additionalProperties: false,
        properties: {
          enabled: {
            type: 'boolean',
            default: true
          },
          start: {
            oneOf: [
              {
                type: 'string',
                pattern: '([0-1][0-9]|2[0-3]):[0-5][0-9]'
              },
              {
                type: 'null'
              }
            ]
          },
          end: {
            oneOf: [
              {
                type: 'string',
                pattern: '([0-1][0-9]|2[0-3]):[0-5][0-9]'
              },
              {
                type: 'null'
              }
            ]
          }
        }
      }
    }
  }
}

module.exports = {
  name: {
    ...oneOf({
      type: 'string',
      maxLength: 128
    })
  },
  summary: {
    ...oneOf({
      type: 'string',
      maxLength: 512
    })
  },
  description: {
    ...oneOf({
      type: 'string',
      maxLength: 16384
    })
  },
  instructions: {
    ...oneOf({
      type: 'string',
      maxLength: 16384
    })
  },
  active: {
    type: 'boolean',
    default: true
  },
  deleted: {
    type: 'boolean',
    default: false
  },
  type: {
    type: 'string',
    description: 'General type of this discount, which drives general client behaviour.',
    enum: [
      'customer',
      'product',
      'cart'
    ]
  },
  allocation_method: {
    description: 'Decide how to allocate the discountable amount within the cart. Types override the allocation method in the following cases e.g "product". If a product is not discountable the allocation method will be skipped for this item.',
    ...oneOf({
      type: 'string',
      enum: [
        'each',
        'cart'
      ]
    })
  },
  value_type: {
    type: 'string',
    description: 'Value types allow setting value (requires value to be set) or rate (requires rate to be set) discounts values.',
    enum: [
      'rate',
      'value'
      // TODO: consider external promotion book or API
    ]
  },
  value: {
    description: 'Numeric value of this discount.',
    ...oneOf({
      type: 'array',
      items: {
        type: 'object',
        additionalProperties: false,
        required: [
          'amount',
          'currency'
        ],
        properties: {
          amount: {
            type: 'object',
            additionalProperties: false,
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
  rate: {
    description: 'Relative value of this discount.',
    oneOf: [
      {
        type: 'number',
        minimum: 0,
        maximum: 1,
        multipleOf: 0.001
      },
      {
        type: 'null'
      }
    ]
  },
  predicates: {
    description: 'Custom predicates that will check whether this discount applies.',
    example: `["product.id <> '8fb902c2-7114-43c4-89ea-624bf1841dbf'"]`,
    ...oneOf({
      type: 'array',
      items: {
        type: 'string'
      }
    })
  },
  behaviors: {
    oneOf: [
      {
        type: 'object',
        additionalProperties: false,
        properties: {
          display: {
            oneOf: [
              {
                type: 'object',
                additionalProperties: false,
                properties: {
                  show_inactive: {
                    type: 'boolean'
                  }
                }
              },
              {
                type: 'null'
              }
            ]
          },
          cart: {
            oneOf: [
              {
                type: 'string',
                'enum': [
                  'per_item',
                  'per_cart'
                ],
                default: 'per_item'
              },
              {
                type: 'null'
              }
            ]
          },
          receipt: {
            oneOf: [
              {
                type: 'object',
                additionalProperties: false,
                properties: {
                  print_explicitely: {
                    type: 'boolean',
                    default: false
                  }
                }
              }
            ]
          }
        }
      },
      {
        type: 'null'
      }
    ]
  },
  constraints: {
    oneOf: [
      {
        type: 'object',
        additionalProperties: false,
        properties: {
          time: {
            type: 'object',
            additionalProperties: false,
            properties: {
              scheduled: {
                type: 'object',
                additionalProperties: false,
                properties: {
                  day_of_week: {
                    type: 'object',
                    additionalProperties: false,
                    properties: {
                      enabled: {
                        type: 'boolean',
                        default: true
                      },
                      monday: day,
                      tuesday: day,
                      wednesday: day,
                      thursday: day,
                      friday: day,
                      saturday: day,
                      sunday: day
                    }
                  },
                  date_range: {
                    type: 'object',
                    additionalProperties: false,
                    properties: {
                      enabled: {
                        type: 'boolean',
                        default: true
                      },
                      start: {
                        oneOf: [
                          {
                            type: 'object',
                            additionalProperties: false,
                            properties: {
                              enabled: {
                                type: 'boolean',
                                default: true
                              },
                              value: {
                                oneOf: [
                                  {
                                    type: 'string',
                                    format: 'date-time'
                                  },
                                  {
                                    type: 'null'
                                  }
                                ]
                              }
                            }
                          },
                          {
                            type: 'null'
                          }
                        ]
                      },
                      end: {
                        oneOf: [
                          {
                            type: 'object',
                            additionalProperties: false,
                            properties: {
                              enabled: {
                                type: 'boolean',
                                default: true
                              },
                              value: {
                                oneOf: [
                                  {
                                    type: 'string',
                                    format: 'date-time'
                                  },
                                  {
                                    type: 'null'
                                  }
                                ]
                              }
                            }
                          },
                          {
                            type: 'null'
                          }
                        ]
                      },
                      tz: {
                        oneOf: [
                          {
                            type: 'string'
                          },
                          {
                            type: 'null'
                          }
                        ]
                      }
                    }
                  }
                }
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
}
