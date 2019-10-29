const { oneOf } = require('../../../helpers/payload-or-null')
const { timezone } = require('../../../common/timezones')

const relatedObject = require('../components/embedded/reference/related')
const dependsObject = require('../components/embedded/reference/depends')
const originObject = require('../components/embedded/reference/origin')

module.exports = {
  dev_uuid: {
    deprecated: true
  },
  transaction_number: {
    deprecated: true
  },
  balance_number: {
    deprecated: true
  },
  branch_number: {
    deprecated: true
  },
  register_number: {
    deprecated: true
  },
  guid: {
    deprecated: true
  },
  date: {
    deprecated: true
  },
  cashier_staff_number: {
    deprecated: true
  },
  branch_fa_ident: {
    deprecated: true
  },
  geo_data: {
    deprecated: true
  },
  currency_iso_code: {
    deprecated: true
  },
  total: {
    deprecated: true
  },
  change: {
    deprecated: true
  },
  fr_receipt_id: {
    deprecated: true
  },
  customer_id: {
    deprecated: true
  },
  type_name: {
    deprecated: true
  },
  receipt_text: {
    deprecated: true
  },
  customer_number: {
    deprecated: true
  },
  refunded_at: {
    deprecated: true
  },
  _id: {
    deprecated: true
  },
  customer_receipt: {
    deprecated: true
  },
  merchant_receipt: {
    deprecated: true
  },
  barcode: {
    deprecated: true
  },
  customer_description: {
    deprecated: true
  },
  signed_transactions: {
    deprecated: true
  },
  metadata: {
    deprecated: true
  },
  client_id: {
    deprecated: true
  },
  cashier_staff: {
    deprecated: true
  },
  client: {
    deprecated: true
  },
  customer: {
    deprecated: true
  },
  context: {
    deprecated: true
  },
  timezone,
  has_promotion: {
    deprecated: true
  },
  branch: oneOf({
    type: 'string',
    description: 'Alphanumeric id of the branch',
    format: 'uuid'
  }),
  register: oneOf({
    type: 'string',
    description: 'Alphanumeric id of the register',
    format: 'uuid'
  }),
  type: oneOf({
    type: 'string',
    description: 'The supported transaction types',
    enum: [
      'sale',
      'sale_cancel',
      'invoice',
      'invoice_cancel',
      'expense',
      'expense_cancel',
      'deposit',
      'deposit_cancel',
      'bank_deposit',
      'bank_deposit_cancel',
      'bank_expense',
      'bank_expense_cancel',
      'safe_expense',
      'safe_expense_cancel',
      'safe_deposit',
      'safe_deposit_cancel',
      'tip_expense',
      'tip_expense_cancel',
      'tip_deposit',
      'tip_deposit_cancel'
    ]
  }),
  custom_id: oneOf({
    type: 'string',
    example: 'Sale Nr.5',
    maxLength: 128,
    description: 'Any string that a user wants to store to identify a transaction, or wants to make it human readable.'
  }),
  staff: oneOf({
    type: 'string',
    format: 'uuid',
    example: 'b3465a62-62e9-46de-9df7-4d3009c46068',
    description: 'The Tillhub staff resource ID, that has generated this transaction. (used by temp staff)'
  }),
  _context: {
    ...oneOf({
      type: 'object',
      additionalProperties: false,
      description: 'Any additional flat values.',
      properties: {
        guid: {
          ...oneOf({
            type: 'string',
            example: '00000016000120181122163945117',
            maxLength: 128,
            description: 'Old school transaction custom ID.'
          }),
          default: null
        },
        title: {
          ...oneOf({
            type: 'string',
            example: 'Random 3.',
            maxLength: 1024,
            description: 'Any arbitrary title.'
          }),
          default: null
        },
        return: {
          ...oneOf({
            type: 'object',
            description: 'Information about a returned item.',
            properties: {
              reason: {
                ...oneOf({
                  type: 'string',
                  format: 'uuid',
                  example: '9d110eb2-2245-4e14-9574-49b502f3a9b3',
                  description: 'The associated Tillhub reason resource.'
                }),
                default: null
              },
              custom_description: {
                ...oneOf({
                  type: 'string',
                  maxLength: 1024,
                  example: 'Cashier entered here a custom reason.',
                  description: 'A client side user defined custom description for this return process.'
                }),
                default: null
              }
            }
          }),
          default: null
        },
        counters: {
          ...oneOf({
            type: 'object',
            additionalProperties: false,
            description: 'Transaction specific counters.',
            properties: {
              signing_error: {
                type: 'number',
                example: '2',
                description: 'Number of failed signing attempts in a row.'
              }
            }
          }),
          default: null
        },
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
              custom_id: {
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
        customer: {
          ...oneOf({
            type: 'object',
            additionalProperties: false,
            description: 'Customer face values.',
            properties: {
              custom_id: {
                type: 'string',
                example: '004310981002'
              },
              display: {
                type: 'string',
                example: 'Alexander von Müller'
              }
            }
          }),
          default: null
        }
      }
    }),
    default: null
  },
  external_reference_id: oneOf({
    type: 'string',
    example: '823742686434462376376376473647346',
    maxLength: 128,
    description: 'Any identifier a user wants to store in the transaction system. E.g. an ID in a thirdy party ERP.'
  }),
  customer_external_reference_id: oneOf({
    type: 'string',
    maxLength: 128,
    example: '135543344343',
    description: 'An user defined customer reference.'
  }),
  origins: oneOf({
    type: 'array',
    description: 'A list of Tillhub resources that caused this transaction, e.g. a stored cart or multiple delivery notes',
    items: {
      ...originObject
    }
  }),
  depends_on: oneOf({
    type: 'array',
    description: 'A list of Tillhub resources that this transaction directly depends on, e.g. a refund for a previous sale',
    items: {
      ...dependsObject
    }
  }),
  related_to: oneOf({
    type: 'array',
    description: 'A list of Tillhub resources that this transaction is related to, e.g. an invoice object that tracks the lifetime of that invoice',
    items: {
      ...relatedObject
    }
  }),
  location: oneOf({
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
  })
}
