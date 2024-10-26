const base = require('./base').response
const commonResponse = require('../../common/response')

module.exports.request = {
  $id: 'https://schemas.tillhub.com/v1/products.duplicate.request.schema.json',
  $schema: 'http://json-schema.org/draft-07/schema#',
  additionalProperties: false,
  type: 'object',
  required: [
    'productIds'
  ],
  properties: {
    productIds: {
      type: 'array',
      minItems: 1,
      items: {
        type: 'string',
        format: 'uuid'
      }
    }
  }
}

module.exports.response = {
  $id: 'https://schemas.tillhub.com/v1/products.duplicate.response.schema.json',
  $schema: 'http://json-schema.org/draft-07/schema#',
  ...commonResponse({
    resultItems: {
      additionalProperties: false,
      type: 'object',
      properties: base
    }
  })
}
