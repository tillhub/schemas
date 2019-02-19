const base = require('./base')

module.exports.request = {
  $id: 'https://schemas.tillhub.com/v0/staff.update.request.schema.json',
  $schema: 'http://json-schema.org/draft-07/schema#',
  additionalProperties: false,
  required: [],
  properties: base,
  type: 'object',
  anyOf: [
    {
      required: [
        'firstname'
      ]
    },
    {
      required: [
        'lastname'
      ]
    }
  ]
}
