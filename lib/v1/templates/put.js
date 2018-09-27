const base = require('./base').base
const maps = require('./maps')
const options = require('./base').options

module.exports.request = {
  $id: 'https://schemas.tillhub.com/v1/templates.put.request.schema.json',
  $schema: 'http://json-schema.org/draft-07/schema#',

  oneOf: [
    {
      additionalProperties: false,
      type: 'object',
      required: [],
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
              ...maps.invoice
            }
          }
        }
      }
    },
    {
      additionalProperties: false,
      type: 'object',
      required: [],
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
              ...maps.deliveryNote
            }
          }
        }
      }
    }
  ]
}
