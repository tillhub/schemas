const { oneOf } = require('../../../helpers/payload-or-null')

const commonReceipt = {
  print_branch_header: oneOf({
    description: 'Defines if the branch header will be rpinted',
    type: 'boolean',
    default: true
  }),
  print_branch_footer: oneOf({
    description: 'Defines if the branch footer will be rpinted',
    type: 'boolean',
    default: true
  }),
  print_cashier_policy: oneOf({
    description: 'Defines if and how the cashier will be printed on the receipt',
    type: 'string',
    enum: [
      'number',
      'name', // legacy, will indicate full name printing
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
        'number',
        'name'
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
    print_product_attributes: oneOf({
      description: 'Defines if the product attributes (in case of options) will be printed on (e.g. just for the customer)',
      type: 'boolean',
      default: true
    }),
    print_product_description: oneOf({
      description: 'Defines if the product description will be printed on (e.g. just for the customer)',
      type: 'boolean',
      default: true
    }),
    print_product_group: oneOf({
      description: 'Defines if the product group will be printed on (e.g. just for the merchant)',
      type: 'boolean',
      default: true
    }),
    print_customer_name: oneOf({
      description: 'Defines if the customer name will be printed on (e.g. just for the merchant)',
      type: 'boolean',
      default: true
    }),
    print_customer_address: oneOf({
      description: 'Defines if the customer address will be printed on (e.g. just for the merchant)',
      type: 'boolean',
      default: true
    }),
    print_customer_number: oneOf({
      description: 'Defines if the customer number will be printed on (e.g. just for the merchant)',
      type: 'boolean',
      default: true
    }),
    print_total_discount: oneOf({
      description: 'Defines if the accumulated discount will be printed on (e.g. customer, merchant)',
      type: 'boolean',
      default: true
    }),
    print_total_net: oneOf({
      description: 'Defines if the total net will be printed on (e.g. customer, merchant)',
      type: 'boolean',
      default: true
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
                type: 'array',
                items: {
                  description: 'Tags from cart item products that will cause assignment to this specific receipt.',
                  type: 'string',
                  example: 'food',
                  minLength: 3,
                  maxLength: 64
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
                description: 'If true - print the coaster(number) on the specified receipt',
                type: 'boolean',
                default: true
              }
            }
          }
        }
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
