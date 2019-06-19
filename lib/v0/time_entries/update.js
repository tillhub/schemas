const base = require('./base')

module.exports.request = {
  $id: 'https://schemas.tillhub.com/v0/time_entries.update.request.schema.json',
  $schema: 'http://json-schema.org/draft-07/schema#',
  properties: base,
  type: 'object',
  required: [
    'staff',
    'type'
  ]
}
