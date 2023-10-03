const commonResponse = require('../../common/response')
const base = require('./base')

module.exports.response = {
  response: {
    $id: 'https://schemas.tillhub.com/v0/branches.shift_plan.read.response.schema.json',
    $schema: 'http://json-schema.org/draft-07/schema#',
    additionalProperties: false,
    ...commonResponse({
      resultItems: {
        type: 'object',
        additionalProperties: false,
        properties: {
          ...base
        }
      }
    })
  }
}
