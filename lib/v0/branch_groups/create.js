const base = require('./base')

module.exports.request = {
  $id: 'https://schemas.tillhub.com/v0/branch_groups.create.request.schema.json',
  $schema: 'http://json-schema.org/draft-07/schema#',
  additionalProperties: false,
  required: [
    'name'
  ],
  properties: base,
  type: 'object'
}
