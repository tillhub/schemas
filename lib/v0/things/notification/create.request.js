const base = require('./base')

module.exports = {
  $id: 'https://schemas.tillhub.com/v0/things.notification.create.request.schema.json',
  $schema: 'http://json-schema.org/draft-07/schema#',
  additionalProperties: false,
  type: 'object',
  required: ['aps', 'device_configuration'],
  properties: { ...base }
}
