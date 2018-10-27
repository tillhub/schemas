const base = require('./base')

module.exports = {
  $id: 'https://schemas.tillhub.com/v0/vouchers.create.schema.json',
  $schema: 'http://json-schema.org/draft-07/schema#',
  additionalProperties: false,
  type: 'object',
  properties: {
    ...base
  },
  required: [
    'format',
    'format_type'
  ]
}
