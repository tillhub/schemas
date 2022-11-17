const base = require('./base')
const features = require('./features/base')

module.exports.request = {
  $id: 'https://schemas.tillhub.com/v0/client_accounts.update.request.schema.json',
  $schema: 'http://json-schema.org/draft-07/schema#',
  additionalProperties: false,
  type: 'object',
  required: [],
  properties: base
}

module.exports.features = {
  request: {
    $id: 'https://schemas.tillhub.com/v0/client_accounts.update.features.request.schema.json',
    $schema: 'http://json-schema.org/draft-07/schema#',
    additionalProperties: true,
    required: [],
    properties: features,
    type: 'object'
  }
}
