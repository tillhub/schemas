const base = require('./base')

module.exports.request = {
  $id: 'https://schemas.tillhub.com/v0/messages.update.request.schema.json',
  $schema: 'http://json-schema.org/draft-07/schema#',
  additionalProperties: false,
  required: [],
  properties: base,
  type: 'object'
}
