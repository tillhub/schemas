---
to: "lib/<%= version %>/<%= name %>/update.js"
---
const base = require('./base')

module.exports.request = {
  $id: 'https://schemas.tillhub.com/<%= version %>/<%= name %>.update.request.schema.json',
  $schema: 'http://json-schema.org/draft-07/schema#',
  additionalProperties: false,
  type: 'object',
  required: [],
  properties: base
}
