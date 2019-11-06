const base = require('./base')

module.exports.request = {
  $id: 'https://schemas.tillhub.com/v0/operations.create.request.schema.json',
  $schema: 'http://json-schema.org/draft-07/schema#',
  additionalProperties: false,
  required: [
    'type'
  ],
  properties: base,
  type: 'object'
}
