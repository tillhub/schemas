const base = require('./base')

module.exports = {
  $id: 'https://schemas.tillhub.com/v0/invoices.create.request.schema.json',
  $schema: 'http://json-schema.org/draft-07/schema#',
  type: 'object',
  additionalProperties: false,
  properties: {
    ...base
  }
}
