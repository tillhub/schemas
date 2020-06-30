const base = require('./base')

module.exports.request = {
  $id: 'https://schemas.tillhub.com/v0/discounts.create.request.schema.json',
  $schema: 'http://json-schema.org/draft-07/schema#',
  additionalProperties: false,
  required: [
    'group',
    'type'
  ],
  oneOf: [
    {
      required: ['rate']
    },
    {
      required: ['value']
    }
  ],
  properties: base,
  type: 'object'
}
