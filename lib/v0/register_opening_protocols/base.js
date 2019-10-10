const { oneOf } = require('../../helpers/payload-or-null')
const { timezone } = require('../../common/timezones')
const cashUnits = require('./cash_units/base')
const discrepancyTotal = require('./discrepancy_total/base')
const openingTips = require('./opening_tips/base')

module.exports = {
  custom_id: {
    ...oneOf({
      type: 'string',
      example: 'Protocol Nr.7',
      maxLength: 128,
      description: 'Any string that a user wants to store to identify a protocol, or wants to make it human readable.'
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
      description: 'The Tillhub staff resource ID, that has conducted this protocol. (used by temp staff)'
    }),
    default: null
  },
  cashier_staff: {
    ...oneOf({
      type: 'string',
      format: 'uuid',
      example: '378a5f19-44c6-4ed1-9ad1-45ec103f1414',
      description: 'The Tillhub staff (as cashier) resource ID, that has conducted this protocol.'
    }),
    default: null
  },
  temp_staff: {
    ...oneOf({
      type: 'string',
      format: 'uuid',
      example: '378a5f19-44c6-4ed1-9ad1-45ec103f1414',
      description: 'The Tillhub temporary staff (as cashier) resource ID, that has conducted this protocol.'
    }),
    default: null
  },
  device: {
    ...oneOf({
      type: 'string',
      minLength: 6,
      maxLength: 64,
      example: 'ec1b41af291c4b9483d8adb4e80ac92f',
      description: 'The Tillhub POS client ID, that was generated upon install, that has conducted this protocol.'
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
        }
      }
    }),
    default: null
  },
  comments: {
    ...oneOf({
      type: 'string',
      example: 'Daily protocol by cashier',
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
  location: {
    ...oneOf({
      type: 'object',
      additionalProperties: false,
      examples: [{ 'lat': 52.5065133, 'lng': 13.1445545 }],
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
  cash_units: {
    type: 'array',
    items: {
      ...cashUnits
    }
  },
  timezone,
  deleted: {
    type: 'boolean',
    default: false
  },
  discrepancy: {
    type: 'boolean',
    default: false
  },
  discrepancy_total: oneOf({
    type: 'array',
    items: {
      ...discrepancyTotal
    }
  }),
  opening_date: {
    type: 'string',
    format: 'date-time',
    example: '2018-11-04T23:18:43.075Z',
    description: 'The time when the cashier clicked on the button in the app to open the register'
  },
  opening_tips: oneOf({
    type: 'array',
    items: {
      ...openingTips
    }
  }),
  balance_number: oneOf({
    type: 'integer'
  }),
  balance_last: oneOf({
    type: 'string',
    format: 'uuid',
    example: '9d20d799-b6e0-46a0-9e48-7ca372af13d4',
    description: 'The Tillhub balance resource ID of the last balance.'
  }),
  balance_custom_id_last: oneOf({
    type: 'string',
    example: '12',
    description: 'The last balance\'s `custom_id`, that usually fiscally referred to as the balance number.'
  }),
  merchant_receipt: oneOf({
    type: 'string',
    maxLength: 16384
  })
}
