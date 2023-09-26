const commonResponse = require('../../../common/response')
const base = require('./base')

module.exports.request = {
  $id: 'https://schemas.tillhub.com/v0/branches.shift_plan.update.request.schema.json',
  $schema: 'http://json-schema.org/draft-07/schema#',
  additionalProperties: false,
  type: 'object',
  properties: {
    ...base
  }
}

module.exports.response = {
  response: {
    $id: 'https://schemas.tillhub.com/v0/branches.shift_plan.update.response.schema.json',
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
