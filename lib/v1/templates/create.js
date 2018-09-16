module.exports.request = {
  $id: 'https://schemas.tillhub.com/v1/templates.put.request.schema.json',
  $schema: 'http://json-schema.org/draft-07/schema#',
  additionalProperties: false,
  type: 'object',
  required: [
    'type',
    'options'
  ],
  properties: require('./base')
}
