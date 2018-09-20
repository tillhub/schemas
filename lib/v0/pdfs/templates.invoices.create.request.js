const address = require('../../common/address')

module.exports = {
  $id: 'https://schemas.tillhub.com/v0/pdfs.templates.deliveries.create.schema.json',
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
        customer_number: {
          anyOf: [
            {
              type: 'string'
            },
            {
              type: 'null'
            }
          ]
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
        }
      },
      required: [
        'id'
      ]
    },
    img_url: {
      anyOf: [
        {
          type: 'string'
        },
        {
          type: 'null'
        }
      ]
    },
    logo: {
      anyOf: [
        {
          type: 'string',
          format: 'url'
        },
        {
          type: 'null'
        }
      ]
    },
    logo_recipient: {
      anyOf: [
        {
          type: 'string',
          format: 'url'
        },
        {
          type: 'null'
        }
      ]
    },
    sender: {
      oneOf: [
        {
          ...address
        },
        {
          type: 'null'
        }
      ]
    },
    attention: {
      anyOf: [
        {
          type: 'string'
        },
        {
          type: 'null'
        }
      ]
    },
    addressee: {
      type: 'object',
      additionalProperties: false,
      properties: {
        firstname: {
          oneOf: [
            {
              type: 'string',
              minLength: 1
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
              minLength: 1
            },
            {
              type: 'null'
            }
          ]
        }
      }
    },
    recipient: {
      oneOf: [
        {
          ...address
        },
        {
          type: 'null'
        }
      ]
    },
    contact: {
      oneOf: [
        {
          type: 'object',
          additionalProperties: false,
          properties: {
            phone: {
              type: 'string',
              minLength: 1,
              maxLength: 128
            }
          }
        },
        {
          type: 'null'
        }
      ]
    },
    items: {
      type: 'array',
      minItems: 1,
      items: {
        type: 'object'
      }
    },
    summary_items: {
      type: 'array',
      minItems: 1,
      items: {
        type: 'object'
      }
    },
    text: {
      oneOf: [
        {
          type: 'string',
          minLength: 1
        },
        {
          type: 'null'
        }
      ]
    },
    from: {
      oneOf: [
        {
          type: 'string',
          format: 'uuid'
        },
        {
          type: 'null'
        }
      ]
    },
    to: {
      oneOf: [
        {
          type: 'string',
          format: 'uuid'
        },
        {
          type: 'null'
        }
      ]
    }
  }
}
