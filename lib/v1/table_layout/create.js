const base = require('./base')
module.exports.request = {
  $id: 'https://schemas.tillhub.com/v1/table_layout.create.request.schema.json',
  $schema: 'http://json-schema.org/draft-07/schema#',
  additionalProperties: false,
  required: ['name', 'location', 'active'],
  properties: base,
  type: 'object'
}
