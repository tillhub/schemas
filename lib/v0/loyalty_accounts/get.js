const query = require('./query')

module.exports.query = {
  $id: 'https://schemas.tillhub.com/v0/loyalty_accounts.get.query.schema.json',
  $schema: 'http://json-schema.org/draft-07/schema#',
  additionalProperties: true,
  type: 'object',
  required: [],
  properties: query
}
