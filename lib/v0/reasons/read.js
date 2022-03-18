const baseObject = require('../../common/base')
const commonResponse = require('../../common/response')

const base = require('./base')

module.exports.all = {
  response: {
    $id: 'https://schemas.tillhub.com/v0/reasons.read.all.response.schema.json',
    $schema: 'http://json-schema.org/draft-07/schema#',
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
}

module.exports.one = {
  response: {
    $id: 'https://schemas.tillhub.com/v0/reasons.read.one.response.schema.json',
    $schema: 'http://json-schema.org/draft-07/schema#',
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
}
