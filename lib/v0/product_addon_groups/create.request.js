const base = require('./base')

module.exports = {
  $id: 'https://schemas.tillhub.com/v0/product_addon_groups.create.request.schema.json',
  $schema: 'http://json-schema.org/draft-07/schema#',
  additionalProperties: false,
  type: 'object',
  required: [
    'name'
  ],
  properties: base
}
