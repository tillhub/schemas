const user = require('./user')

module.exports = {
  $id: 'https://schemas.tillhub.com/v0/configurations.users.update.request.schema.json',
  $schema: 'http://json-schema.org/draft-07/schema#',
  additionalProperties: false,
  type: 'object',
  required: [
    'user'
  ],
  properties: user
}
