const base = require('./base')

module.exports.request = {
  $id: 'https://schemas.tillhub.com/v0/custom_hooks.create.request.schema.json',
  $schema: 'http://json-schema.org/draft-07/schema#',
  additionalProperties: false,
  type: 'object',
  required: [
    'event',
    'context',
    'hook',
    'auth'
  ],
  properties: base
}
