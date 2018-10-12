const address = require('../../common/address')

module.exports = {
  $id: 'https://schemas.tillhub.com/v0/pdfs.templates.delivery_notes.create.schema.json',
  $schema: 'http://json-schema.org/draft-07/schema#',
  additionalProperties: false,
  type: 'object',
  required: [
    'items',
    'delivery_note'
  ],
  properties: {
    delivery_note: {
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
        custom_id: {
          type: 'string'
        },
        client_id: {
          type: 'string'
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
