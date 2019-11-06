const defaultResponse = require('./default-response')

const latestRequest = {
  $id: 'https://schemas.tillhub.com/v0/register_opening_protocols.get.latest.request.schema.json',
  $schema: 'http://json-schema.org/draft-07/schema#',
  additionalProperties: true,
  type: 'object',
  required: [
    'register_custom_id',
    'branch_custom_id'
  ],
  properties: {
    register_custom_id: {
      type: 'string',
      description: 'The alphanumeric uuid of the register_custom_id'
    },
    branch_custom_id: {
      type: 'string',
      description: 'The alphanumeric uuid of the branch_custom_id'
    }
  }
}

const latestResponse = {
  $id: 'https://schemas.tillhub.com/v0/register_opening_protocols.get.latest.response.schema.json',
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
    'opening_date'
  ],
  properties: defaultResponse
}

module.exports = {
  latest: {
    request: latestRequest,
    response: latestResponse
  }
}
