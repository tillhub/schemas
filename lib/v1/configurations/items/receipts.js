const { oneOf } = require('../../../helpers/payload-or-null')

module.exports = {
  ...oneOf({
    type: 'object',
    additionalProperties: false,
    properties: {
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
                'enum': [
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
                'enum': [
                  'number',
                  'name',
                  'none'
                ]
              })
            },
            print_product_description: {
              ...oneOf({
                description: 'Defines the receipt-types the product description will be printed on (e.g. just for the customer)',
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
            print_product_group: {
              ...oneOf({
                description: 'Defines the receipt-types the product group will be printed on (e.g. just for the merchant)',
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
            print_customer: {
              ...oneOf({
                description: 'Defines the receipt-types the customer will be printed on (e.g. just for the merchant)',
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
            print_total_discount: {
              ...oneOf({
                description: 'Defines the receipt-types the accumulated discount will be printed on (e.g. customer, merchant)',
                type: 'array',
                items: {
                  type: 'string',
                  'enum': [
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
                  'enum': [
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
