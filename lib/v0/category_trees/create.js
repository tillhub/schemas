const base = require('./base')
const { children } = require('./definitions')

module.exports.request = {
  ...children,
  $id: 'https://schemas.tillhub.com/v0/category_trees.create.request.schema.json',
  $schema: 'http://json-schema.org/draft-07/schema#',
  additionalProperties: false,
  required: [
    'name'
  ],
  properties: base,
  type: 'object'
}
