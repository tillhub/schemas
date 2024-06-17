const base = require('./base')
const defaultResponse = require('./default-response')

module.exports.request = {
  $id: 'https://schemas.tillhub.com/v1/promotions.create.request.schema.json',
  $schema: 'http://json-schema.org/draft-07/schema#',
  additionalProperties: false,
  type: 'object',
  required: [
    'name',
    'template',
    'type'
  ],
  properties: base
}

module.exports.response = {
  $id: 'https://schemas.tillhub.com/v1/promotions.create.response.schema.json',
  $schema: 'http://json-schema.org/draft-07/schema#',
  additionalProperties: true,
  type: 'object',
  required: [
    'id'
  ],
  properties: defaultResponse
}
