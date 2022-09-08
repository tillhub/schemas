const user = require('./user')
const franchiseScopes = require('./franchise_scopes')
const franchiseeScopes = require('./franchisee_scopes')

module.exports = {
  $id: 'https://schemas.tillhub.com/v0/configurations.users.create.request.schema.json',
  $schema: 'http://json-schema.org/draft-07/schema#',
  additionalProperties: false,
  type: 'object',
  required: [ 'user', 'role' ],
  properties: user,
  allOf: [
    {
      if: {
        properties: { role: { const: 'franchisee' } }
      },
      then: {
        properties: franchiseeScopes
      }
    },
    {
      if: {
        properties: { role: { const: 'franchise' } }
      },
      then: {
        properties: franchiseScopes
      }
    }
  ]
}
