const base = require('./base').base
const map = require('./map')
const options = require('./base').options

module.exports.request = {
  $id: 'https://schemas.tillhub.com/v1/templates.put.request.schema.json',
  $schema: 'http://json-schema.org/draft-07/schema#',
  oneOf: [
    {
      additionalProperties: false,
      type: 'object',
      required: ['type'],
      properties: {
        ...base,
        type: {
          type: 'string',
          enum: [
            'invoice_v1'
          ]
        },
        options: {
          ...options,
          properties: {
            ...options.properties,
            map: {
              ...map
            }
          }
        }
      }
    },
    {
      additionalProperties: false,
      type: 'object',
      required: ['type'],
      properties: {
        ...base,
        type: {
          type: 'string',
          enum: [
            'delivery_note_v1'
          ]
        },
        options: {
          ...options,
          properties: {
            ...options.properties,
            map: {
              ...map
            }
          }
        }
      }
    },
    {
      additionalProperties: false,
      type: 'object',
      required: ['type'],
      properties: {
        ...base,
        type: {
          type: 'string',
          enum: [
            'full_receipt_v1'
          ]
        },
        options: {
          ...options,
          properties: {
            ...options.properties,
            map: {
              ...map
            },
            location_and_date: {
              type: 'string',
              maxLength: 32
            },
            signature: {
              type: 'string',
              maxLength: 32
            },
            amount_received: {
              type: 'string',
              maxLength: 128
            }
          }
        }
      }
    }
  ]
}
