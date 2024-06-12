const baseObject = require('../../common/base')
const commonResponse = require('../../common/response')
const base = require('./base')
const baseMms = require('./base-mms')

module.exports.mms = {
  $id: 'https://schemas.tillhub.com/v0/branches.update.mms.schema.json',
  $schema: 'http://json-schema.org/draft-07/schema#',
  additionalProperties: false,
  required: [],
  properties: baseMms,
  type: 'object'
}

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
