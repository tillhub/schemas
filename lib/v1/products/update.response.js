const base = require('./base').response
const commonResponse = require('../../common/response')

module.exports = {
  $id: 'https://schemas.tillhub.com/v1/products.update.response.schema.json',
  $schema: 'http://json-schema.org/draft-07/schema#',
  ...commonResponse({ resultItems: {
    additionalProperties: false,
    type: 'object',
    properties: base
  } })
}
