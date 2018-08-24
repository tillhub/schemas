const items = require('./items').create
const base = require('./base')

module.exports = {
  $id: 'https://schemas.tillhub.com/v0/deliveries.create.request.schema.json',
  $schema: 'http://json-schema.org/draft-07/schema#',
  type: 'object',
  additionalProperties: false,
  required: [
    'items'
  ],
  properties: {
    ...base,
    items
  }
}
