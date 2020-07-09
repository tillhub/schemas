const base = require('./base')

module.exports.request = {
  $id: 'https://schemas.tillhub.com/v0/staff.create.request.schema.json',
  $schema: 'http://json-schema.org/draft-07/schema#',
  additionalProperties: false,
  required: ['lastname'],
  properties: base,
  type: 'object'
}
