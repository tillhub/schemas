const baseObject = require('../../common/base')
const base = require('./base')

module.exports.request = {
  $id: 'https://schemas.tillhub.com/v1/discounts.update.request.schema.json',
  $schema: 'http://json-schema.org/draft-07/schema#',
  type: 'object',
  additionalProperties: false,
  required: [

  ],
  properties: {
    ...base
  }
}

module.exports.response = {
  $id: 'https://schemas.tillhub.com/v1/discounts.create.response.schema.json',
  $schema: 'http://json-schema.org/draft-07/schema#',
  type: 'object',
  additionalProperties: false,
  properties: {
    ...baseObject,
    ...base
  }
}
