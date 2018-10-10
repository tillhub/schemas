const base = require('./base')
module.exports = {
  $id: 'https://schemas.tillhub.com/v1/delivery_notes.update.request.schema.json',
  $schema: 'http://json-schema.org/draft-07/schema#',
  type: 'object',
  additionalProperties: false,
  required: [

  ],
  properties: {
    ...base
  }
}
