const base = require('./base')
const defaultResponse = require('./default-response')

module.exports.request = {
  $id: 'https://schemas.tillhub.com/v0/time_entries.create.request.schema.json',
  $schema: 'http://json-schema.org/draft-07/schema#',
  additionalProperties: false,
  type: 'object',
  required: [
    'type',
    'started_at',
    'staff'
  ],
  properties: base
}

module.exports.response = {
  $id: 'https://schemas.tillhub.com/v0/time_entries.create.response.schema.json',
  $schema: 'http://json-schema.org/draft-07/schema#',
  additionalProperties: true,
  type: 'object',
  required: [
    'id'
  ],
  properties: defaultResponse
}
