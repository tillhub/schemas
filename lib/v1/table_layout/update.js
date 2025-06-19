const base = require('./base')

module.exports.request = {
  $id: 'https://schemas.tillhub.com/v0/table_layout.update.request.schema.json',
  $schema: 'http://json-schema.org/draft-07/schema#',
  additionalProperties: true,
  type: 'object',
  required: [],
  properties: {
    ...base,
    tables_count: { // @TODO: remove this field
      type: 'number',
      default: 0
    }
  }
}
