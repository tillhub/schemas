const { oneOf } = require('../../../helpers/payload-or-null')

const commonReceipt = {
  print_branch_logo: oneOf({
    description: 'Defines if the branch logo will be printed (for types that support it)',
    type: 'boolean',
    default: true
  }),
  print_branch_header: oneOf({
    description: 'Defines if the branch header will be printed',
    type: 'boolean',
    default: true
  }),
  print_branch_footer: oneOf({
    description: 'Defines if the branch footer will be printed (for types that support it)',
    type: 'boolean',
    default: true
  }),
  print_branch_footer_image: oneOf({
    description: 'Defines if the branch footer image will be printed (for types that support it)',
    type: 'boolean',
    default: true // false for expenses, balance
  }),
  print_cashier_policy: oneOf({
    description: 'Defines if and how the cashier will be printed on the receipt',
    type: 'string',
    enum: [
      'number',
      'name', // full name printing
      'none',
      'first_name', // first name only
      'last_name' // last name only
    ]
  })
}

const salespersonConfiguration = {
  type: 'object',
  additionalProperties: false,
  properties: {
    style: oneOf({
      description: 'Defines how the salesperson will be printed, it will not be printed at all if NULL',
      type: 'string',
      enum: [
        'none',
        'number',
        'name',
        'first_name', // first name only
        'last_name' // last name only
      ]
    }),
    conditions: oneOf({
      description: 'Defines the conditions, e.g. is_unique for header level, does stack - empty means: no restrictions, depends on style then alone',
      type: 'array',
      items: {
        type: 'string',
        enum: [
          'is_unique', // targeted for header and footer settings
          'not_unique', // targeted for items if header or footer have 'is_unique'
          'not_cashier'
        ]
      }
    })
  }
}

const salespersonPrinting = {
  type: 'object',
  description: 'Defines salesperson printing on cart receipts',
  additionalProperties: false,
  properties: {
    header: oneOf({
      description: 'Defines salesperson printing in the header section',
      ...salespersonConfiguration
    }),
    footer: oneOf({
      description: 'Defines salesperson printing in the footer section',
      ...salespersonConfiguration
    }),
    item: oneOf({
      description: 'Defines salesperson printing on cart items',
      ...salespersonConfiguration
    })
  }
}

const expenseReceipt = {
  type: 'object',
  description: 'Defines receipt printing for expense type transactions, e.g. expenses, deposits, safes',
  additionalProperties: false,
  properties: {
    ...commonReceipt
  }
}

const cartReceipt = {
  type: 'object',
  description: 'Defines receipt printing for cart item based transactions, e.g. sale, order, digital',
  additionalProperties: false,
  properties: {
    ...commonReceipt,
    print_salesperson: oneOf({
      ...salespersonPrinting
    }),
    print_note: oneOf({
      description: 'Defines if notes from a cart item will be printed (if available)',
      type: 'boolean',
      default: true
    }),
    print_pager_number: oneOf({
      description: 'If a pager number is assigned - Defines if it will be printed (e.g. just for the customer)',
      type: 'boolean',
      default: true
    }),
    print_order_number: oneOf({
      description: 'Defines if the order number will be printed (e.g. just for the customer)',
      type: 'boolean',
      default: false
    }),
    print_product_attributes: oneOf({
      description: 'Defines if the product attributes (in case of options) will be printed (e.g. just for the customer)',
      type: 'boolean',
      default: true
    }),
    print_product_description: oneOf({
      description: 'Defines if the product description will be printed (e.g. just for the customer)',
      type: 'boolean',
      default: true
    }),
    print_product_group: oneOf({
      description: 'Defines if the product group will be printed (e.g. just for the merchant)',
      type: 'boolean',
      default: true
    }),
    print_product_number: oneOf({
      description: 'Defines if the product number (in case of options) will be printed (e.g. just for the merchant)',
      type: 'boolean',
      default: true
    }),
    print_product_name: oneOf({
      description: 'Defines if the product name (in case of options) will be printed (e.g. just for the merchant)',
      type: 'boolean',
      default: true
    }),
    print_serial_number: oneOf({
      description: 'Defines if an exsiting serial number will be printed on the specific receipt.',
      type: 'boolean',
      default: true
    }),
    print_service_question_answers: oneOf({
      description: 'States if the product customization answers and questions will be printed',
      type: 'boolean',
      default: false
    }),
    print_customer_name: oneOf({
      description: 'Defines if the customer name will be printed on (e.g. just for the merchant)',
      type: 'boolean',
      default: true
    }),
    print_customer_address: oneOf({
      description: 'Defines if the customer address will be printed (e.g. just for the merchant)',
      type: 'boolean',
      default: true
    }),
    print_customer_number: oneOf({
      description: 'Defines if the customer number will be printed (e.g. just for the merchant)',
      type: 'boolean',
      default: true
    }),
    print_total_discount: oneOf({
      description: 'Defines if the accumulated discount will be printed (e.g. customer, merchant)',
      type: 'boolean',
      default: true
    }),
    print_total_net: oneOf({
      description: 'Defines if the total net will be printed (e.g. customer, merchant)',
      type: 'boolean',
      default: true
    }),
    print_discount_groups: oneOf({
      description: 'Defines if groupable discounts are additionally printed',
      type: 'boolean',
      default: false
    }),
    print_applied_vouchers: oneOf({
      description: 'Defines if applied vouchers are additionally printed',
      type: 'boolean',
      default: false
    }),
    minimize_signing_footer: oneOf({
      description: 'Defines if signing footer is printed without any spaces and line breaks',
      type: 'boolean',
      default: true
    }),
    signing_footer_style: oneOf({
      description: 'Defines if signing footer is printed as text-only, qr-code-only or with text and qr-code. Legal requirements will always have precedence.',
      type: 'string',
      enum: [
        'qr_only',
        'text_only',
        'text_qr'
      ],
      default: 'qr_only'
    }),
    refund_options: oneOf({
      description: 'If the sale is a refund - the following options will be considered',
      type: 'object',
      additionalProperties: false,
      properties: {
        condition: oneOf({
          // this defines HOW we print and can apply also to the customer receipt
          description: 'If the transaction contains refunded items, consider the layout options respecting this condition',
          type: 'string',
          enum: [
            'never',
            'always',
            'payout' // the customer gets money back
          ],
          default: 'payout'
        }),
        header: oneOf({
          type: 'object',
          additionalProperties: false,
          properties: {
            print_title: oneOf({
              description: 'If true - adds a refund specific title to the receipt header, e.g. \'Refund\' or \'Rückerstattungsbeleg\'',
              type: 'boolean',
              default: false
            })
          }
        }),
        footer: oneOf({
          type: 'object',
          additionalProperties: false,
          properties: {
            print_name_field: oneOf({
              description: 'If true  - adds a name field to the footer',
              type: 'boolean',
              default: false
            }),
            print_address_field: oneOf({
              description: 'If true  - adds an address field to the footer',
              type: 'boolean',
              default: false
            }),
            print_signature_field: oneOf({
              description: 'If true  - adds a signature field to the footer',
              type: 'boolean',
              default: false
            })
          }
        })
      }
    })
  }
}

const balanceReceipt = {
  type: 'object',
  description: 'Defines receipt printing for balance type transactions, e.g. balance, opening protocol',
  additionalProperties: false,
  properties: {
    print_cashier_policy: oneOf({
      description: 'Defines if and how the cashier will be printed on the receipt.',
      type: 'string',
      enum: [
        'number',
        'name', // legacy, will indicate full name printing
        'none',
        'first_name', // first name only
        'last_name' // last name only
      ]
    }),
    print_total_sales: oneOf({
      description: 'Defines if the total number of sales will be printed.',
      type: 'boolean',
      default: true
    }),
    print_tips_section: oneOf({
      description: 'Defines if the extended tips-section will be printed.',
      type: 'boolean',
      default: true
    }),
    print_cash_units_section: oneOf({
      description: 'Defines if the counted cash units will be printed.',
      type: 'boolean',
      default: true
    }),
    print_extended_stats: oneOf({
      description: 'Defines if the extended balance stats will be printed.',
      type: 'boolean',
      default: true
    }),
    print_account_names: oneOf({
      description: 'Defines if account names are printed additionally to the numbers.',
      type: 'boolean',
      default: false
    })
  }
}

const stockAdjustmentReceipt = {
  type: 'object',
  description: 'Defines receipt printing for stock adjustments',
  additionalProperties: false,
  properties: {
    print_cashier_policy: oneOf({
      description: 'Defines if and how the cashier will be printed on the receipt.',
      type: 'string',
      enum: [
        'number',
        'name', // legacy, will indicate full name printing
        'none',
        'first_name', // first name only
        'last_name' // last name only
      ]
    }),
    print_product_description: oneOf({
      description: 'Defines if the product description will be printed (e.g. just for the customer)',
      type: 'boolean',
      default: false
    }),
    print_product_group: oneOf({
      description: 'Defines if the product group will be printed (e.g. just for the merchant)',
      type: 'boolean',
      default: false
    }),
    print_product_number: oneOf({
      description: 'Defines if the product number (in case of options) will be printed (e.g. just for the merchant)',
      type: 'boolean',
      default: true
    }),
    print_product_name: oneOf({
      description: 'Defines if the product name (in case of options) will be printed (e.g. just for the merchant)',
      type: 'boolean',
      default: true
    })
  }
}

const voucherReceipt = {
  type: 'object',
  description: 'Defines receipt printing for vouchers',
  additionalProperties: false,
  properties: {
    ...commonReceipt
  }
}

module.exports = oneOf({
  type: 'object',
  additionalProperties: false,
  properties: {
    digital_receipt: oneOf({
      type: 'object',
      additionalProperties: false,
      properties: {
        enabled: {
          description: 'States if digital receipts should be used',
          type: 'boolean',
          default: false
        }
      }
    }),
    order_receipt: oneOf({
      type: 'object',
      additionalProperties: false,
      properties: {
        enabled: {
          description: 'States if order receipts should be used',
          type: 'boolean',
          default: false
        },
        maxReceiptNumber: {
          description: 'If reached - restart numbering from 1',
          type: 'integer',
          minimum: 2,
          maximum: 4096,
          default: 100
        },
        receipts: {
          description: 'Receipt configurations per printer',
          type: 'array',
          items: {
            type: 'object',
            properties: {
              tags: {
                deprecated: true,
                type: 'array',
                items: {
                  description: 'Legacy tags (metadata plain text) from cart item products that will cause assignment to this specific receipt.',
                  type: 'string',
                  example: 'food',
                  minLength: 3,
                  maxLength: 64
                }
              },
              tag_ids: {
                type: 'array',
                items: {
                  description: 'The tag resource ids which will be tested for intersection with the cart item\'s product tag ids',
                  type: 'string',
                  format: 'uuid'
                }
              },
              title: {
                description: 'Visual clue where a specific receipt should be used.',
                type: 'string',
                example: 'Kitchen',
                minLength: 3,
                maxLength: 64
              },
              coaster: {
                deprecated: true,
                description: 'If true - print the coaster(number) on the specified receipt',
                type: 'boolean',
                default: true
              },
              pager: {
                description: 'If true - print the pager(number) on the specified receipt',
                type: 'boolean',
                default: true
              },
              size_type: oneOf({
                type: 'string',
                enum: [
                  'regular',
                  'large'
                ],
                default: 'large'
              }),
              triggers: oneOf({
                type: 'object',
                additionalProperties: false,
                properties: {
                  sale: oneOf({
                    description: 'If true - print the complete set of items after a sale (filtered by tags)',
                    type: 'boolean',
                    default: false
                  }),
                  booking: oneOf({
                    description: 'How to print items (filtered by tags) after intermediate changes to the order',
                    type: 'string',
                    enum: [
                      'none',
                      'delta',
                      'additions', // in context of delta exclude negative quantities
                      'complete'
                    ],
                    default: 'delta'
                  })
                }
              })
            }
          }
        }
      }
    }),
    printing_behavior: oneOf({
      type: 'object',
      additionalProperties: false,
      properties: {
        non_certified_clause_types: oneOf({
          description: 'Defines the signing-types that trigger printing of a not-yet-certified clause',
          type: 'array',
          items: {
            type: 'string',
            enum: [
              'tse_fiskaly' // fiskaltrust and tse_epson are already certified, others are imaginable
            ]
          }
        }),
        customer_triggers: oneOf({
          type: 'object',
          description: 'States which conditions will trigger automatic printing of the customer receipt',
          additionalProperties: false,
          properties: {
            fiscal_signing: oneOf({
              description: '... if the transaction is supposed to be fiskally signed.',
              type: 'boolean',
              default: false // should be true soon
            })
          }
        }),
        pagers: oneOf({
          description: 'If a pager number is assigned - states if a pager receipt will be printed on the main printer',
          type: 'boolean',
          default: true
        }),
        merchant_main: oneOf({
          description: 'States if the main merchant receipt will be printed',
          type: 'boolean',
          default: true
        }),
        merchant_terminal: oneOf({
          description: 'States if the terminal merchant receipt will be printed',
          type: 'boolean',
          default: true
        }),
        merchant_triggers: oneOf({
          type: 'object',
          description: 'States which conditions will trigger automatic printing of the merchant receipt',
          additionalProperties: false,
          properties: {
            terminal_payments: oneOf({
              description: '... if the transaction contains payments from a terminal',
              type: 'boolean',
              default: true
            }),
            signing_failed: oneOf({
              description: '... if fiscal signing failed',
              type: 'boolean',
              default: true
            }),
            has_tips: oneOf({
              description: '... if tips were given',
              type: 'boolean',
              default: true
            }),
            on_refunds: oneOf({
              // this defines IF we print a merchant receipt, regardless the layout
              description: '... if the transaction contains refunded items',
              type: 'string',
              enum: [
                'never',
                'always',
                'payout' // the customer gets money back
              ],
              default: 'never'
            })
          }
        })
      }
    }),
    configurable_receipt: oneOf({
      type: 'object',
      additionalProperties: false,
      properties: {
        enabled: {
          description: 'States if any of the receipt settings should be used',
          type: 'boolean',
          default: true
        },
        expense: {
          description: 'Defines receipt printing for expenses and deposits',
          type: 'object',
          ...expenseReceipt
        },
        pager: {
          description: 'Defines customer receipt printing for sales',
          type: 'object',
          ...cartReceipt
        },
        customer: {
          description: 'Defines customer receipt printing for sales',
          type: 'object',
          ...cartReceipt
        },
        merchant: {
          description: 'Defines merchant receipt printing for sales',
          type: 'object',
          ...cartReceipt
        },
        preview: {
          description: 'Defines preview receipt printing for sales',
          type: 'object',
          ...cartReceipt
        },
        order: {
          description: 'Defines order receipt printing',
          type: 'object',
          ...cartReceipt
        },
        digital: {
          description: 'Defines digital receipt creation',
          type: 'object',
          ...cartReceipt
        },
        balance: {
          description: 'Defines balance receipt printing',
          type: 'object',
          ...balanceReceipt
        },
        stock_adjustment: {
          description: 'Defines stock adjustment receipt printing',
          type: 'object',
          ...stockAdjustmentReceipt
        },
        register_opening_protocol: {
          description: 'Defines register opening protocol receipt printing',
          type: 'object',
          ...balanceReceipt
        },
        cashing_up: {
          description: 'Defines cashing up receipt printing',
          type: 'object',
          ...balanceReceipt
        },
        voucher: {
          description: 'Defines voucher receipt printing',
          type: 'object',
          ...voucherReceipt
        },
        // *** deprected section ***
        print_cashier_policy: oneOf({
          description: 'Defines if and how the cashier will be printed on any receipt',
          type: 'string',
          enum: [
            'number',
            'name', // legacy, will indicate full name printing
            'none',
            'first_name', // first name only
            'last_name' // last name only
          ]
        }),
        print_salesman_policy: oneOf({
          description: 'Defines if and how the salesperson will be printed on any receipt',
          type: 'string',
          enum: [
            'number',
            'name',
            'none'
          ]
        }),
        print_salesperson_policy: oneOf({
          description: 'Defines further if the salesperson will be printed on a receipt',
          type: 'string',
          enum: [
            'not_cashier',
            'always',
            'never'
          ]
        }),
        print_product_attributes: oneOf({
          description: 'Defines the receipt-types the product attributes (in case of options) will be printed on (e.g. just for the customer)',
          type: 'array',
          items: {
            type: 'string',
            enum: [
              'merchant',
              'customer',
              'order'
            ]
          }
        }),
        print_product_description: oneOf({
          description: 'Defines the receipt-types the product description will be printed on (e.g. just for the customer)',
          type: 'array',
          items: {
            type: 'string',
            enum: [
              'merchant',
              'customer',
              'order'
            ]
          }
        }),
        print_product_group: oneOf({
          description: 'Defines the receipt-types the product group will be printed on (e.g. just for the merchant)',
          type: 'array',
          items: {
            type: 'string',
            enum: [
              'merchant',
              'customer',
              'order'
            ]
          }
        }),
        print_customer: oneOf({
          description: 'DEPRECATED: iOS pre 4.10, Defines the receipt-types the customer will be printed on (e.g. just for the merchant)',
          type: 'array',
          items: {
            type: 'string',
            enum: [
              'merchant',
              'customer',
              'order'
            ]
          }
        }),
        print_customer_name: oneOf({
          description: 'Defines the receipt-types the customer name will be printed on (e.g. just for the merchant)',
          type: 'array',
          items: {
            type: 'string',
            enum: [
              'merchant',
              'customer',
              'order'
            ]
          }
        }),
        print_customer_address: oneOf({
          description: 'Defines the receipt-types the customer address will be printed on (e.g. just for the merchant)',
          type: 'array',
          items: {
            type: 'string',
            enum: [
              'merchant',
              'customer',
              'order'
            ]
          }
        }),
        print_customer_number: oneOf({
          description: 'Defines the receipt-types the customer number will be printed on (e.g. just for the merchant)',
          type: 'array',
          items: {
            type: 'string',
            enum: [
              'merchant',
              'customer',
              'order'
            ]
          }
        }),
        print_total_sales: oneOf({
          description: 'Defines the receipt-types the total number of sales will be printed on (only makes sense for balances)',
          type: 'array',
          items: {
            type: 'string',
            enum: [
              'balance'
            ]
          }
        }),
        print_tips_section: oneOf({
          description: 'Defines the receipt-types the extended tips-section will be printed on (currently only makes sense for balances)',
          type: 'array',
          items: {
            type: 'string',
            enum: [
              'balance'
            ]
          }
        }),
        print_extended_stats: oneOf({
          description: 'Defines the receipt-types the extended balance stats will be printed on (only makes sense for balances)',
          type: 'array',
          items: {
            type: 'string',
            enum: [
              'balance'
            ]
          }
        }),
        print_total_discount: oneOf({
          description: 'Defines the receipt-types the accumulated discount will be printed on (e.g. customer, merchant)',
          type: 'array',
          items: {
            type: 'string',
            enum: [
              'merchant',
              'customer'
            ]
          }
        }),
        print_total_net: oneOf({
          description: 'Defines the receipt-types the total net will be printed on (e.g. customer, merchant)',
          type: 'array',
          items: {
            type: 'string',
            enum: [
              'merchant',
              'customer'
            ]
          }
        })
      }
    })
  }
})
