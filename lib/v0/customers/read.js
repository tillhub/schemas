const baseObject = require('../../common/base')
const commonResponse = require('../../common/response')
const base = require('./base')
const baseExtended = require('./baseExt')

module.exports.all = {
  response: {
    $id: 'https://schemas.tillhub.com/v0/customers.read.all.response.schema.json',
    $schema: 'http://json-schema.org/draft-07/schema#',
    additionalProperties: false,
    ...commonResponse({
      resultItems: {
        type: 'object',
        additionalProperties: false,
        properties: {
          ...baseObject(),
          ...base,
          ...baseExtended
        }
      }
    }, { hasCursor: true })
  }
}

module.exports.one = {
  response: {
    $id: 'https://schemas.tillhub.com/v0/customers.read.one.response.schema.json',
    $schema: 'http://json-schema.org/draft-07/schema#',
    additionalProperties: false,
    ...commonResponse({
      resultItems: {
        type: 'object',
        additionalProperties: false,
        properties: {
          ...baseObject(),
          ...base,
          ...baseExtended
        }
      }
    })
  }
}
