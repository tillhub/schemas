const base = require('./base')
const commonResponse = require('../../common/response')

module.exports = {
  $id: 'https://schemas.tillhub.com/v0/product_addon_groups.create.response.schema.json',
  $schema: 'http://json-schema.org/draft-07/schema#',
  ...commonResponse({
    resultItems: {
      additionalProperties: true,
      type: 'object',
      properties: base
    }
  })
}
