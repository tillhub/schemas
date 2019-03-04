const base = require('./base')

module.exports.request = {
  $id: 'https://schemas.tillhub.com/v0/messages.create.request.schema.json',
  $schema: 'http://json-schema.org/draft-07/schema#',
  additionalProperties: false,
  required: ['message'],
  properties: base,
  type: 'object'
}
