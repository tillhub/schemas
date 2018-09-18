const base = require('./base')

module.exports.request = {
  $id: 'https://schemas.tillhub.com/v1/configurations.users.create.request.schema.json',
  $schema: 'http://json-schema.org/draft-07/schema#',
  additionalProperties: false,
  properties: {
    ...base
  },
  required: [
    'user',
    'role'
  ]
}
