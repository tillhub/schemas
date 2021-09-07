const base = require('./base')

module.exports = {
  $id: 'https://schemas.tillhub.com/v0/vouchers.bulk.create.schema.json',
  $schema: 'http://json-schema.org/draft-07/schema#',
  additionalProperties: false,
  type: 'array',
  items: {
    type: 'object',
    additionalProperties: false,
    required: [
      'format',
      'format_type'
    ],
    properties: {
      ...base
    }
  }
}
