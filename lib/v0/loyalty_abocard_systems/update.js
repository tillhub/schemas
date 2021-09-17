const { request, response, required } = require('./base')
const commonResponse = require('../../common/response')

module.exports.request = {
  $id: 'https://schemas.tillhub.com/v0/loyalty_abocard_systems.update.request.schema.json',
  $schema: 'http://json-schema.org/draft-07/schema#',
  additionalProperties: false,
  type: 'object',
  required,
  properties: request
}

module.exports.response = {
  $id: 'https://schemas.tillhub.com/v0/loyalty_abocard_systems.update.response.schema.json',
  $schema: 'http://json-schema.org/draft-07/schema#',
  ...commonResponse({ resultItems: {
    type: 'object',
    properties: response
  } })
}
