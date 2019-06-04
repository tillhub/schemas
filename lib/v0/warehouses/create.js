const base = require('./base')

module.exports.request = {
  $id: 'https://schemas.tillhub.com/v0/warehouses.create.request.schema.json',
  $schema: 'http://json-schema.org/draft-07/schema#',
  properties: base,
  additionalProperties: false,
  required: [
    'name'
  ],
  type: 'object'
}
