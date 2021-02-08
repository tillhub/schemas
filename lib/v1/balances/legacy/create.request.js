const base = require('./base')
const statusCreate = require('./embedded/status/create.request')

module.exports = {
  $id: 'https://schemas.tillhub.com/v1/balances.legacy.create.request.schema.json',
  $schema: 'http://json-schema.org/draft-07/schema#',
  type: 'object',
  additionalProperties: false,
  required: [
    'date'
  ],
  properties: {
    ...base
  },
  status: {
    ...statusCreate
  }
}
