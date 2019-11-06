const { oneOf } = require('../../helpers/payload-or-null')
const { timezone } = require('../../common/timezones')

const relatedObject = require('./components/embedded/reference/related')
const dependsObject = require('./components/embedded/reference/depends')
const originObject = require('./components/embedded/reference/origin')

module.exports = {
  date: {
    type: 'string',
    format: 'date-time',
    example: '2018-01-29T14:55:05.000Z',
    description: 'A user defined [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) compliant date e.g. 2018-01-29T14:55:05.000Z. This is used to track local client time as oppsed to `created_at`, which is the time the server has received it. This is necessary for e.g. offline client, and is valid time in fiscal reports.'
  },
  type: {
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
      example: 'Sale Nr.5',
      maxLength: 128,
      description: 'Any string that a user wants to store to identify a transaction, or wants to make it human readable.'
    }),
    default: null
  },
  custom_id_last: {
    ...oneOf({
      type: 'string',
      example: 'Sale Nr.4',
      maxLength: 128,
      description: 'Any string that a user wants to store to identify a previous transaction.'
    }),
    default: null
  },
  branch: {
    ...oneOf({
      type: 'string',
      format: 'uuid',
      example: 'f2ac2cae-97ff-42a1-967b-0a35222ab6d1',
      description: 'The Tillhub branch location ID.'
    }),
    default: null
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
    ...oneOf({
      type: 'string',
      format: 'uuid',
      example: '9d110eb2-2245-4e14-9574-49b502f3a9b3',
      description: 'The Tillhub register location ID.'
    }),
    default: null
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
      description: 'The Tillhub staff resource ID, that has generated this transaction. (used by temp staff)'
    }),
    default: null
  },
  cashier_staff: {
    ...oneOf({
      type: 'string',
      format: 'uuid',
      example: '378a5f19-44c6-4ed1-9ad1-45ec103f1414',
      description: 'The Tillhub staff (as cashier) resource ID, that has generated this transaction.'
    }),
    default: null
  },
  device: {
    ...oneOf({
      type: 'string',
      minLength: 6,
      maxLength: 64,
      example: 'ec1b41af291c4b9483d8adb4e80ac92f',
      description: 'The Tillhub POS client ID, that was generated upon install, that has generated this transaction.'
    }),
    default: null
  },
  context: {
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
          deprecated: true
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
  balance_custom_id_next: {
    ...oneOf({
      type: 'string',
      example: '13',
      description: 'The next desired balance number on that register.'
    }),
    default: null
  },
  external_reference_id: {
    ...oneOf({
      type: 'string',
      example: '823742686434462376376376473647346',
      maxLength: 128,
      description: 'Any identifier a user wants to store in the transaction system. E.g. an ID in a thirdy party ERP.'
    }),
    default: null
  },
  external_reference: {
    ...oneOf({
      type: 'object',
      description: 'A generic reference container as a user defined object.',
      maxProperties: 10
    }),
    default: null
  },
  customer: {
    ...oneOf({
      type: 'string',
      format: 'uuid',
      example: 'e3ba6efa-0fc2-4298-96e3-5f9f79ef2633',
      description: 'The Tillhub customer resource ID, that this transaction has been generated for.'
    }),
    default: null
  },
  customer_external_reference_id: {
    ...oneOf({
      type: 'string',
      maxLength: 128,
      example: '135543344343',
      description: 'An user defined customer reference.'
    }),
    default: null
  },
  comments: {
    ...oneOf({
      type: 'string',
      example: 'Did this sale. Went to the next one.',
      maxLength: 8192,
      description: 'Any arbitrary comment.'
    }),
    default: null
  },
  code: {
    ...oneOf({
      type: 'object',
      additionalProperties: false,
      required: [
        'format',
        'data'
      ],
      properties: {
        format: {
          type: 'string',
          enum: [
            'qr',
            'aztec',
            'code128'
          ]
        },
        data: {
          type: 'string',
          example: '{"data_for_a": "qr_code"}',
          maxLength: 16384,
          description: 'A barcade container of any type with which this transaction is associated.'
        },
        caption: {
          default: null,
          type: 'string',
          minLength: 1,
          maxLength: 128
        }
      }
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
  discounts_applied: {
    ...oneOf({
      type: 'array',
      items: {
        type: 'object',
        // additionalProperties: false,
        description: 'Total sum per currency of applied discounts as they happened at transaction creation time.'
        // properties: {}
      }
    }),
    default: []
  },
  delegated: {
    ...oneOf({
      type: 'boolean',
      example: 'false',
      description: 'Described whether a transaction was a originated by any other device or service that is not directly inside the client account. This can be online systems, external systems or other Tillhub POS clients inside other client accounts.'
    }),
    default: false
  },
  receipts: {
    ...oneOf({
      type: 'array',
      default: null,
      items: {
        type: 'object',
        additionalProperties: false,
        required: [
          'type',
          'text'
        ],
        properties: {
          type: {
            type: 'string',
            enum: [
              'customer',
              'merchant'
            ]
          },
          text: {
            type: 'string',
            maxLength: 16384
          }
        }
      }
    }),
    default: null
  },
  origins: {
    ...oneOf({
      type: 'array',
      description: 'A list of Tillhub resources that caused this transaction, e.g. a stored cart or multiple delivery notes',
      items: {
        ...originObject
      }
    }),
    default: null
  },
  depends_on: {
    ...oneOf({
      type: 'array',
      description: 'A list of Tillhub resources that this transaction directly depends on, e.g. a refund for a previous sale',
      items: {
        ...dependsObject
      }
    }),
    default: null
  },
  related_to: {
    ...oneOf({
      type: 'array',
      description: 'A list of Tillhub resources that this transaction is related to, e.g. an invoice object that tracks the lifetime of that invoice',
      items: {
        ...relatedObject
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
  summary_items: {
    ...oneOf({
      type: 'array',
      items: {
        type: 'object',
        properties: {
          currency: {
            type: 'string',
            description: 'The three letter [ISO currency](https://en.wikipedia.org/wiki/ISO_4217) of this item.',
            example: '',
            minLength: 3,
            maxLength: 3
          },
          amount_total_gross: {
            description: 'The payable net amount total, after decrementing applicable discounts etc. This value needs to be lower than or equal to the respective unti amount.',
            type: 'number',
            minimum: -1000000,
            maximum: 1000000,
            multipleOf: 0.01
          },
          amount_total_net: {
            description: 'The payable net amount total, after decrementing applicable discounts etc. This value needs to be lower than or equal to the respective unti amount.',
            type: 'number',
            minimum: -1000000,
            maximum: 1000000,
            multipleOf: 0.01
          },
          discount_amount_total: {
            default: 0,
            description: 'The total discount amount.',
            type: 'number',
            minimum: -1000000,
            maximum: 1000000,
            multipleOf: 0.01
          },
          tip_amount_total: {
            description: 'The total tip amount.',
            type: 'number',
            minimum: -1000000,
            maximum: 1000000,
            multipleOf: 0.01
          },
          tax_amount_total: {
            description: 'The total tax amount.',
            type: 'number',
            minimum: -1000000,
            maximum: 1000000,
            multipleOf: 0.01
          },
          change_amount_total: {
            description: 'The total cash change amount.',
            type: 'number',
            minimum: -1000000,
            maximum: 1000000,
            multipleOf: 0.01
          },
          sub_total: {
            description: 'The payable amount before decrementing applicable discounts. Net or Gross based on tax scheme. ',
            type: 'number',
            minimum: -1000000,
            maximum: 1000000,
            multipleOf: 0.01
          }
        }
      }
    })
  },
  timezone
}
