const { oneOf } = require('../../../../helpers/payload-or-null')
const discountObject = require('../../components/embedded/discount/base')
const voucherObject = require('../../components/embedded/voucher/base')

const relatedObject = require('../../components/embedded/reference/related')
const dependsObject = require('../../components/embedded/reference/depends')
const originObject = require('../../components/embedded/reference/origin')
const returnReason = require('../../components/embedded/return/return_reason')

const productServiceAnswerObject = require('../../components/embedded/product_service_answer/base')

module.exports = {
  quantity: {
    deprecated: true,
    ...oneOf({
      description: 'Quantity of the product in that item, supports floating point for e.g. 2.73 kg. The POS sends it currently as string.'
    })
  },
  article_number: {
    deprecated: true,
    ...oneOf({
      description: 'Apparently not used'
    })
  },
  article_attr_desc: {
    deprecated: true,
    ...oneOf({
      description: 'Apparently not used'
    })
  },
  article_price: {
    deprecated: true,
    ...oneOf({
      type: 'integer',
      example: 799,
      description: 'The per qty=1 raw price of the product in the lowest (available) fraction of that currency -> 7.99 EUR or 799 HUF respectively'
    })
  },
  selling_price: {
    deprecated: true,
    ...oneOf({
      type: 'integer',
      example: 612,
      description: 'The per qty=1 (disocunted) price of the product in the lowest (available) fraction of that currency -> 6.12 EUR or 612 HUF respectively'
    })
  },
  selling_price_total: {
    deprecated: true,
    ...oneOf({
      type: 'integer',
      example: 1671,
      description: 'The total (disocunted) revenue of the item, before or after taxes depending on the scheme, 16.71 EUR or 1671 HUF respectively'
    })
  },
  article_fa_account_number: {
    deprecated: true,
    ...oneOf({
      type: 'string',
      example: '8400',
      description: 'Custom identifier for the revenue financial account of the contained product'
    })
  },
  vat_percentage: {
    deprecated: true,
    ...oneOf({
      type: 'integer',
      example: 1900,
      description: 'Rate of the VAT encoded in Millis 1900 = 0.19 = 19%'
    })
  },
  vat_fa_account_number: {
    deprecated: true,
    ...oneOf({
      type: 'string',
      example: '1991',
      description: 'Custom identifier for the VAT financial account'
    })
  },
  vat_amount: {
    deprecated: true,
    ...oneOf({
      type: 'integer',
      example: 267,
      description: 'The total amount of VAT on the item, 2.67 EUR or 267 HUF respectively'
    })
  },
  salesman_staff_number: {
    deprecated: true,
    ...oneOf({
      type: 'string',
      example: '00603',
      description: 'Custom identifier for a staff that is the salesperson of that item'
    })
  },
  product_number: {
    deprecated: true,
    ...oneOf({
      type: 'string',
      example: '998877',
      description: 'Custom identifier for the product'
    })
  },
  article_id: {
    deprecated: true,
    ...oneOf({
      description: 'Apparently not used'
    })
  },
  vat_amount_euro: {
    deprecated: true,
    ...oneOf({
      description: 'Numerical exact amount of the VAT before rounding, no HUF shift: 266.798319327731092 EUR == 266.798319327731092 HUF !!! This value is sent as string from the POS.'
    })
  },
  discount_amount: {
    deprecated: true,
    ...oneOf({
      type: 'integer',
      example: 187,
      description: 'Discount amount (per qty 1) = article_price - selling_price, 1.87 EUR or 187 HUF respectively'
    })
  },
  product_name: {
    deprecated: true,
    ...oneOf({
      type: 'string',
      example: 'Soft Soothing Spray',
      description: 'Display name of the contained product'
    })
  },
  guid: {
    deprecated: true,
    ...oneOf({
      description: 'Apparently not used'
    })
  },
  product_group_number: {
    deprecated: true,
    ...oneOf({
      type: 'string',
      example: '004',
      description: 'Custom identifier for the product\'s product group'
    })
  },
  product_group_id: {
    deprecated: true,
    ...oneOf({
      description: 'Apparently not used'
    })
  },
  is_refund: {
    deprecated: true,
    ...oneOf({
      type: 'number',
      description: 'If true, the item was created by (partially) refunding a previous sale. The POS sends 0 for false and 1 for true.'
    })
  },
  _id: {
    deprecated: true,
    ...oneOf({
      type: 'string',
      format: 'uuid',
      example: 'b3063bbe-d44d-42a6-8bbf-971f5d88f848',
      description: 'UUID hack for already existing integer'
    })
  },
  related_transaction_number: {
    deprecated: true,
    ...oneOf({
      type: 'integer',
      example: 49,
      description: 'In cases of refund or cancellation, or invoicing a delivery note or selling a saved cart: the custom id (counting number) of the origin transaction'
    })
  },
  related_transaction_date: {
    deprecated: true,
    ...oneOf({
      type: 'string',
      format: 'date-time',
      example: '2018-01-29T14:55:05.000Z',
      description: 'In cases of refund or cancellation, or invoicing a delivery note or selling a saved cart: the creation date of the origin transaction'
    })
  },
  related_transaction_type: {
    deprecated: true,
    ...oneOf({
      type: 'string',
      enum: [
        'sale',
        'sale_cancel',
        'delivery_note',
        'saved_cart',
        'expense',
        'expense_cancel'
      ],
      description: 'In cases of refund or cancellation, or invoicing a delivery note or selling a saved cart: the type of the origin transaction'
    })
  },
  article: {
    deprecated: true,
    ...oneOf({
      type: 'string',
      format: 'uuid',
      example: 'cf8eae54-79da-4ad1-ab3a-878db60d4743',
      description: 'Id of the Tillhub product resource'
    })
  },
  attributes_description: {
    deprecated: true,
    ...oneOf({
      type: 'string',
      example: 'red | big | 32',
      description: 'A short description of the child attributes in variant products'
    })
  },
  is_tip: {
    deprecated: true,
    ...oneOf({
      type: 'boolean',
      default: false,
      description: 'If true, this item represents a pseudo product compensating a tip'
    })
  },
  is_owner: {
    deprecated: true,
    ...oneOf({
      type: 'boolean',
      default: false,
      description: 'If true and is_tip == true, the salesperson is the shop owner (different taxation)'
    })
  },
  reference_cartitem_client_id: {
    deprecated: true,
    ...oneOf({
      type: 'string',
      example: '01331B44-130B-45D4-97A7-401247FD5B68',
      description: 'In cases of refund or cancellation, or invoicing a delivery note or selling a saved cart: the client_id of the origin item'
    })
  },
  is_service: {
    deprecated: true,
    ...oneOf({
      type: 'boolean',
      default: false,
      description: 'If true, this item represents a service and might come with answers to service questions'
    })
  },
  used_barcode: {
    deprecated: true,
    ...oneOf({
      type: 'string',
      example: '0E9761310XF',
      description: 'The barcode used to trigger putting this item into the cart (defaults to the first available barcode from the product)'
    })
  },
  is_voucher: {
    deprecated: true,
    ...oneOf({
      type: 'boolean',
      default: false,
      description: 'If true, this item represents a voucher and must come with voucher information in \'context\''
    })
  },
  discounts: {
    deprecated: true,
    ...oneOf({
      type: 'array',
      items: {
        type: 'object',
        properties: {
          name: {
            type: 'string',
            example: 'Bonus',
            description: 'The name of an applied discount'
          },
          group: {
            type: 'string',
            enum: [
              'customer', // added from customer percentage value
              'staff', // not yet used
              'cart', // default type for source discounts
              'product_set', // originated from creating a product set with custom price
              'sconto', // originated from rounding currencies that do not use a 0.01 physical unit, e.g. CHF
              'promotion' // originated from applying the outcome of a promotion
            ],
            description: 'The group type of discount (type was taken)'
          },
          order_index: {
            type: 'integer',
            minimum: 0,
            description: 'Position of that discount inside the list (application used to have unordered set previously)'
          },
          type: {
            type: 'string',
            enum: [
              'percentage',
              'value'
            ],
            description: 'The type of the discount, decides the meaning of amount (absolut or relative value)'
          },
          value: {
            type: 'integer',
            example: '25',
            description: 'Source discount info, depending on type this means for \'percentage\': 25% and for \'value\': 0.25 EUR or 25 HUF respectively'
          },
          amount: {
            type: 'integer',
            example: 43,
            description: 'The per qty=1 effective discount amount -> 0.43 EUR or 43 HUF respectively'
          },
          amount_total: {
            type: 'integer',
            example: 312,
            description: 'The total effective discount amount -> 3.12 EUR or 312 HUF respectively'
          },
          source_id: oneOf({
            type: 'string',
            format: 'uuid',
            example: '03063bbe-e44d-42f6-8bbf-971f5d88f848',
            description: 'The Tillhub discount resource identifier for the discount used'
          })
        }
      },
      description: 'A list of applied discounts'
    })
  },
  context: {
    deprecated: true,
    ...oneOf({
      type: 'array',
      items: {
        type: 'object',
        properties: {
          name: {
            type: 'string',
            examples: [
              'return_reason', // Stringified version of \'returnReason\' object
              'product_service_questions', // Stringified version of \'productServiceAnswerObject\' object
              'note', // Cashier/customer note on this item
              'related_transaction_guid', // In cases of refund or cancellation, or invoicing a delivery note or selling a saved cart: the GUID of the origin transaction
              'voucher_value', // The DELTA value of this voucher operation, 25.00 EUR or 2500 HUF respectively
              'voucher_id', // If is_voucher, the Tillhub voucher resource used to create this item
              'voucher_client_id', // If is_voucher, the client assigned id of the item\'s associated vocuher operation
              'voucher_number', // If is_voucher, the used voucher code
              'voucher_code_is_api_generated', // if voucher was newly created - indicates if an existing number was used or if the API created a new code
              'voucher_printed_at', // if voucher qualified for printing - when it was printed
              'voucher_ean', // If is_voucher, the EAN of the voucher\'s associated product
              'voucher_product', // If is_voucher, the associated Tillhub product resource of the voucher
              'voucher_user_id', // If is_voucher, the dynamic user component (user account or external system)
              'voucher_system_id', // If is_voucher, the associated Tillhub system resource of the voucher
              'voucher_external_system_id', // If is_voucher and external, the associated voucher system inside an external system
              'voucher_action_id', // If is_voucher, the associated Tillhub system'\s action_id of the voucher
              'voucher_currency', // If is_voucher, the voucher\'s currency
              'voucher_api', // If is_voucher, the API used to process this voucher operation
              'voucher_is_booked', // If is_voucher, indicates if the operation has been successfully applied via calling the API
              'voucher_is_locked', // If is_voucher, indicates the locked state within the API
              'voucher_message', // If is_voucher, collected messages from voucher processing API calls
              'voucher_title', // If is_voucher, a currently not used custom title
              'voucher_type', // If is_voucher, the legacy type of the voucher operation
              /*
              the voucher_type enum:
              [
                0, // undefined
                1, // fleuropRedeem
                2, // fleuropSellOrRecharge
                3, // ownBrandedRecharge
                4, // ownBrandedRedeem
                5, // externalSellAndActivate
                6, // tillhubSell
                7, // tillhubRecharge
                8 // tillhubRedeem
              ]
              */
              'voucher_type' // If is_voucher, the legacy type of the voucher operation
            ]
          },
          value: oneOf({
            type: 'string'
          })
        }
      }
    })
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
              custom_id: oneOf({
                description: 'Account number.', // account or expense_account fa_account_number
                type: 'string',
                example: '1776'
              }),
              display: oneOf({
                description: 'Account description.', // account or expense_account name
                type: 'string',
                example: 'Warenerlöse 7 %' // or 'sonstige Reparaturen/und Instandhaltungen'
              })
            }
          }),
          default: null
        },
        tax: {
          ...oneOf({
            type: 'object',
            description: 'In case of a single tax (usually VAT) - the tax account face values.',
            properties: {
              custom_id: oneOf({
                description: 'Custom number identifier.',
                type: 'string',
                example: '440165'
              }),
              display: oneOf({
                description: 'Custom description.',
                default: null,
                type: 'string',
                example: 'Another tax'
              })
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
              display: oneOf({
                type: 'string',
                example: 'Another product string'
              })
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
              display: oneOf({
                type: 'string',
                example: 'Waxing HIM'
              })
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
              display: oneOf({
                type: 'string',
                example: 'Cindy Schmidt'
              })
            }
          }),
          default: null
        },
        voucher: {
          ...oneOf({
            ...voucherObject
          }),
          default: null
        },
        return_reason: returnReason
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
        position: oneOf({
          description: 'Position of the specific tax.',
          type: 'integer',
          minimum: 0,
          maximum: 30,
          example: '1'
        }),
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
        display: oneOf({
          description: 'Custom tax account description.',
          type: 'string',
          example: 'Another tax'
        })
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
