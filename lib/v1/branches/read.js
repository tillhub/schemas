const commonResponse = require('../../common/response')
const { all } = require('../../v0/branches/read')
const { mmsProperties } = require('./base')

// Create result items with MMS properties
const resultItemsWithMms = {
  ...all.response.properties.results.items,
  properties: {
    ...all.response.properties.results.items.properties,
    ...mmsProperties
  }
}

module.exports.all = {
  query: {
    ...all.query,
    properties: {
      ...all.query.properties,
      ...{
        extended: {
          description: 'Return mms branches extended information',
          example: 'true',
          type: 'string',
          enum: ['true', 'false']
        }
      }
    },
    $id: 'https://schemas.tillhub.com/v1/branches.read.all.query.schema.json'
  },
  response: {
    $id: 'https://schemas.tillhub.com/v1/branches.read.all.response.schema.json',
    $schema: 'http://json-schema.org/draft-07/schema#',
    additionalProperties: false,
    ...commonResponse({
      resultItems: resultItemsWithMms
    }, { hasCursor: true })
  }
}

module.exports.resultItemsWithMms = resultItemsWithMms
