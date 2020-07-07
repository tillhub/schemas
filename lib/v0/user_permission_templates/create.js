const base = require('./base')

module.exports.request = {
  $id: 'https://schemas.tillhub.com/v0/user_permission_templates.create.request.schema.json',
  $schema: 'http://json-schema.org/draft-07/schema#',
  additionalProperties: false,
  required: [
    'name',
    'scopes'
  ],
  properties: base,
  type: 'object'
}
