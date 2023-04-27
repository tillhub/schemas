const baseMms = require('./base-mms')

module.exports = {
  $id: 'https://schemas.tillhub.com/v1/registers.create.mms.schema.json',
  $schema: 'http://json-schema.org/draft-07/schema#',
  additionalProperties: false,
  type: 'object',
  required: ['register_id'],
  properties: { ...baseMms }
}
