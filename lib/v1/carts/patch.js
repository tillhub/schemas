const baseObject = require('../../common/base')
const commonResponse = require('../../common/response')
const base = require('./base')
const patch = require('./items').patch

module.exports = {
  request: {
    $id: 'https://schemas.tillhub.com/v1/carts.patch.request.schema.json',
    $schema: 'http://json-schema.org/draft-07/schema#',
    type: 'object',
    additionalProperties: false,
    required: [
    ],
    properties: { ...base, items: patch }
  },
  response: {
    $id: 'https://schemas.tillhub.com/v1/carts.patch.response.schema.json',
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
