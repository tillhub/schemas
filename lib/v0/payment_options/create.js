const base = require('./base')

module.exports.request = {
  $id: 'https://schemas.tillhub.com/v0/payment_options.create.request.schema.json',
  $schema: 'http://json-schema.org/draft-07/schema#',
  additionalProperties: false,
  required: [
    'name',
    'type',
    'currency',
    'order_index'
  ],
  properties: base,
  type: 'object'
}
