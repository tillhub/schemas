const base = require('./base')
const commonResponse = require('../../common/response')

module.exports = {
  $id: 'https://schemas.tillhub.com/v0/product_addons.create.response.schema.json',
  $schema: 'http://json-schema.org/draft-07/schema#',
  ...commonResponse({ resultItems: {
    additionalProperties: false,
    type: 'object',
    properties: base
  } })
}
