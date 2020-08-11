const base = require('./base')

module.exports.request = {
  $id: 'https://schemas.tillhub.com/v0/tse_states.create.request.schema.json',
  $schema: 'http://json-schema.org/draft-07/schema#',
  additionalProperties: false,
  required: [
    'raw_data'
  ],
  properties: base,
  type: 'object'
}
