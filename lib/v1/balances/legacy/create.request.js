const base = require('./base')
const statusCreate = require('../../statuses/create.request')
const { oneOf } = require('../../../helpers/payload-or-null')

module.exports = {
  $id: 'https://schemas.tillhub.com/v1/balances.legacy.create.request.schema.json',
  $schema: 'http://json-schema.org/draft-07/schema#',
  type: 'object',
  additionalProperties: false,
  required: [
    'date'
  ],
  properties: {
    ...base,
    status: oneOf({
      ...statusCreate
    })
  }
}
