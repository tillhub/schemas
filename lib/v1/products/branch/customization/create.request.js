const base = require('./base')

module.exports = {
  $id: 'https://schemas.tillhub.com/v1/products.branch.customization.create.request.schema.json',
  $schema: 'http://json-schema.org/draft-07/schema#',
  additionalProperties: false,
  type: 'object',
  required: [
    'product'
  ],
  properties: base
}
