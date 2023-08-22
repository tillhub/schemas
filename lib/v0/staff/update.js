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

module.exports.short_code = {
  request: {
    $id: 'https://schemas.tillhub.com/v0/staff.update.short_code.request.schema.json',
    $schema: 'http://json-schema.org/draft-07/schema#',
    additionalProperties: false,
    properties: {
      new_short_code: {
        type: 'string',
        maxLength: 10,
        minLength: 1
      },
      old_short_code: {
        type: 'string',
        maxLength: 10,
        minLength: 1
      }
    },
    type: 'object',
    required: [
      'old_short_code', 'new_short_code'
    ]
  }
}
