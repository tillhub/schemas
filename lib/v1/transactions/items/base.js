const { oneOf } = require('../../../helpers/payload-or-null')
const discountObject = require('../embedded/discount/base')
const voucherObject = require('../embedded/voucher/base')

const relatedObject = require('../embedded/reference/related')
const dependsObject = require('../embedded/reference/depends')
const originObject = require('../embedded/reference/origin')

module.exports = {
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
  type: {
    type: 'string',
    description: 'The type of item.',
    enum: [
      'item',
      'refund',
      'discount',
      'expense', // together with an 'expense' payment encodes expense/deposit etc.
      'tip'
    ]
  },
  position: {
    default: null,
    ...oneOf({
      type: 'number',
      description: 'The position description of the item. E.g. positon 1 (2, 3 etc.) in the cart.',
      example: '1',
      maximum: 32767,
      minimum: 0
    })
  },
  qty: {
    default: null,
    ...oneOf({
      type: 'number',
      description: 'The quantity of this item.',
      example: '100',
      minimum: -32767,
      maximum: 32767,
      multipleOf: 0.001
    })
  },
  unit: {
    default: null,
    ...oneOf({
      type: 'string',
      description: 'The metric unit of this item. E.g. 1.754 kg(!) vegetables.',
      example: 'kg'
    })
  },
  date: {
    type: 'string',
    format: 'date-time',
    example: '2018-01-29T14:55:05.000Z',
    description: 'A user defined [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) compliant date e.g. 2018-01-29T14:55:05.000Z. This is used to track local client time as oppsed to `created_at`, which is the time the server has received it. This is necessary for e.g. offline client, and is valid time in fiscal reports. If none is provided it will default to the transaction\'s date.'
  },
  name: {
    type: 'string',
    description: 'The nomenclature for this item, which is fiscally required.',
    example: 'Packaged beans, green'
  },
  currency: {
    type: 'string',
    description: 'The three letter [ISO currency](https://en.wikipedia.org/wiki/ISO_4217) of this item.',
    example: '',
    minLength: 3,
    maxLength: 3
  },
  product: {
    ...oneOf({
      type: 'string',
      format: 'uuid',
      description: 'The Tillhub product resource reference ID.',
      example: '43847a66-97dc-4ac2-8e8a-c44920e1f22f'
    })
  },
  custom_id: {
    default: null,
    ...oneOf({
      type: 'string',
      description: 'Any custom ID, e.g. a product number',
      example: 'AKI-1234566'
    })
  },
  vat_rate: {
    type: 'number',
    description: 'The VAT rate of this item. E.g. 0.19 for 19% German VAT. If no VAT applies, set to 0.',
    example: '0.19',
    minimum: 0,
    maximum: 1,
    multipleOf: 0.001
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
  register: {
    ...oneOf({
      type: 'string',
      format: 'uuid',
      example: '9d110eb2-2245-4e14-9574-49b502f3a9b3',
      description: 'The Tillhub register location ID.'
    }),
    default: null
  },
  salesman_staff: {
    ...oneOf({
      type: 'string',
      format: 'uuid',
      example: 'b3465a62-62e9-46de-9df7-4d3009c46068',
      description: 'The Tillhub staff (as salesman) resource ID, that has generated this transaction.'
    }),
    default: null
  },
  taxes: {
    ...oneOf({
      type: 'array',
      items: {
        ...oneOf({
          type: 'object',
          description: 'The applicable Tillhub tax resource.',
          properties: {
            tax: {
              description: 'The applicable Tillhub tax resource with tax accounts.',
              type: 'string',
              example: 'a3be1e02-7983-4cba-b7b8-94453c0536ef'
            },
            order_index: {
              description: 'Position of the specific tax.',
              type: 'integer',
              example: 0
            },
            rate: {
              type: 'number',
              description: 'The rate of this tax.',
              example: '0.21',
              minimum: 0,
              maximum: 1,
              multipleOf: 0.001
            },
            // flat values here because we do not want to align another array from context
            account: {
              description: 'Custom number identifier.',
              type: 'string',
              example: '440165'
            },
            display: {
              description: 'Custom description.',
              default: null,
              type: 'string',
              example: 'Another tax'
            }
          }
        }),
        default: null
      }
    }),
    default: []
  },
  account: {
    default: null,
    ...oneOf({
      type: 'string',
      description: 'The applicable Tillhub (revenue or EXPENSE) account.', // expense_account goes here if type == expense
      example: 'a5380b42-6025-49de-bb1d-c9357df96506'
    })
  },
  product_group: {
    default: null,
    ...oneOf({
      type: 'string',
      format: 'uuid',
      description: 'The Tillhub product group resource reference ID.',
      example: '897bac99-f98e-433a-bca0-19acc380fb12'
    })
  },
  tax_amount: {
    description: 'The tax amount on the per unit qty base of 1.',
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
  discount_amount: {
    default: 0,
    description: 'The discount amount on the per unit qty base of 1.',
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
  discounts: {
    ...oneOf({
      type: 'array',
      items: {
        ...discountObject
      }
    }),
    default: []
  },
  attributes: {
    default: null,
    ...oneOf({
      type: 'object',
      description: 'A map of attributes of this transaction item, e.g. product properties',
      example: '{"color": "blue"}',
      maxProperties: 10
    })
  },
  stock_change_enabled: {
    default: true,
    type: 'boolean',
    description: 'The flag that describes whether an actual stock change was enabled or overridden at transaction time.'
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
  context: {
    ...oneOf({
      type: 'object',
      description: 'Any additional flat values.',
      properties: {
        title: {
          ...oneOf({
            type: 'string',
            example: 'Random 3.',
            maxLength: 1024,
            description: 'Any arbitrary title.'
          }),
          default: null
        },
        account: {
          ...oneOf({
            type: 'object',
            description: 'Account face values.',
            properties: {
              number: {
                description: 'Account number.', // account or expense_account fa_account_number
                type: 'string',
                example: '1776'
              },
              display: {
                description: 'Account description.', // account or expense_account name
                type: 'string',
                example: 'Warenerlöse 7 %' // or 'sonstige Reparaturen/und Instandhaltungen'
              }
            }
          }),
          default: null
        },
        product: {
          ...oneOf({
            type: 'object',
            description: 'Product face values.',
            properties: {
              number: {
                type: 'string',
                example: '0032039845'
              },
              display: {
                type: 'string',
                example: 'Another product string'
              }
            }
          }),
          default: null
        },
        product_group: {
          ...oneOf({
            type: 'object',
            description: 'Product face values.',
            properties: {
              number: {
                type: 'string',
                example: '0032039845'
              },
              display: {
                type: 'string',
                example: 'Waxing HIM'
              }
            }
          }),
          default: null
        },
        salesman_staff: {
          ...oneOf({
            type: 'object',
            description: 'Salesman face values.',
            properties: {
              owner: {
                type: 'boolean',
                example: true
              },
              number: {
                type: 'string',
                example: '012'
              },
              display: {
                type: 'string',
                example: 'Cindy Schmidt'
              }
            }
          }),
          default: null
        }
      },
      required: [
        'account',
        'product'
      ]
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
  amount_net: {
    description: 'The payable net amount on the units qty base of 1, after decrementing applicable discounts etc. This value needs to be lower than or equal to the respective unti amount.',
    type: 'number',
    minimum: -1000000,
    maximum: 1000000,
    multipleOf: 0.01
  },
  amount_gross: {
    description: 'The payable gross amount on the units qty base of 1, after decrementing applicable discounts etc.  This value needs to be lower than or equal to the respective unti amount.',
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
  amount_total_gross: {
    description: 'The payable net amount total, after decrementing applicable discounts etc. This value needs to be lower than or equal to the respective unti amount.',
    type: 'number',
    minimum: -1000000,
    maximum: 1000000,
    multipleOf: 0.01
  },
  amount_unit_net: {
    description: 'The original qty base 1 item net amount, e.g. the product shelf price',
    type: 'number',
    minimum: -1000000,
    maximum: 1000000,
    multipleOf: 0.01
  },
  amount_unit_gross: {
    description: 'The original qty base 1 item net amount, e.g. the product shelf price',
    type: 'number',
    minimum: -1000000,
    maximum: 1000000,
    multipleOf: 0.01
  },
  voucher: {
    ...oneOf({
      ...voucherObject
    }),
    default: null
  }
}
