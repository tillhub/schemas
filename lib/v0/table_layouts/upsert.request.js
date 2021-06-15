const base = require('./base')

module.exports = {
  $id: 'https://schemas.tillhub.com/v0/table_layouts.upsert.request.schema.json',
  $schema: 'http://json-schema.org/draft-07/schema#',
  additionalProperties: false,
  type: 'object',
  required: [
    'register',
    'rooms'
  ],
  properties: base
}
