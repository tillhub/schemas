const base = require('./base')
const defaultResponse = require('./default-response')

module.exports.request = {
  $id: 'https://schemas.tillhub.com/v0/register_opening_protocols.create.request.schema.json',
  $schema: 'http://json-schema.org/draft-07/schema#',
  additionalProperties: false,
  type: 'object',
  required: [
    'cash_units',
    'register',
    'branch',
    'opening_date',
    'timezone'
  ],
  properties: base
}

module.exports.response = {
  $id: 'https://schemas.tillhub.com/v0/register_opening_protocols.create.response.schema.json',
  $schema: 'http://json-schema.org/draft-07/schema#',
  additionalProperties: true,
  type: 'object',
  required: [
    'id',
    'created_at',
    'updated_at',
    'cash_units',
    'register',
    'branch',
    'opening_date',
    'timezone'
  ],
  properties: defaultResponse
}
