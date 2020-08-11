const base = require('./base')

module.exports.request = {
  $id: 'https://schemas.tillhub.com/v0/context_locations.create.request.schema.json',
  $schema: 'http://json-schema.org/draft-07/schema#',
  additionalProperties: false,
  properties: base,
  type: 'object',
  anyOf: [
    { required: ['locations'] },
    { required: ['branch_groups'] }
  ]
}
