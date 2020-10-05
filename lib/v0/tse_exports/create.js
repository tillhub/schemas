const base = require('./base')

module.exports.request = {
  $id: 'https://schemas.tillhub.com/v0/tse_states.create.request.schema.json',
  $schema: 'http://json-schema.org/draft-07/schema#',
  additionalProperties: false,
  required: [
    'tse_serial_number',
    'balance_client_id'
  ],
  properties: base,
  type: 'object'
}
