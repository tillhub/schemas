module.exports = {
  name: {
    description: 'any arbitrary name for a branch that can be displayed in applications.',
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
    description: 'A number of valid types of phonenumbers for a branch.',
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
            required: [
              'line_main'
            ]
          },
          {
            required: [
              'line_1'
            ]
          },
          {
            required: [
              'line_2'
            ]
          }
        ]
      },
      {
        type: 'null'
      }
    ]
  },
  email: {
    description: 'The main contact email for a branch.',
    anyOf: [
      {
        type: 'string',
        maxLength: 128,
        format: 'email'
      },
      {
        type: 'null'
      }
    ]
  },
  receipt_header: {
    description: 'An arbitrary string that will be printed on every receipt as the header.',
    anyOf: [
      {
        type: 'string',
        minLength: 1
      },
      {
        type: 'null'
      }
    ]
  },
  receipt_footer: {
    description: 'An arbitrary string that will be printed on every receipt as the footer',
    anyOf: [
      {
        type: 'string',
        minLength: 1
      },
      {
        type: 'null'
      }
    ]
  },
  receipt_logo: {
    description: 'An arbitrary string that will be printed on every receipt as the receipt logo.',
    anyOf: [
      {
        type: 'string',
        minLength: 1
      },
      {
        type: 'null'
      }
    ]
  },
  cid: {
    description: 'DEPRECATED. Set null or ignore.',
    anyOf: [
      {
        type: 'string',
        maxLength: 128,
        format: 'email'
      },
      {
        type: 'null'
      }
    ]
  },
  images: {
    description: 'A Tillhub image object with URLs to display images this for this branch.',
    anyOf: [
      {
        type: 'object',
        additionalProperties: false,
        properties: {
          '1x': {
            type: 'string',
            format: 'uri'
          },
          avatar: {
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
  image: {
    description: 'DEPRECATED. Omit or set null.',
    anyOf: [
      {
        type: 'object',
        additionalProperties: false,
        properties: {
          url: {
            type: 'string'
          }
        }
      },
      {
        type: 'null'
      }
    ]
  },
  active: {
    description: 'Soft disable or enabled this branch.',
    type: 'boolean',
    default: true
  },
  deleted: {
    description: 'Soft delete this branch.',
    type: 'boolean',
    default: false
  },
  metadata: {
    description: 'Arbitrary user defined data.',
    type: 'object',
    maxProperties: 10
  },
  branch_number: {
    type: 'number'
  },
  addresses: {
    description: 'A Tillhub address object, with different types of addresses. More description in the properties...',
    anyOf: [
      {
        type: 'array',
        maxItems: 3,
        items: {
          type: 'object',
          additionalProperties: false,
          properties: {
            lines: {
              description: 'The international non-street format for arbitrary addresses. This should be set to null as it is currently not supported by the client application.',
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
              description: 'A street name',
              oneOf: [
                {
                  type: 'string',
                  maxLength: 512
                },
                {
                  type: 'null'
                }
              ]
            },
            street_number: {
              description: 'A street number',
              oneOf: [
                {
                  type: 'string',
                  maxLength: 16
                },
                {
                  type: 'null'
                }
              ]
            },
            locality: {
              description: 'The international format for a city, village and any other localizable city like place.',
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
              description: 'The international format for regional sub category of a country e.g. a state or province.',
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
              description: 'A non-validated postal code.',
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
              description: 'A country as ISO Alpha-2 code.',
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
              ]
            },
            type: {
              description: 'The types of addresses. Types are used to direct specific behaviours in financial or stock operation. If none of them is necessary is used implementers should take the local type.',
              oneOf: [
                {
                  type: 'string',
                  enum: [
                    'delivery',
                    'billing',
                    'local'
                  ],
                  default: 'local'
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
  },
  signing_configuration: {
    description: 'Necessary authentication data for financial signing systems. This is an opt-in feature.',
    anyOf: [
      {
        type: 'object'
      },
      {
        type: 'null'
      }
    ]
  },
  configuration: {
    description: 'The reference to a configuration for branch level configurations. This should be omitted by implementers.',
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
  timezone_default: {
    description: 'An IANA timezone that will be used to display local timezones in documents and UI. Validation for the timezone will happen in memory of the server, but not on that schema.',
    anyOf: [
      {
        type: 'string'
      },
      {
        type: 'null'
      }
    ]
  },
  currency_default: {
    description: 'The three letter [ISO currency](https://en.wikipedia.org/wiki/ISO_4217) of this branch.',
    anyOf: [
      {
        type: 'string'
      },
      {
        type: 'null'
      }
    ]
  }
}
