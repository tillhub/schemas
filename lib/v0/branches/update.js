const baseObject = require('../../common/base')
const commonResponse = require('../../common/response')
const base = require('./base')

module.exports.request = {
  $id: 'https://schemas.tillhub.com/v0/branches.update.request.schema.json',
  $schema: 'http://json-schema.org/draft-07/schema#',
  additionalProperties: false,
  type: 'object',
  required: [],
  properties: base
}

module.exports.response = {
  $id: 'https://schemas.tillhub.com/v0/branches.update.response.schema.json',
  $schema: 'http://json-schema.org/draft-07/schema#',
  additionalProperties: false,
  ...commonResponse({
    resultItems: {
      type: 'object',
      additionalProperties: false,
      properties: {
        ...baseObject(),
        ...base
      }
    }
  })
}
