const { stripIndents } = require('common-tags')
const customProperties = require('../../common/custom_properties')
const { oneOf } = require('../../helpers/payload-or-null')
const { getImages } = require('../../common/images')
const address = require('../../common/address')

module.exports = {
  name: {
    description: 'Any arbitrary name for a branch that can be displayed in applications.',
    example: 'Head office',
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
  created_at: {
    description: 'When the branch was created. It was added for creating branches coming from MMS',
    oneOf: [
      {
        type: 'string',
        format: 'date-time',
        example: '2019-03-17T21:12:04.849Z'
      },
      {
        type: 'null'
      }
    ]
  },
  updated_at: {
    description: 'When the branch was last updated. It was added for creating branches coming from MMS',
    oneOf: [
      {
        type: 'string',
        format: 'date-time',
        example: '2019-03-17T21:12:04.849Z'
      },
      {
        type: 'null'
      }
    ]
  },
  phonenumbers: {
    description: 'A number of valid types of phone numbers for a branch.',
    anyOf: [
      {
        type: 'object',
        additionalProperties: false,
        properties: {
          line_main: {
            type: 'string',
            example: '+49-555-1976'
          },
          line_1: {
            type: 'string',
            example: '+49-555-1977'
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
    example: 'office@my-incredible-company.to',
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
    example: 'Perfect socks LTD',
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
    example: 'Thank you!',
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
  images: getImages({
    description: 'A Tillhub image object with URLs to display images this for this branch.'
  }),
  receipt_footer_images: getImages({
    description: 'A Tillhub image object with URLs to display receipt footer image this for this branch.'
  }),
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
    example: 'true',
    type: 'boolean',
    default: true
  },
  deleted: {
    description: 'Soft delete this branch.',
    example: 'false',
    type: 'boolean',
    default: false
  },
  deleted_at: oneOf({
    description: 'The date when branch was deleted.',
    example: '2023-04-05T16:06:04.849Z',
    type: 'string',
    format: 'date-time'
  }),
  metadata: {
    description: 'Arbitrary user defined data.',
    type: 'object',
    maxProperties: 10
  },
  branch_number: {
    type: 'number',
    description: 'The maximum stems from the fact that is it stored as an postgres int4 type, with 4 bytes of space',
    example: 107,
    minimum: 0,
    maximum: 2147483647
  },
  custom_id: {
    description: 'Branch custom unique ID.',
    example: 'dd3234of',
    anyOf: [{
      type: 'string'
    }, {
      type: 'null'
    }]
  },
  external_custom_id: {
    description: 'Unique ID of this branch in external system, Uses for synchronization.',
    example: '7882448928329',
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
  is_mms: {
    description: 'The branch belongs to MMS.',
    example: 'false',
    type: 'boolean',
    default: false
  },
  cost_center: {
    description: 'Cost center unique ID',
    example: '7882448928329',
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
  addresses: oneOf({
    description: 'A Tillhub address array, with different types of addresses. More description in the properties...',
    type: 'array',
    maxItems: 3,
    items: {
      ...address
    }
  }),
  signing_configuration: {
    description: stripIndents`
    Necessary core or allowed authentication data for financial signing systems. This is an opt-in feature.

    NOTE: Depending on the respective configuration (transactions.signing.resource_type) this will be looked up
    here or on register level (device_configuration.fiscal_signing).
    `,
    anyOf: [
      {
        type: 'object',
        description: 'Configuration object for Austria: Fiskaltrust - INCOMPLETE definition',
        properties: {
          signature_type: {
            description: 'Any allowed singing system provider as type, currently only Austria has per-branch licensing.',
            type: 'string',
            enum: [
              'fiskaltrust',
              'at_fiskaly'
            ]
          },
          auth: {
            description: 'Keeping auth data for the branch',
            anyOf: [
              {
                description: 'Auth data for at_fiskaly: object format',
                type: 'object',
                properties: {
                  key: {
                    type: 'string'
                  },
                  secret: {
                    type: 'string'
                  }
                }
              },
              {
                description: 'Auth data for fiskaltrust: string format',
                type: 'string'
              }
            ]
          },
          resource: {
            description: 'In case of at_fiskaly its organization_id',
            type: 'string'
          }

        }
      },
      {
        type: 'null'
      }
    ]
  },
  configuration: {
    description: 'Deprecated: Overwriting a fa_account_number on cash payments for DATEV export.',
    anyOf: [{
      type: 'string'
    }, {
      type: 'null'
    }]
  },
  external_rewards: oneOf({
    description: 'Branch specific settinmgs for external reward systems',
    type: 'object',
    additionalProperties: false,
    properties: {
      coop: oneOf({
        type: 'object',
        description: 'Branch configuration object for Swiss Coop - data is used on transactions',
        properties: {
          store_eain: {
            type: 'string',
            description: 'Coop identity of this Tillhub branch.',
            example: '7640147960015'
          },
          store_name: oneOf({
            type: 'string',
            maxLength: 128,
            description: 'Name of this branch within the Coop context.',
            example: 'Coop Supermarkt Riehen Schmiedgasse',
            default: '{name}'
          }),
          store_sap_number: oneOf({
            type: 'string',
            pattern: '^[0-9]{4}$',
            description: 'Tillhub branch SAP number if available.',
            example: '000001'
          })
        },
        required: [
          'store_eain'
        ]
      })
    }
  }),
  timezone_default: {
    description: 'An IANA timezone that will be used to display local timezones in documents and UI. Validation for the timezone will happen in memory of the server, but not on that schema.',
    example: 'Europe/London',
    anyOf: [{
      type: 'string'
    }, {
      type: 'null'
    }]
  },
  currency_default: {
    description: 'The three letter [ISO currency](https://en.wikipedia.org/wiki/ISO_4217) of this branch.',
    example: 'GBP',
    anyOf: [{
      type: 'string'
    }, {
      type: 'null'
    }]
  },
  custom_properties: {
    description: 'User-defined branch properties',
    ...customProperties.implementation
  },
  default_favourite: {
    description: 'Define which favourite set to show as default in the POS if none is defined on the register.',
    example: '20e89159-28d9-46f2-bda3-d74bb70834e7',
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
  default_category_tree: {
    description: 'Define which category tree to use as default in the POS if none is defined on the register.',
    example: 'c45764ed-fc6d-4b32-b406-59a5e84d2999',
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
  shift_plan_enabled: {
    description: 'Define if this branch uses a shift plan.',
    example: 'false',
    type: 'boolean',
    default: false
  },
  available_in_online_booking: {
    description: 'The Flag to indicate if the branch is available for online booking / reservation.',
    example: 'false',
    type: 'boolean',
    default: true
  }
}
