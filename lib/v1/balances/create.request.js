const base = require('./base')

module.exports = {
  $id: 'https://schemas.tillhub.com/v1/balances.create.request.schema.json',
  $schema: 'http://json-schema.org/draft-07/schema#',
  type: 'object',
  properties: {
    ...base
  }
}
