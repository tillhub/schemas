const base = require('./base')

module.exports.request = {
  $id: 'https://schemas.tillhub.com/v0/webhooks.update.request.schema.json',
  $schema: 'http://json-schema.org/draft-07/schema#',
  additionalProperties: false,
  type: 'object',
  required: [],
  properties: base
}
