const base = require('./base')

module.exports.request = {
  $id: 'https://schemas.tillhub.com/v0/storefronts.create.request.schema.json',
  $schema: 'http://json-schema.org/draft-07/schema#',
  additionalProperties: false,
  required: [
    'name',
    'type',
    'external_system_type'
  ],
  properties: base,
  if: { properties: { external_system_type: { enum: ['ecwid'] } } },
  then: {
    required: [
      'auth'
    ]
  },
  type: 'object'
}
