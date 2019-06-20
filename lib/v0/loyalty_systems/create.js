const base = require('./base')
const defaultResponse = require('./default-response')

module.exports.request = {
  $id: 'https://schemas.tillhub.com/v0/loyalty_systems.create.request.schema.json',
  $schema: 'http://json-schema.org/draft-07/schema#',
  additionalProperties: false,
  type: 'object',
  required: [
    'name',
    'system_vendor'
  ],
  properties: base
}

module.exports.response = {
  $id: 'https://schemas.tillhub.com/v0/loyalty_systems.create.response.schema.json',
  $schema: 'http://json-schema.org/draft-07/schema#',
  additionalProperties: true,
  type: 'object',
  required: [
    'id',
    'name',
    'system_vendor'
  ],
  properties: defaultResponse
}
