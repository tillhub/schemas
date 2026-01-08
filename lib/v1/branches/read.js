const commonResponse = require('../../common/response')
const { all } = require('../../v0/branches/read')
const { resultItems } = require('./base')

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
    ...commonResponse({
      resultItems
    }, { hasCursor: true })
  }
}
