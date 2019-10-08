const { oneOf } = require('../../helpers/payload-or-null')

module.exports.request = {
  $id: 'https://schemas.tillhub.com/v0/tokens.block.request.schema.json',
  $schema: 'http://json-schema.org/draft-07/schema#',
  additionalProperties: false,
  type: 'object',
  required: [],
  properties: {
    block_reason: {
      ...oneOf({
        type: 'string'
      }),
      default: null
    },
    block_origin: {
      ...oneOf({
        type: 'object'
      }),
      default: null
    }
  }
}
