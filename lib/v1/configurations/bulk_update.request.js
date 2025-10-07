const jsonPatch = require('../../common/patch.request')

module.exports = {
  $id: 'https://schemas.tillhub.com/v1/configurations.bulk_update.request.schema.json',
  $schema: 'http://json-schema.org/draft-07/schema#',
  additionalProperties: false,
  type: 'object',
  required: ['configurations'],
  properties: {
    configurations: {
      type: 'array',
      minItems: 1,
      items: {
        type: 'object',
        additionalProperties: false,
        required: ['id', 'patch'],
        properties: {
          id: { type: 'string' },
          patch: jsonPatch
        }
      }
    }
  }
}
