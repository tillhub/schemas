const base = require('./base')

module.exports.request = {
  $id: 'https://schemas.tillhub.com/v0/branches.create.request.schema.json',
  $schema: 'http://json-schema.org/draft-07/schema#',
  additionalProperties: false,
  properties: base,
  type: 'object',
  required: [
    'name'
  ]
}
