const base = require('./base')
const statusCreate = require('./status/create.request')

module.exports = {
  $id: 'https://schemas.tillhub.com/v1/gastro_orders.deltas.create.request.schema.json',
  $schema: 'http://json-schema.org/draft-07/schema#',
  type: 'object',
  additionalProperties: false,
  required: [
  ],
  properties: {
    status: {
      ...statusCreate
    },
    ...base
  }
}
