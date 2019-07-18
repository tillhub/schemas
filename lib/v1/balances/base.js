const { oneOf } = require('../../helpers/payload-or-null')

const balanceCashUnits = require('./cash_units/base')
const balancePayments = require('./payments/base')
const balanceRevenues = require('./revenues/base')
const balanceTotals = require('./totals/base')
const balanceTaxes = require('./taxes/base')
const balanceTips = require('./tips/base')
const balanceReceipts = require('./receipts/base')
const { timezone } = require('../../common/timezones')

module.exports = {
  date_opening: {
    type: 'string',
    format: 'date-time',
    example: '2018-01-29T14:55:05.000Z',
    description: 'A user defined [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) compliant date e.g. 2018-01-29T14:55:05.000Z. This is used to track local client time as oppsed to `created_at`, which is the time the server has received it. This is necessary for e.g. offline client, and is valid time in fiscal reports.'
  },
  date_closing: {
    type: 'string',
    format: 'date-time',
    example: '2018-01-29T14:55:05.000Z',
    description: 'A user defined [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) compliant date e.g. 2018-01-29T14:55:05.000Z. This is used to track local client time as oppsed to `created_at`, which is the time the server has received it. This is necessary for e.g. offline client, and is valid time in fiscal reports.'
  },
  client_id: {
    ...oneOf({
      type: 'string',
      example: 'd0d40841-b1a7-438a-9d1e-2bfec590d2e3',
      minLength: 6,
      maxLength: 64,
      description: 'A implementer defined identifier. This can be used for local resource matching and has no business implication.'
    }),
    default: null
  },
  custom_id: {
    ...oneOf({
      type: 'string',
      example: 'Balance Nr.7',
      maxLength: 128,
      description: 'Any string that a user wants to store to identify a balance, or wants to make it human readable.'
    }),
    default: null
  },
  branch: {
    type: 'string',
    format: 'uuid',
    example: 'f2ac2cae-97ff-42a1-967b-0a35222ab6d1',
    description: 'The Tillhub branch location ID.'
  },
  branch_custom_id: {
    ...oneOf({
      type: 'string',
      example: '5',
      description: 'The Tillhub branch number.'
    }),
    default: null
  },
  register: {
    type: 'string',
    format: 'uuid',
    example: '9d110eb2-2245-4e14-9574-49b502f3a9b3',
    description: 'The Tillhub register location ID.'
  },
  register_custom_id: {
    ...oneOf({
      type: 'string',
      example: '7',
      description: 'The Tillhub register number.'
    }),
    default: null
  },
  client: {
    ...oneOf({
      type: 'string',
      format: 'uuid',
      example: 'cd110eb2-2245-4e14-9574-49b502f3a9b3',
      description: '(MANDANT) The Tillhub client location ID.'
    }),
    default: null
  },
  client_custom_id: {
    ...oneOf({
      type: 'string',
      example: '101',
      description: '(MANDANT) The Tillhub client number.'
    }),
    default: null
  },
  staff: {
    ...oneOf({
      type: 'string',
      format: 'uuid',
      example: 'b3465a62-62e9-46de-9df7-4d3009c46068',
      description: 'The Tillhub staff resource ID, that has conducted this balance. (used by temp staff)'
    }),
    default: null
  },
  cashier_staff: {
    ...oneOf({
      type: 'string',
      format: 'uuid',
      example: '378a5f19-44c6-4ed1-9ad1-45ec103f1414',
      description: 'The Tillhub staff (as cashier) resource ID, that has conducted this balance.'
    }),
    default: null
  },
  device: {
    ...oneOf({
      type: 'string',
      minLength: 6,
      maxLength: 64,
      example: 'ec1b41af291c4b9483d8adb4e80ac92f',
      description: 'The Tillhub POS client ID, that was generated upon install, that has conducted this balance.'
    }),
    default: null
  },
  context: {
    ...oneOf({
      type: 'object',
      additionalProperties: false,
      description: 'Any additional flat values.',
      properties: {
        register: {
          ...oneOf({
            type: 'object',
            additionalProperties: false,
            description: 'Register face values.',
            properties: {
              display: {
                type: 'string',
                example: 'Front Register 2'
              }
            }
          }),
          default: null
        },
        branch: {
          ...oneOf({
            type: 'object',
            additionalProperties: false,
            description: 'Branch face values.',
            properties: {
              display: {
                type: 'string',
                example: 'WAX Berlin 2'
              }
            }
          }),
          default: null
        },
        cashier_staff: {
          ...oneOf({
            type: 'object',
            additionalProperties: false,
            description: 'Cashier face values.',
            properties: {
              number: {
                type: 'string',
                example: '005'
              },
              display: {
                type: 'string',
                example: 'Chantal Kowalski'
              }
            }
          }),
          default: null
        },
        statistics: {
          ...oneOf({
            type: 'object',
            additionalProperties: false,
            description: 'Count of transactions of type "sales"',
            properties: {
              sales_count: {
                type: 'number',
                example: '43'
              }
            }
          })
        }
      }
    }),
    default: null
  },
  balance_last: {
    ...oneOf({
      type: 'string',
      format: 'uuid',
      example: '9d20d799-b6e0-46a0-9e48-7ca372af13d4',
      description: 'The Tillhub balance resource ID of the last balance.'
    }),
    default: null
  },
  balance_custom_id_last: {
    ...oneOf({
      type: 'string',
      example: '12',
      description: 'The last balance\'s `custom_id`, that usually fiscally referred to as the balance number.'
    }),
    default: null
  },
  comments: {
    ...oneOf({
      type: 'string',
      example: 'Daily balance by cashier',
      maxLength: 8192,
      description: 'Any arbitrary comment.'
    }),
    default: null
  },
  metadata: {
    ...oneOf({
      type: 'object',
      description: 'A container for storing arbitrary metadata. This might be altered by API.'
    }),
    default: null
  },
  receipts: {
    ...oneOf({
      type: 'array',
      default: null,
      items: {
        ...balanceReceipts
      }
    }),
    default: null
  },
  location: {
    ...oneOf({
      type: 'object',
      additionalProperties: false,
      example: '{ "lat": 52.5065133, "lng": 13.1445545}',
      description: 'Geospatial data of this transaction',
      required: [
        'lat',
        'lng'
      ],
      properties: {
        lat: {
          type: 'number'
        },
        lng: {
          type: 'number'
        }
      }
    }),
    default: null
  },
  totals: {
    type: 'array',
    items: {
      ...balanceTotals
    }
  },
  revenues: {
    type: 'array',
    items: {
      ...balanceRevenues
    }
  },
  payments: {
    type: 'array',
    items: {
      ...balancePayments
    }
  },
  taxes: {
    type: 'array',
    items: {
      ...balanceTaxes
    }
  },
  tips: {
    type: 'array',
    items: {
      ...balanceTips
    }
  },
  cash_units: {
    type: 'array',
    items: {
      ...balanceCashUnits
    }
  },
  timezone
}
