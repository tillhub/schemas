const { oneOf } = require('../../helpers/payload-or-null')
const address = require('../../common/address')

module.exports = {
  $id: 'https://schemas.tillhub.com/v0/pdfs.templates.transaction_receipts.create.schema.json',
  $schema: 'http://json-schema.org/draft-07/schema#',
  additionalProperties: false,
  type: 'object',
  required: [
    'items',
    'invoice'
  ],
  properties: {
    invoice: {
      additionalProperties: false,
      type: 'object',
      properties: {
        id: {
          type: 'string'
        },
        created_at: {
          additionalProperties: false,
          type: 'string',
          format: 'date-time'
        },
        cashier_staff: {
          anyOf: [
            {
              type: 'string'
            },
            {
              type: 'null'
            }
          ]
        },
        cashier_staff_number: {
          anyOf: [
            {
              type: 'string'
            },
            {
              type: 'null'
            }
          ]
        },
        salesman: {
          anyOf: [
            {
              type: 'string'
            },
            {
              type: 'null'
            }
          ]
        },
        salesman_number: {
          anyOf: [
            {
              type: 'string'
            },
            {
              type: 'null'
            }
          ]
        },
        transaction_number: {
          anyOf: [
            {
              type: 'string'
            },
            {
              type: 'number'
            },
            {
              type: 'null'
            }
          ]
        },
        branch: {
          anyOf: [
            {
              type: 'string'
            },
            {
              type: 'number'
            },
            {
              type: 'null'
            }
          ]
        },
        register: {
          anyOf: [
            {
              type: 'string'
            },
            {
              type: 'number'
            },
            {
              type: 'null'
            }
          ]
        },
        timezone: {
          description: 'IANA timezone.',
          oneOf: [
            {
              type: 'null'
            },
            {
              type: 'string'
            }
          ]
        }
      },
      required: [
        'id'
      ]
    },
    template: {
      anyOf: [
        {
          type: 'object'
        },
        {
          type: 'null'
        }
      ]
    },
    sender: {
      type: 'object',
      properties: {
        company: {
          anyOf: [
            {
              type: 'string'
            },
            {
              type: 'null'
            }
          ]
        },
        address: oneOf({
          ...address
        })
      }
    },
    recipient: {
      type: 'object',
      properties: {
        firstname: {
          oneOf: [
            {
              type: 'string',
              maxLength: 128
            },
            {
              type: 'null'
            }
          ]
        },
        lastname: {
          oneOf: [
            {
              type: 'string',
              maxLength: 128
            },
            {
              type: 'null'
            }
          ]
        },
        company: {
          anyOf: [
            {
              type: 'string'
            },
            {
              type: 'null'
            }
          ]
        },
        address: oneOf({
          ...address
        })
      }
    },
    items: {
      type: 'array',
      minItems: 1,
      items: {
        type: 'object',
        properties: {
          quantity: {
            type: 'number',
            minimum: -10000,
            maximum: 10000,
            multipleOf: 0.0001
          },
          product_name: {
            oneOf: [
              {
                type: 'string',
                maxLength: 128
              },
              {
                type: 'null'
              }
            ]
          },
          unit_price_exclude_vat: {
            type: 'number',
            description: 'Net price per quantity 1.0 without discounts',
            example: '4.99', // == 4.99 Euros
            minimum: 0,
            multipleOf: 0.01
          },
          vat_percentage: {
            type: 'number',
            description: 'Percent value of applied tax',
            example: '19.00', // == 19%
            minimum: 0,
            maximum: 100,
            multipleOf: 0.01
          },
          unit_price_include_vat: {
            type: 'number',
            description: 'Gross price per quantity 1.0 without discounts',
            example: '6.23', // == 6.23 Euros
            minimum: 0,
            multipleOf: 0.01
          },
          discount: {
            type: 'number',
            description: 'Total discount',
            example: '0.15', // == 15 cents
            multipleOf: 0.01
          },
          total_price_include_vat: {
            type: 'number',
            description: 'Total price without discounts',
            example: '27.55', // == 27.55 Euros
            minimum: 0,
            multipleOf: 0.01
          },
          currency: {
            type: 'string',
            description: 'The three letter [ISO currency](https://en.wikipedia.org/wiki/ISO_4217) of this item.',
            example: 'EUR',
            minLength: 3,
            maxLength: 3
          },
          comments: {
            oneOf: [
              {
                type: 'string'
              },
              {
                type: 'null'
              }
            ]
          },
          product_number: {
            oneOf: [
              {
                type: 'string'
              },
              {
                type: 'null'
              }
            ]
          },
          attributes: {
            oneOf: [
              {
                type: 'string'
              },
              {
                type: 'null'
              }
            ]
          }
        }
      }
    },
    summary_items: {
      type: 'array',
      minItems: 1,
      items: {
        type: 'object',
        properties: {
          name: {
            type: 'string',
            enum: [
              'net_total',
              'total',
              'total_discount',
              'VAT',
              'change_total',
              'payment'
            ]
          },
          description: {
            oneOf: [
              {
                type: 'number',
                description: 'If name == VAT percentage encodig',
                example: '19.0',
                multipleOf: 0.01
              },
              {
                type: 'string',
                description: 'If name == payment the payment method given',
                example: 'Cash'
              },
              {
                type: 'null'
              }
            ]
          },
          value: {
            type: 'number',
            description: 'Currency amount',
            example: '23.66',
            multipleOf: 0.01
          },
          currency: {
            type: 'string',
            description: 'The three letter [ISO currency](https://en.wikipedia.org/wiki/ISO_4217) of this item.',
            example: 'EUR',
            minLength: 3,
            maxLength: 3
          }
        }
      }
    }
  }
}
