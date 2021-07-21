const base = require('./base')

module.exports = {
  $id: 'https://schemas.tillhub.com/v0/products.update.request.schema.json',
  $schema: 'http://json-schema.org/draft-07/schema#',
  additionalProperties: true,
  type: 'object',
  required: [
    'id'
  ],
  properties: base
}
