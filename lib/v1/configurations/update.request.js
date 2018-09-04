const base = require('./base')
const id = require('./items/id')

module.exports = {
  $id: 'https://schemas.tillhub.com/v1/configurations.update.request.schema.json',
  $schema: 'http://json-schema.org/draft-07/schema#',
  additionalProperties: false,
  type: 'object',
  properties: {
    id,
    ...base
  },
  required: []
}
