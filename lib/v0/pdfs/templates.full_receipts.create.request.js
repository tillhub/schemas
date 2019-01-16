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
    email: {
      anyOf: [
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
