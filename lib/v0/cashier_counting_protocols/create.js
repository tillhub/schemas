const base = require('./base')
const defaultResponse = require('./default-response')

module.exports.request = {
  $id: 'https://schemas.tillhub.com/v0/cashier_counting_protocols.create.request.schema.json',
  $schema: 'http://json-schema.org/draft-07/schema#',
  additionalProperties: false,
  type: 'object',
  required: [
    'cash_units',
    'register_custom_id',
    'branch_custom_id',
    'counting_date',
    'counting_type'
  ],
  properties: base
}

module.exports.response = {
  $id: 'https://schemas.tillhub.com/v0/cashier_counting_protocols.create.response.schema.json',
  $schema: 'http://json-schema.org/draft-07/schema#',
  additionalProperties: true,
  type: 'object',
  required: [
    'id',
    'created_at',
    'updated_at',
    'cash_units',
    'register_custom_id',
    'branch_custom_id',
    'counting_date',
    'counting_type'
  ],
  properties: defaultResponse
}
