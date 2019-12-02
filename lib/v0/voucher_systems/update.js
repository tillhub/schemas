const base = require('./base')
const defaultResponse = require('./default-response')
const templateBase = require('./items/template')

module.exports.request = {
  $id: 'https://schemas.tillhub.com/v0/voucher_systems.update.request.schema.json',
  $schema: 'http://json-schema.org/draft-07/schema#',
  additionalProperties: false,
  type: 'object',
  required: [],
  properties: base
}

module.exports.response = {
  $id: 'https://schemas.tillhub.com/v0/voucher_systems.update.response.schema.json',
  $schema: 'http://json-schema.org/draft-07/schema#',
  additionalProperties: true,
  type: 'object',
  required: [
    'id'
  ],
  properties: defaultResponse
}

module.exports.templates = {
  request: {
    $id: 'https://schemas.tillhub.com/v0/voucher_systems.update.templates.request.schema.json',
    $schema: 'http://json-schema.org/draft-07/schema#',
    ...templateBase,
    required: []
  },
  response: {
    $id: 'https://schemas.tillhub.com/v0/voucher_systems.update.templates.response.schema.json',
    $schema: 'http://json-schema.org/draft-07/schema#',
    ...templateBase,
    required: [
      ...templateBase.required,
      'id'
    ]
  }
}
