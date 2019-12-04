const base = require('./base')

module.exports.request = {
  $id: 'https://schemas.tillhub.com/v0/policies.create.request.schema.json',
  $schema: 'http://json-schema.org/draft-07/schema#',
  additionalProperties: false,
  required: [
    'name',
    'reference_id',
    'policy'
  ],
  properties: base,
  type: 'object'
}
