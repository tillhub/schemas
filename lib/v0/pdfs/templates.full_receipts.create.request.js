const address = require('../../common/address')

module.exports = {
  $id: 'https://schemas.tillhub.com/v0/pdfs.templates.full_receipts.create.schema.json',
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
        address: {
          oneOf: [
            {
              ...address
            },
            {
              type: 'null'
            }
          ]
        }
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
        address: {
          oneOf: [
            {
              ...address
            },
            {
              type: 'null'
            }
          ]
        }
      }
    },
    items: {
      type: 'array',
      minItems: 1,
      items: {
        type: 'object',
        properties: {
          quantity: {
            type: 'number'
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
            multipleOf: 0.01
          },
          vat_percentage: {
            type: 'number',
            multipleOf: 0.01
          },
          unit_price_include_vat: {
            type: 'number',
            multipleOf: 0.01
          },
          discount: {
            type: 'number',
            multipleOf: 0.01
          },
          total_price_include_vat: {
            type: 'number',
            multipleOf: 0.01
          },
          currency: {
            type: 'string',
            description: 'The three letter [ISO currency](https://en.wikipedia.org/wiki/ISO_4217) of this item.',
            example: '',
            minLength: 3,
            maxLength: 3
          },
          comments: {
            oneOf: [
              {
                type: 'string'
              },
              {
                type: undefined
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
              'VAT'
            ]
          },
          description: {
            oneOf: [
              {
                type: 'number',
                multipleOf: 0.01
              },
              {
                type: 'null'
              }
            ]
          },
          value: {
            type: 'number',
            multipleOf: 0.01
          },
          currency: {
            type: 'string',
            description: 'The three letter [ISO currency](https://en.wikipedia.org/wiki/ISO_4217) of this item.',
            example: '',
            minLength: 3,
            maxLength: 3
          }
        }
      }
    },
    email: {
      anyOf: [
        {
          type: 'string'
        },
        {
          type: 'null'
        }
      ]
    },
    email_configuration: {
      oneOf: [
        {
          type: 'null'
        },
        {
          type: 'object'
        }
      ]
    }
  }
}
