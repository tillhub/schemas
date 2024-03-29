module.exports = {
  name: {
    anyOf: [
      {
        type: 'string',
        maxLength: 64,
        minLength: 1
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
          line_main: {
            type: 'string'
          },
          line_1: {
            type: 'string'
          },
          line_2: {
            type: 'string'
          }
        },
        anyOf: [
          {
            required: ['line_main']
          },
          {
            required: ['line_1']
          },
          {
            required: ['line_2']
          }
        ]
      },
      {
        type: 'null'
      }
    ]
  },
  images: {
    anyOf: [
      {
        type: 'object',
        additionalProperties: false,
        properties: {
          original: {
            type: 'string',
            format: 'uri'
          },
          gallery: {
            type: 'string',
            format: 'uri'
          },
          avatar: {
            type: 'string',
            format: 'uri'
          },
          '1x': {
            type: 'string',
            format: 'uri'
          },
          '2x': {
            type: 'string',
            format: 'uri'
          },
          '3x': {
            type: 'string',
            format: 'uri'
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
          email: {
            type: 'string',
            format: 'email'
          }
        }
      },
      {
        type: 'null'
      }
    ]
  },
  active: {
    type: 'boolean',
    default: true
  },
  deleted: {
    type: 'boolean',
    default: false
  },
  metadata: {
    type: 'object'
  },
  location: {
    type: 'object'
  },
  configuration: {
    anyOf: [
      {
        type: 'string',
        format: 'uuid'
      },
      {
        type: 'null'
      }
    ]
  },
  custom_id: {
    type: 'string',
    minLength: 1,
    maxLength: 64
  },
  capacity: {
    anyOf: [
      {
        type: 'number'
      },
      {
        type: 'null'
      }
    ]
  },
  short_name: {
    anyOf: [
      {
        type: 'string'
      },
      {
        type: 'null'
      }
    ]
  },
  barcode: {
    anyOf: [
      {
        type: 'string'
      },
      {
        type: 'null'
      }
    ]
  },
  addresses: {
    anyOf: [
      {
        type: 'array',
        maxItems: 3,
        items: {
          type: 'object',
          additionalProperties: false,
          properties: {
            lines: {
              oneOf: [
                {
                  type: 'array',
                  minItems: 1,
                  maxItems: 4,
                  items: {
                    type: 'string',
                    minLength: 1
                  }
                },
                {
                  type: 'null'
                }
              ]
            },
            street: {
              oneOf: [
                {
                  type: 'string'
                },
                {
                  type: 'null'
                }
              ]
            },
            street_number: {
              oneOf: [
                {
                  type: 'string'
                },
                {
                  type: 'null'
                }
              ]
            },
            locality: {
              oneOf: [
                {
                  type: 'string'
                },
                {
                  type: 'null'
                }
              ]
            },
            region: {
              oneOf: [
                {
                  type: 'string'
                },
                {
                  type: 'null'
                }
              ]
            },
            postal_code: {
              oneOf: [
                {
                  type: 'string',
                  maxLength: 10
                },
                {
                  type: 'null'
                }
              ]
            },
            country: {
              oneOf: [
                {
                  type: 'string',
                  minLength: 2,
                  maxLength: 2,
                  pattern: '^[A-Z]{2}$'
                },
                {
                  type: 'null'
                }
              ],
              'default': null
            },
            type: {
              oneOf: [
                {
                  type: 'string',
                  'enum': [
                    'local',
                    'delivery',
                    'billing'
                  ]
                },
                {
                  type: 'null'
                }
              ]
            }
          },
          required: [
            'lines',
            'street',
            'street_number',
            'locality',
            'region',
            'postal_code',
            'country',
            'type'
          ]
        }
      },
      {
        type: 'null'
      }
    ]
  }
}
