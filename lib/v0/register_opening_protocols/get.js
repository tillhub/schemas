const defaultResponse = require('./default-response')

const latestRequest = {
  $id: 'https://schemas.tillhub.com/v0/register_opening_protocols.get.latest.request.schema.json',
  $schema: 'http://json-schema.org/draft-07/schema#',
  additionalProperties: false,
  type: 'object',
  required: [
    'register',
    'branch'
  ],
  properties: {
    register: {
      type: 'string',
      description: 'The alphanumeric uuid of the register',
      format: 'uuid'
    },
    branch: {
      type: 'string',
      description: 'The alphanumeric uuid of the register',
      format: 'uuid'
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
    'register',
    'branch',
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
