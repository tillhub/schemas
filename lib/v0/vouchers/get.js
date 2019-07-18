const query = require('./query')

module.exports = {
  $id: 'https://schemas.tillhub.com/v1/vouchers.patch.schema.json',
  $schema: 'http://json-schema.org/draft-07/schema#',
  additionalProperties: true,
  type: 'object',
  properties: query,
  required: []
}
