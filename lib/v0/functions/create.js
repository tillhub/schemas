const base = require('./base')

module.exports.request = {
  $id: 'https://schemas.tillhub.com/v0/functions.create.request.schema.json',
  $schema: 'http://json-schema.org/draft-07/schema#',
  additionalProperties: false,
  required: [
    'name',
    'type',
    'runtime'
  ],
  properties: base,
  type: 'object'
}
