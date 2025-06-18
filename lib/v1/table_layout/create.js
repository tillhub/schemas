const base = require('./base')
module.exports.request = {
  $id: 'https://schemas.tillhub.com/v1/table_layout.create.request.schema.json',
  $schema: 'http://json-schema.org/draft-07/schema#',
  additionalProperties: true, // @TODO: change this to false
  required: ['name', 'location', 'active', 'layout'],
  properties: {
    ...base,
    tables_count: { // @TODO: remove this field
      type: 'number',
      default: 0
    },
  },
  type: 'object'
}
