const baseObject = require('../../common/base')
const commonResponse = require('../../common/response')
const base = require('./base').embedded

module.exports.all = {
  response: {
    $id: 'https://schemas.tillhub.com/v0/stocks-book.read.all.response.schema.json',
    $schema: 'http://json-schema.org/draft-07/schema#',
    additionalProperties: false,
    ...commonResponse({
      resultItems: {
        type: 'object',
        additionalProperties: false,
        properties: {
          ...baseObject({ entityName: 'stock book' }),
          ...base
        }
      }
    }, { hasCursor: true })
  }
}
