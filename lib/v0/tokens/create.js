const base = require('./base')

module.exports.request = {
  $id: 'https://schemas.tillhub.com/v0/tokens.create.request.schema.json',
  $schema: 'http://json-schema.org/draft-07/schema#',
  additionalProperties: false,
  required: [
    'token_id',
    'issued_at',
    'valid_until'
  ],
  properties: base,
  type: 'object'
}
