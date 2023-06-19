const { getGender } = require('../../common/gender')
const { oneOf } = require('../../helpers/payload-or-null')

module.exports = {
  firstname: {
    anyOf: [
      {
        type: 'string',
        maxLength: 32,
        minLength: 1
      },
      {
        type: 'null'
      }
    ]
  },
  lastname: {
    type: 'string',
    maxLength: 32,
    minLength: 1
  },
  displayname: {
    anyOf: [
      {
        type: 'string',
        maxLength: 32,
        minLength: 3
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
          any: {
            type: 'string'
          },
          home: {
            type: 'string'
          },
          mobile: {
            type: 'string'
          },
          work: {
            type: 'string'
          }
        },
        anyOf: [
          {
            required: [
              'any'
            ]
          },
          {
            required: [
              'home'
            ]
          },
          {
            required: [
              'mobile'
            ]
          },
          {
            required: [
              'work'
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
  staff_number: {
    anyOf: [
      {
        type: 'string',
        maxLength: 128,
        minLength: 1
      },
      {
        type: 'null'
      }
    ]
  },
  password: {
    anyOf: [
      {
        type: 'string',
        maxLength: 128,
        minLength: 1
      },
      {
        type: 'null'
      }
    ]
  },
  pin: {
    anyOf: [
      {
        type: 'string',
        maxLength: 128,
        minLength: 1
      },
      {
        type: 'null'
      }
    ]
  },
  date_of_birth: {
    anyOf: [
      {
        type: 'string',
        format: 'date-time'
      },
      {
        type: 'null'
      }
    ]
  },
  gender: getGender(),
  images: {
    description: 'A Tillhub image object with URLs to display images this for staff.',
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
  scopes: {
    anyOf: [
      {
        type: 'array',
        uniqueItems: true,
        items: {
          // we are loosely validation the permissions, as they have been removed for a while
          // and it is unclear which consumers added invlalid ones.
          anyOf: [
            {
              type: 'string',
              enum: require('../../common/permissions').staff.items.enum
            },
            {
              type: 'string'
            }
          ]
        }
      },
      {
        type: 'null'
      }
    ]
  },
  staff_permission_template_id: oneOf({
    type: 'string'
  }),
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
  addresses: {
    anyOf: [
      {
        type: 'array',
        minItems: 1,
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
              ]
            },
            type: {
              oneOf: [
                {
                  type: 'string',
                  'enum': [
                    'home',
                    'work',
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
  },
  comment: {
    anyOf: [
      {
        type: 'string',
        maxLength: 1024
      },
      {
        type: 'null'
      }
    ]
  },
  discounts: {
    anyOf: [
      {
        type: 'array',
        minItems: 1,
        maxItems: 10,
        items: {
          anyOf: [
            {
              type: 'object',
              additionalProperties: false,
              properties: {
                id: {
                  type: 'string',
                  maxLength: 128
                },
                amount: {
                  type: 'number',
                  minimum: 0
                },
                type: {
                  type: 'string',
                  'enum': [
                    'percent',
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
                  enum: [
                    'cart',
                    'customer',
                    'personal'
                  ]
                }
              },
              required: [
                'id',
                'account',
                'amount',
                'type',
                'name',
                'group'
              ]
            },
            {
              type: 'object',
              additionalProperties: false,
              properties: {
                amount: {
                  type: 'number',
                  minimum: 0
                },
                type: {
                  type: 'string',
                  'enum': [
                    'percent',
                    'value'
                  ]
                },
                group: {
                  type: 'string',
                  'enum': [
                    'personal'
                  ]
                }
              },
              required: [
                'amount',
                'type',
                'group'
              ]
            }
          ]
        }
      },
      {
        type: 'null'
      }
    ]
  },
  short_code: {
    type: 'string',
    maxLength: 10,
    minLength: 1
  },
  locations: {
    anyOf: [
      {
        type: 'array',
        items: {
          type: 'string',
          format: 'uuid'
        }
      },
      {
        type: 'null'
      }
    ]
  },
  branch_groups: {
    oneOf: [
      {
        type: 'array',
        items: {
          type: 'string',
          format: 'uuid'
        }
      },
      {
        type: 'null'
      }
    ]
  },
  default: {
    type: 'boolean'
  },
  owner: {
    description: 'Defines if this staff is considered to be an owner of the business and thus might be taxed differently for tips.',
    type: 'boolean',
    default: false
  },
  external_reference_id: {
    description: 'A caller defined custom ID for the purpose of syncing from external resources, or to use in analytics.',
    oneOf: [
      {
        type: 'string',
        maxLength: 128
      },
      {
        type: 'null'
      }
    ]
  }
}
