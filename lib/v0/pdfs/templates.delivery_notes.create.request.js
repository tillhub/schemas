const { getAddress } = require('../../common/address')
const { oneOf } = require('../../helpers/payload-or-null')

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
            getAddress(),
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
            getAddress(),
            {
              type: 'null'
            }
          ]
        },
        deliveryAddress: oneOf(getAddress())
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
