const base = require('./base')

module.exports.request = {
  $id: 'https://schemas.tillhub.com/v0/client_accounts.create.request.schema.json',
  $schema: 'http://json-schema.org/draft-07/schema#',
  additionalProperties: false,
  required: [
    'email',
    'password'
  ],
  properties: base,
  type: 'object'
}
