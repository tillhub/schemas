const base = require('./base')
const maps = require('./maps')

module.exports.request = {
  $id: 'https://schemas.tillhub.com/v1/templates.create.request.schema.json',
  $schema: 'http://json-schema.org/draft-07/schema#',

  oneOf: [
    {
      additionalProperties: false,
      type: 'object',
      required: [
        'type',
        'options'
      ],
      properties: {
        ...base,
        type: {
          type: 'string',
          enum: [
            'invoice_v1'
          ],
          options: {
            ...base.options,
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
      required: [
        'type',
        'options'
      ],
      properties: {
        ...base,
        type: {
          type: 'string',
          enum: [
            'delivery_note_v1'
          ],
          options: {
            ...base.options,
            map: {
              ...maps.deliveryNote
            }
          }
        }
      }
    }
  ]
}
