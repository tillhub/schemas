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
            type: 'string',
            pattern: '([0-1][0-9]|2[0-3]):[0-5][0-9]'
          },
          end: {
            type: 'string',
            pattern: '([0-1][0-9]|2[0-3]):[0-5][0-9]'
          }
        }
      }
    }
  }
}

module.exports = {
  amount: {
    type: 'number',
    minimum: 0
  },
  type: {
    type: 'string',
    'enum': [
      'percentage',
      'value'
    ]
  },
  account: {
    anyOf: [
      {
        type: 'string',
        maxLength: 128
      },
      {
        type: 'null'
      }
    ]
  },
  name: {
    anyOf: [
      {
        type: 'string',
        maxLength: 64
      },
      {
        type: 'null'
      }
    ]
  },
  group: {
    type: 'string',
    'enum': [
      'cart',
      'customer'
    ]
  },
  active: {
    type: 'boolean'
  },
  deleted: {
    type: 'boolean'
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
                        type: 'string',
                        format: 'date-time'
                      },
                      end: {
                        type: 'string',
                        format: 'date-time'
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
