const { oneOf } = require('../../../helpers/payload-or-null')

module.exports = {
  ...oneOf({
    type: 'object',
    additionalProperties: false,
    properties: {
      order_receipt: {
        ...oneOf({
          type: 'object',
          additionalProperties: false,
          properties: {
            enabled: {
              description: 'States if order recipts should be used',
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
        })
      },
      configurable_receipt: {
        ...oneOf({
          type: 'object',
          additionalProperties: false,
          properties: {
            enabled: {
              description: 'States if any of the receipt settings should be used',
              type: 'boolean',
              default: true
            },
            print_cashier_policy: {
              ...oneOf({
                description: 'Defines if and how the cashier will be printed on any receipt',
                type: 'string',
                enum: [
                  'number',
                  'name',
                  'none'
                ]
              })
            },
            print_salesman_policy: {
              ...oneOf({
                description: 'Defines if and how the salesperson will be printed on any receipt',
                type: 'string',
                enum: [
                  'number',
                  'name',
                  'none'
                ]
              })
            },
            print_salesperson_policy: {
              ...oneOf({
                description: 'Defines further if the salesperson will be printed on a receipt',
                type: 'string',
                enum: [
                  'not_cashier',
                  'always',
                  'never'
                ]
              })
            },
            print_product_attributes: {
              ...oneOf({
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
              })
            },
            print_product_description: {
              ...oneOf({
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
              })
            },
            print_product_group: {
              ...oneOf({
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
              })
            },
            print_customer: {
              ...oneOf({
                description: 'DEPRECATED: iOS pre 4.10, Defines the receipt-types the customer will be printed on (e.g. just for the merchant)',
                type: 'array',
                items: {
                  type: 'string',
                  'enum': [
                    'merchant',
                    'customer',
                    'order'
                  ]
                }
              })
            },
            print_customer_name: {
              ...oneOf({
                description: 'Defines the receipt-types the customer name will be printed on (e.g. just for the merchant)',
                type: 'array',
                items: {
                  type: 'string',
                  'enum': [
                    'merchant',
                    'customer',
                    'order'
                  ]
                }
              })
            },
            print_customer_address: {
              ...oneOf({
                description: 'Defines the receipt-types the customer address will be printed on (e.g. just for the merchant)',
                type: 'array',
                items: {
                  type: 'string',
                  'enum': [
                    'merchant',
                    'customer',
                    'order'
                  ]
                }
              })
            },
            print_customer_number: {
              ...oneOf({
                description: 'Defines the receipt-types the customer number will be printed on (e.g. just for the merchant)',
                type: 'array',
                items: {
                  type: 'string',
                  'enum': [
                    'merchant',
                    'customer',
                    'order'
                  ]
                }
              })
            },
            print_total_sales: {
              ...oneOf({
                description: 'Defines the receipt-types the total number of sales will be printed on (only makes sense for balances)',
                type: 'array',
                items: {
                  type: 'string',
                  'enum': [
                    'balance'
                  ]
                }
              })
            },
            print_extended_stats: {
              ...oneOf({
                description: 'Defines the receipt-types the extended balance stats will be printed on (only makes sense for balances)',
                type: 'array',
                items: {
                  type: 'string',
                  'enum': [
                    'balance'
                  ]
                }
              })
            },
            print_total_discount: {
              ...oneOf({
                description: 'Defines the receipt-types the accumulated discount will be printed on (e.g. customer, merchant)',
                type: 'array',
                items: {
                  type: 'string',
                  enum: [
                    'merchant',
                    'customer'
                  ]
                }
              })
            },
            print_total_net: {
              ...oneOf({
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
          }
        })
      }
    }
  })

}
