const { anyOf, oneOf } = require('../../helpers/payload-or-null')
const { getAddress } = require('../../common/address')
const { getGender } = require('../../common/gender')
const { getImages } = require('../../common/images')

module.exports = {
  active: {
    description: 'Customer active',
    example: 'true',
    type: 'boolean',
    default: true
  },
  deleted: {
    description: 'Customer deleted',
    type: 'boolean',
    default: false
  },
  firstname: {
    description: 'First name',
    example: 'Boba',
    ...anyOf({
      type: 'string',
      maxLength: 128
    })
  },
  lastname: {
    example: 'Fett',
    description: 'Last name',
    type: 'string',
    maxLength: 128
  },
  middlename: {
    description: 'Middle name',
    example: 'Alpha',
    ...anyOf({
      type: 'string',
      maxLength: 128
    })
  },
  displayname: {
    description: 'Display name',
    example: 'Boba F.',
    ...anyOf({
      type: 'string',
      maxLength: 32,
      minLength: 3
    })
  },
  phonenumbers: {
    description: 'Phone numbers',
    example: {
      main: '+49-555-123-4567'
    },
    ...anyOf({
      type: 'object',
      additionalProperties: false,
      properties: {
        main: {
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
            'main'
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
    })
  },
  email: {
    description: 'Email address',
    example: 'boba@kamino.empire',
    ...anyOf({
      type: 'string',
      maxLength: 128,
      format: 'email'
    }),
    'default': null
  },
  customer_number: {
    description: 'Unique customer number',
    example: 'fett-002',
    ...anyOf({
      type: 'string',
      maxLength: 128,
      minLength: 1
    })
  },
  company: {
    description: 'Company name',
    example: {
      name: 'Bounty Hunter\'s Guild'
    },
    ...anyOf({
      type: 'object',
      additionalProperties: false,
      properties: {
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
        }
      }
    })
  },
  description: {
    description: 'Description',
    example: 'Bounty hunter',
    ...anyOf({
      type: 'string'
    })
  },
  is_b2b: {
    description: 'Is B2B customer',
    ...anyOf({
      type: 'boolean'
    })
  },
  date_of_birth: {
    description: 'Birth date',
    ...anyOf({
      type: 'string',
      format: 'date-time'
    })
  },
  images: getImages({ sizes: ['1x', '2x', '3x', 'avatar', 'gallery'] }),
  image: {
    description: 'DEPRECATED. Omit or set null.',
    ...anyOf({
      type: 'object',
      additionalProperties: true,
      properties: {
        '1x': {
          type: 'string',
          format: 'uri'
        },
        avatar: oneOf({
          type: 'string',
          format: 'uri'
        })
      }
    })
  },
  contacts: {
    description: 'Contact info',
    ...anyOf({
      type: 'object',
      additionalProperties: false,
      properties: {
        email: {
          type: 'object',
          additionalProperties: false,
          properties: {
            enabled: {
              type: 'boolean'
            }
          }
        },
        newsletter: {
          type: 'object',
          additionalProperties: false,
          properties: {
            enabled: {
              type: 'boolean'
            }
          }
        },
        phone: {
          type: 'object',
          additionalProperties: false,
          properties: {
            enabled: {
              type: 'boolean'
            }
          }
        },
        post: {
          type: 'object',
          additionalProperties: false,
          properties: {
            enabled: {
              type: 'boolean'
            }
          }
        }
      }
    })
  },
  metadata: {
    description: 'Additional metadata',
    type: 'object'
  },
  addresses: {
    description: 'Addresses',
    ...anyOf({
      type: 'array',
      maxItems: 3,
      items: getAddress({
        availableTypes: [
          'delivery',
          'billing'
        ],
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
      })
    })
  },
  custom: {
    description: 'Custom data',
    ...anyOf({
      type: 'object'
    })
  },
  comment: {
    description: 'Comment',
    example: 'Don\'t mess with',
    ...anyOf({
      type: 'string',
      maxLength: 1024
    })
  },
  discounts: {
    description: 'Available discounts',
    ...anyOf({
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
              }
            },
            required: [
              'group',
              'type',
              'name',
              'amount',
              'id'
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
                  'percentage',
                  'value'
                ]
              },
              group: {
                type: 'string',
                'enum': [
                  'cart',
                  'customer'
                ]
              },
              name: {
                type: 'string'
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
    })
  },
  client_id: {
    description: 'Client ID',
    ...anyOf({
      type: 'string',
      maxLength: 128
    })
  },
  external_reference: {
    description: 'External reference',
    ...anyOf({
      type: 'string',
      minLength: 3,
      maxLength: 128
    })
  },
  customer_since: {
    description: 'Customer since',
    ...anyOf({
      type: 'string',
      format: 'date-time'
    })
  },
  locations: {
    description: 'Locations customer belongs to',
    ...oneOf({
      type: 'array',
      items: {
        type: 'string',
        format: 'uuid'
      }
    })
  },
  branch_groups: {
    description: 'Branch groups customer belongs to',
    ...oneOf({
      type: 'array',
      items: {
        type: 'string',
        format: 'uuid'
      }
    })
  },
  gender: getGender(),
  vat_id: {
    description: 'Customer VAT ID',
    ...oneOf({
      type: 'string',
      maxLength: 20,
      minLength: 5
    })
  },
  source: {
    description: 'Customer source of creation',
    example: 'N/A, DASHBOARD, APPOINTMENT_CALENDAR, WEB_RESERVATION, POS',
    ...oneOf({
      type: 'string',
      maxLength: 128
    })
  },
  branch_id: {
    description: 'in cases where the customer is created via the POS, the branch_id is required',
    ...oneOf({
      type: 'string',
      format: 'uuid'
    })
  },
}
