const baseObject = require('../../common/base')
const base = require('./base')

module.exports.request = {
  $id: 'https://schemas.tillhub.com/v0/reasons.update.request.schema.json',
  $schema: 'http://json-schema.org/draft-07/schema#',
  additionalProperties: false,
  type: 'object',
  required: [],
  properties: base
}

module.exports.response = {
  $id: 'https://schemas.tillhub.com/v0/reasons.update.response.schema.json',
  $schema: 'http://json-schema.org/draft-07/schema#',
  additionalProperties: true,
  type: 'object',
  required: [
    'id'
  ],
  properties: {
    ...baseObject(),
    ...base
  }
}
