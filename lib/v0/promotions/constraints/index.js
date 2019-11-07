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
}
