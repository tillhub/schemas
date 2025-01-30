module.exports.request = {
  $id: 'https://schemas.tillhub.com/v0/table_layout.duplicate.request.schema.json',
  $schema: 'http://json-schema.org/draft-07/schema#',
  additionalProperties: false,
  type: 'object',
  required: [],
  properties: {
    name: {
      type: 'string',
      minLength: 1
    },
    location: {
      type: 'string',
      format: 'uuid'
    }
  }
}
