const { oneOf } = require('../../../helpers/payload-or-null')
const { timezone } = require('../../../common/timezones')

const relatedObject = require('../components/embedded/reference/related')
const dependsObject = require('../components/embedded/reference/depends')
const originObject = require('../components/embedded/reference/origin')

module.exports = {
  dev_uuid: oneOf({
    deprecated: true,
    type: 'string',
    example: '886eef646bc1c4d79eb8495321bbd472',
    description: 'Initialized as the iPAD\'s UIDevice.current.identifierForVendor?.uuidString.md5() and stored in the Keychain for the Tillhub application'
  }),
  transaction_number: oneOf({
    deprecated: true,
    type: 'integer',
    example: 34,
    description: 'The counting number (receipt number) of this transaction'
  }),
  balance_number: oneOf({
    deprecated: true,
    type: 'integer',
    example: 5,
    description: 'The associated balance\'s counting number (receipt number) of this transaction'
  }),
  branch_number: oneOf({
    deprecated: true,
    type: 'integer',
    example: 7,
    description: 'The branch number (to be branch_custom_id)'
  }),
  register_number: oneOf({
    deprecated: true,
    type: 'integer',
    example: 11,
    description: 'The register number (to be register_custom_id)'
  }),
  guid: oneOf({
    deprecated: true,
    type: 'string',
    example: '00020002000120190123175129150',
    description: 'The transactions unique identifier built on the client: transaction_type(%04lu) + register(%04lu) + branch(%04lu) + yyyyMMddHHmmssSSS'
  }),
  date: {
    deprecated: true,
    type: 'string',
    format: 'date-time',
    example: '2019-01-23 16:51:29.143+00',
    description: 'Creation date of the transaction'
  },
  cashier_staff_number: oneOf({
    deprecated: true,
    type: 'string',
    example: '0018',
    description: 'The staff custom id of the responsible cashier'
  }),
  branch_fa_ident: oneOf({
    deprecated: true,
    description: 'Is not used at all'
  }),
  geo_data: oneOf({
    deprecated: true,
    description: 'Not yet used, layout missing'
  }),
  currency_iso_code: oneOf({
    deprecated: true,
    type: 'string',
    example: 'EUR',
    description: 'The three letter [ISO currency](https://en.wikipedia.org/wiki/ISO_4217) of this transaction.'
  }),
  total: oneOf({
    deprecated: true,
    type: 'integer',
    example: 3500,
    description: 'The total amount of this transaction in the lowest (available) fraction of that currency -> 35.00 EUR or 3500 HUF respectively'
  }),
  change: oneOf({
    deprecated: true,
    type: 'integer',
    example: 500,
    description: 'The total amount of change given back -> change = Sum(payment_amounts) - total'
  }),
  fr_receipt_id: oneOf({
    deprecated: true,
    type: 'integer',
    description: 'Is not used'
  }),
  customer_id: oneOf({
    deprecated: true,
    type: 'integer',
    description: 'Is not used'
  }),
  type_name: {
    deprecated: true,
    type: 'string',
    enum: [
      'sale',
      'sale_cancel',
      'expense',
      'expense_cancel'
    ],
    description: 'Description of the transaction type'
  },
  receipt_text: oneOf({
    deprecated: true,
    type: 'string',
    description: 'Is not used'
  }),
  customer_number: oneOf({
    deprecated: true,
    type: 'string',
    example: '0000000000171088',
    description: 'Custom id of the customer if there is one'
  }),
  refunded_at: oneOf({
    deprecated: true,
    type: 'string',
    format: 'date-time',
    description: 'Not used'
  }),
  _id: oneOf({
    deprecated: true,
    type: 'string',
    format: 'uuid',
    example: '97074aa7-ed27-464c-890e-0b47ab153b8a',
    description: 'Temporary hack for id-functionality (which is Int)'
  }),
  customer_receipt: oneOf({
    deprecated: true,
    type: 'string',
    description: 'Plaintext for the receipt handed to the customer'
  }),
  merchant_receipt: oneOf({
    deprecated: true,
    type: 'string',
    description: 'Plaintext for the receipt kept by the merchant (e.g. for card payments, tips etc.)'
  }),
  barcode: oneOf({
    deprecated: true,
    type: 'string',
    example: 'RTC078DFCE',
    description: 'Application specific barcode to retreive transactions by scanning (prefix \'RT\')'
  }),
  customer_description: oneOf({
    deprecated: true,
    type: 'string',
    example: 'Tamás Constantin Regie',
    description: 'Readable short description of a customer, usually their names'
  }),
  signed_transactions: oneOf({
    deprecated: true,
    type: 'string',
    description: 'Is not used'
  }),
  metadata: oneOf({
    // most probably very incomplete - please check the code in the API
    deprecated: true,
    type: 'object',
    properties: {
      signing_error_counter: {
        type: 'integer',
        example: 13,
        description: 'If signing fails this represents the number of transactions since signing last succeded'
      },
      origin: {
        type: 'object',
        properties: {
          cart: oneOf({
            type: 'string',
            format: 'uuid',
            description: 'Reference to the saved cart that caused this transaction'
          }),
          external_reference_id: oneOf({
            type: 'string',
            description: 'Custom reference, usually set by external API users'
          })
        }
      }
    },
    description: 'Is not used'
  }),
  client_id: oneOf({
    deprecated: true,
    type: 'string',
    description: 'The unique identifier within the application (transaction producer)'
  }),
  cashier_staff: oneOf({
    deprecated: true,
    type: 'string',
    format: 'uuid',
    example: '5ad2351d-9a67-45f9-ad4f-0abcbefa9037',
    description: 'Id of Tillhub staff resource'
  }),
  expense: oneOf({
    deprecated: true,
    type: 'object',
    properties: {
      expense_account_name: {
        type: 'string',
        example: '2 Testausgabe',
        description: 'Name of the used expense account'
      },
      expense_account_type: {
        type: 'string',
        enum: [
          'expense',
          'deposit',
          'bank',
          'safe_expense',
          'safe_deposit',
          'tip_expense'
        ],
        description: 'Type of the expense'
      },
      expense_fa_account: {
        type: 'string',
        example: '1338',
        description: 'Custom id of the used expense account'
      },
      safe_id: {
        type: 'string',
        format: 'uuid',
        example: '09a9a469-c16b-4b54-835d-692d05d218f9',
        description: 'If sfes are involved, the Tillhub resource identifier of that safe'
      }
    }
  }),
  temp_staff: oneOf({
    deprecated: true,
    type: 'string',
    format: 'uuid',
    example: '5ad2351d-9a67-45f9-ad4f-0abcbefa9037',
    description: 'Id of temporary/secondary Tillhub staff resource.'
  }),
  client: oneOf({
    deprecated: true,
    type: 'string',
    format: 'uuid',
    example: '5ad2351d-9a67-45f9-ad4f-0abcbefa9037',
    description: 'The associated Tillhub client resource identifier.'
  }),
  customer: oneOf({
    deprecated: true,
    type: 'string',
    format: 'uuid',
    example: '5ad2351d-9a67-45f9-ad4f-0abcbefa9037',
    description: 'The associated Tillhub customer resource identifier.'
  }),
  context: oneOf({
    deprecated: true,
    type: 'array',
    items: {
      type: 'object'
    }
  }),
  timezone,
  has_promotion: oneOf({
    type: 'boolean',
    default: false,
    description: 'If true, the transaction contains items modified by the promotion engine'
  }),
  branch: oneOf({
    type: 'string',
    format: 'uuid',
    description: 'Id of the Tillhub branch resource'
  }),
  register: oneOf({
    type: 'string',
    format: 'uuid',
    description: 'Id of the Tillhub register resource'
  }),
  _type: oneOf({
    type: 'string',
    description: 'The supported transaction type',
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
  _custom_id: oneOf({
    type: 'string',
    example: 'Sale Nr.5',
    maxLength: 128,
    description: 'Any string that a user wants to store to identify a transaction, or wants to make it human readable.'
  }),
  _staff: oneOf({
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
  _external_reference_id: oneOf({
    type: 'string',
    example: '823742686434462376376376473647346',
    maxLength: 128,
    description: 'Any identifier a user wants to store in the transaction system. E.g. an ID in a thirdy party ERP.'
  }),
  _customer_external_reference_id: oneOf({
    type: 'string',
    maxLength: 128,
    example: '135543344343',
    description: 'An user defined customer reference.'
  }),
  _origins: oneOf({
    type: 'array',
    description: 'A list of Tillhub resources that caused this transaction, e.g. a stored cart or multiple delivery notes',
    items: {
      ...originObject
    }
  }),
  _depends_on: oneOf({
    type: 'array',
    description: 'A list of Tillhub resources that this transaction directly depends on, e.g. a refund for a previous sale',
    items: {
      ...dependsObject
    }
  }),
  _related_to: oneOf({
    type: 'array',
    description: 'A list of Tillhub resources that this transaction is related to, e.g. an invoice object that tracks the lifetime of that invoice',
    items: {
      ...relatedObject
    }
  }),
  _location: oneOf({
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
