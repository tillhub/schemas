const { oneOf } = require('../../../../helpers/payload-or-null')
const discountObject = require('../../components/embedded/discount/base')
const voucherObject = require('../../components/embedded/voucher/base')

const relatedObject = require('../../components/embedded/reference/related')
const dependsObject = require('../../components/embedded/reference/depends')
const originObject = require('../../components/embedded/reference/origin')

const productServiceAnswerObject = require('../../components/embedded/product_service_answer/base')

module.exports = {
  fr_transaction_id: {
    deprecated: true
  },
  quantity: {
    deprecated: true
  },
  article_number: {
    deprecated: true
  },
  article_attr_desc: {
    deprecated: true
  },
  article_price: {
    deprecated: true
  },
  selling_price: {
    deprecated: true
  },
  selling_price_total: {
    deprecated: true
  },
  article_fa_account_number: {
    deprecated: true
  },
  vat_percentage: {
    deprecated: true
  },
  vat_fa_account_number: {
    deprecated: true
  },
  vat_amount: {
    deprecated: true
  },
  salesman_staff_number: {
    deprecated: true
  },
  product_number: {
    deprecated: true
  },
  article_id: {
    deprecated: true
  },
  vat_amount_euro: {
    deprecated: true
  },
  discount_amount: {
    deprecated: true
  },
  product_name: {
    deprecated: true
  },
  guid: {
    deprecated: true
  },
  product_group_number: {
    deprecated: true
  },
  product_group_id: {
    deprecated: true
  },
  is_refund: {
    deprecated: true
  },
  _id: {
    deprecated: true
  },
  related_transaction_number: {
    deprecated: true
  },
  related_transaction_date: {
    deprecated: true
  },
  related_transaction_type: {
    deprecated: true
  },
  article: {
    deprecated: true
  },
  attributes_description: {
    deprecated: true
  },
  is_tip: {
    deprecated: true
  },
  is_owner: {
    deprecated: true
  },
  reference_cartitem_client_id: {
    deprecated: true
  },
  is_service: {
    deprecated: true
  },
  used_barcode: {
    deprecated: true
  },
  is_voucher: {
    deprecated: true
  },
  context: {
    deprecated: true
  },
  _context: {
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
              custom_id: {
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
        tax: {
          ...oneOf({
            type: 'object',
            description: 'In case of a single tax (usually VAT) - the tax account face values.',
            properties: {
              custom_id: {
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
        },
        product: {
          ...oneOf({
            type: 'object',
            description: 'Product face values.',
            properties: {
              custom_id: {
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
              custom_id: {
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
                example: 'true'
              },
              custom_id: {
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
        },
        voucher: {
          ...oneOf({
            ...voucherObject
          }),
          default: null
        }
      },
      required: [
        'account'
      ]
    }),
    default: null
  },
  type: oneOf({
    type: 'string',
    description: 'The type of item.'
  }),
  client_id: oneOf({
    type: 'string',
    example: 'd0d40841-b1a7-438a-9d1e-2bfec590d2e3',
    minLength: 6,
    maxLength: 64,
    description: 'A implementer defined identifier. This can be used for local resource matching and has no business implication.'
  }),
  position: oneOf({
    type: 'number',
    description: 'The position description of the item. E.g. positon 1 (2, 3 etc.) in the cart.',
    example: '1',
    maximum: 32767,
    minimum: 0
  }),
  _qty: oneOf({
    type: 'number',
    description: 'The quantity of this item.',
    example: '100',
    minimum: -32767,
    maximum: 32767,
    multipleOf: 0.001
  }),
  _unit: oneOf({
    type: 'string',
    description: 'The metric unit of this item. E.g. 1.754 kg(!) vegetables.',
    example: 'kg'
  }),
  _currency: oneOf({
    type: 'string',
    description: 'The three letter [ISO currency](https://en.wikipedia.org/wiki/ISO_4217) of this item.',
    example: '',
    minLength: 3,
    maxLength: 3
  }),
  _product: oneOf({
    type: 'string',
    format: 'uuid',
    description: 'The Tillhub product resource reference ID.',
    example: '43847a66-97dc-4ac2-8e8a-c44920e1f22f'
  }),
  _custom_id: oneOf({
    type: 'string',
    description: 'Any custom ID, e.g. a product number',
    example: 'AKI-1234566'
  }),
  _tax: oneOf({
    type: 'string',
    format: 'uuid',
    example: '9d110eb2-2245-4e14-9574-49b502f3a9b3',
    description: 'If a single tax applies (normally VAT) - the applicable Tillhub tax resource with tax accounts.'
  }),
  _vat_rate: oneOf({
    type: 'number',
    description: 'The VAT rate of this item. E.g. 0.19 for 19% German VAT. If no VAT applies, set to 0.',
    example: '0.19',
    minimum: 0,
    maximum: 1,
    multipleOf: 0.001
  }),
  branch: oneOf({
    type: 'string',
    format: 'uuid',
    example: 'f2ac2cae-97ff-42a1-967b-0a35222ab6d1',
    description: 'The Tillhub branch location ID.'
  }),
  register: oneOf({
    type: 'string',
    format: 'uuid',
    example: '9d110eb2-2245-4e14-9574-49b502f3a9b3',
    description: 'The Tillhub register location ID.'
  }),
  salesman_staff: oneOf({
    type: 'string',
    format: 'uuid',
    example: 'b3465a62-62e9-46de-9df7-4d3009c46068',
    description: 'The Tillhub staff (as salesman) resource ID, that has generated this transaction.'
  }),
  _taxes: oneOf({
    type: 'array',
    items: oneOf({
      type: 'object',
      description: 'The applicable Tillhub tax resource.',
      properties: {
        tax: {
          description: 'The applicable Tillhub tax resource with tax accounts.',
          type: 'string',
          example: 'a3be1e02-7983-4cba-b7b8-94453c0536ef'
        },
        position: {
          description: 'Position of the specific tax.',
          type: 'integer',
          minimum: 0,
          maximum: 30,
          example: '1'
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
        custom_id: {
          default: null,
          ...oneOf({
            description: 'Custom tax account number identifier.',
            type: 'string',
            example: '440165'
          })
        },
        display: {
          default: null,
          ...oneOf({
            description: 'Custom tax account description.',
            type: 'string',
            example: 'Another tax'
          })
        }
      }
    })
  }),
  configuration: oneOf({
    type: 'object',
    description: 'Item property changes triggered by a user decision.'
  }),
  _account: oneOf({
    type: 'string',
    format: 'uuid',
    description: 'The applicable Tillhub (revenue or EXPENSE) account.', // expense_account goes here if type == expense
    example: 'a5380b42-6025-49de-bb1d-c9357df96506'
  }),
  _product_group: oneOf({
    type: 'string',
    format: 'uuid',
    description: 'The Tillhub product group resource reference ID.',
    example: '897bac99-f98e-433a-bca0-19acc380fb12'
  }),
  _tax_amount: oneOf({
    description: 'The tax amount on the per unit qty base of 1.',
    type: 'number',
    minimum: -1000000,
    maximum: 1000000,
    multipleOf: 0.01
  }),
  _tax_amount_total: oneOf({
    description: 'The total tax amount.',
    type: 'number',
    minimum: -1000000,
    maximum: 1000000,
    multipleOf: 0.01
  }),
  _discount_amount: {
    default: 0,
    description: 'The discount amount on the per unit qty base of 1.',
    type: 'number',
    minimum: -1000000,
    maximum: 1000000,
    multipleOf: 0.01
  },
  _discount_amount_total: oneOf({
    default: 0,
    description: 'The total discount amount.',
    type: 'number',
    minimum: -1000000,
    maximum: 1000000,
    multipleOf: 0.01
  }),
  _promotion_amount: oneOf({
    description: 'The promotion amount on the per unit qty base of 1.',
    type: 'number',
    minimum: -1000000,
    maximum: 1000000,
    multipleOf: 0.01
  }),
  _promotion_amount_total: oneOf({
    description: 'The total promotion amount.',
    type: 'number',
    minimum: -1000000,
    maximum: 1000000,
    multipleOf: 0.01
  }),
  _discounts: oneOf({
    type: 'array',
    items: {
      ...discountObject
    }
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
  _product_service_answers: oneOf({
    type: 'array',
    description: 'A list of answers to product service questions',
    items: {
      ...productServiceAnswerObject
    }
  }),
  _comments: oneOf({
    type: 'string',
    example: 'Did this sale. Went to the next one.',
    maxLength: 8192,
    description: 'Any arbitrary comment.'
  }),
  _external_reference_id: oneOf({
    type: 'string',
    example: '823742686434462376376376473647346',
    maxLength: 128,
    description: 'Any identifier a user wants to store in the transaction system. E.g. an ID in a thirdy party ERP.'
  }),
  _amount_net: oneOf({
    description: 'The payable net amount on the units qty base of 1, after decrementing applicable discounts etc. This value needs to be lower than or equal to the respective unti amount.',
    type: 'number',
    minimum: -1000000,
    maximum: 1000000,
    multipleOf: 0.01
  }),
  _amount_gross: oneOf({
    description: 'The payable gross amount on the units qty base of 1, after decrementing applicable discounts etc.  This value needs to be lower than or equal to the respective unti amount.',
    type: 'number',
    minimum: -1000000,
    maximum: 1000000,
    multipleOf: 0.01
  }),
  _amount_total_net: oneOf({
    description: 'The payable net amount total, after decrementing applicable discounts etc. This value needs to be lower than or equal to the respective unti amount.',
    type: 'number',
    minimum: -1000000,
    maximum: 1000000,
    multipleOf: 0.01
  }),
  _amount_total_gross: oneOf({
    description: 'The payable net amount total, after decrementing applicable discounts etc. This value needs to be lower than or equal to the respective unti amount.',
    type: 'number',
    minimum: -1000000,
    maximum: 1000000,
    multipleOf: 0.01
  }),
  _amount_unit_net: oneOf({
    description: 'The original qty base 1 item net amount, e.g. the product shelf price',
    type: 'number',
    minimum: -1000000,
    maximum: 1000000,
    multipleOf: 0.01
  }),
  _amount_unit_gross: oneOf({
    description: 'The original qty base 1 item net amount, e.g. the product shelf price',
    type: 'number',
    minimum: -1000000,
    maximum: 1000000,
    multipleOf: 0.01
  })
}
