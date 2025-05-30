const { oneOf } = require('../../helpers/payload-or-null')
const address = require('../../common/address')

module.exports = {
  name: oneOf({
    type: 'string',
    minLength: 1,
    maxLength: 255
  }),
  origin: {
    anyOf: [
      {
        type: 'string'
      },
      {
        type: 'null'
      }
    ]
  },
  description: {
    anyOf: [
      {
        type: 'string'
      },
      {
        type: 'null'
      }
    ]
  },
  notes: {
    anyOf: [
      {
        type: 'array',
        items: {
          type: 'object',
          additionalProperties: false,
          properties: {
            timestamp: {
              ...oneOf({
                type: 'string',
                format: 'date-time'
              })
            },
            id: {
              ...oneOf({
                type: 'string',
                format: 'uuid'
              })
            },
            title: {
              ...oneOf({
                type: 'string'
              })
            },
            comment: {
              ...oneOf({
                type: 'string'
              })
            }
          }
        }
      },
      {
        type: 'null'
      }
    ]
  },
  logo: {
    anyOf: [
      {
        type: 'object',
        additionalProperties: false,
        properties: {
          'image': {
            ...oneOf({
              type: 'string'
            })
          },
          '1x': {
            ...oneOf({
              type: 'string'
            })
          },
          '2x': {
            ...oneOf({
              type: 'string'
            })
          },
          '4x': {
            ...oneOf({
              type: 'string'
            })
          }
        }
      },
      {
        type: 'null'
      }
    ]
  },
  contacts: {
    anyOf: [
      {
        type: 'object',
        additionalProperties: false,
        properties: {
          general: {
            type: 'object',
            additionalProperties: false,
            properties: {
              email: {
                oneOf: [
                  {
                    type: 'string'
                  },
                  {
                    type: 'null'
                  }
                ]
              },
              phonenumbers: {
                anyOf: [
                  {
                    type: 'object',
                    additionalProperties: false,
                    properties: {
                      main: {
                        type: 'string'
                      }
                    }
                  },
                  {
                    type: 'null'
                  }
                ]
              }
            }
          },
          directs: {
            type: 'array',
            maxItems: 3,
            items: {
              type: 'object',
              additionalProperties: false,
              properties: {
                title: {
                  oneOf: [
                    {
                      type: 'string'
                    },
                    {
                      type: 'null'
                    }
                  ]
                },
                firstname: {
                  oneOf: [
                    {
                      type: 'string'
                    },
                    {
                      type: 'null'
                    }
                  ]
                },
                lastname: {
                  oneOf: [
                    {
                      type: 'string'
                    },
                    {
                      type: 'null'
                    }
                  ]
                },
                email: {
                  oneOf: [
                    {
                      type: 'string'
                    },
                    {
                      type: 'null'
                    }
                  ]
                },
                phonenumbers: {
                  anyOf: [
                    {
                      type: 'object',
                      additionalProperties: false,
                      properties: {
                        main: {
                          type: 'string'
                        }
                      }
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
      },
      {
        type: 'null'
      }
    ]
  },
  addresses: oneOf({
    description: 'A Tillhub address array, with different types of addresses. More description in the properties...',
    type: 'array',
    maxItems: 3,
    items: {
      ...address
    }
  }),
  client_id: {
    description: 'A identifier used locally on POS for their own reference.',
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
  active: {
    description: 'Soft disable or enabled this manufacturer.',
    type: 'boolean',
    default: true
  },
  deleted: {
    description: 'Soft delete this manufacturer.',
    type: 'boolean',
    default: false
  }
}
