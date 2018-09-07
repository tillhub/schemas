const base = require('./base')

module.exports.request = {
  $id: 'https://schemas.tillhub.com/v0/taxes.create.request.schema.json',
  $schema: 'http://json-schema.org/draft-07/schema#',
  additionalProperties: false,
  anyOf: [
    {
      required: [
        'name',
        'type',
        'rate'
      ]
    },
    {
      required: [
        'name',
        'type',
        'percentage'
      ]
    }
  ],
  properties: base,
  type: 'object'
}
