
module.exports.request = {
  $id: 'https://schemas.tillhub.com/v0/devices.verify.create.request.schema.json',
  $schema: 'http://json-schema.org/draft-07/schema#',
  additionalProperties: false,
  type: 'object',
  required: [
    'token'
  ],
  properties: {
    token: {
      type: 'string'
    }
  }
}

module.exports.response = {
  $id: 'https://schemas.tillhub.com/v0/devices.verify.create.response.schema.json',
  $schema: 'http://json-schema.org/draft-07/schema#',
  additionalProperties: true,
  type: 'object',
  required: [
    'id'
  ],
  properties: {
    id: {
      type: 'string',
      format: 'uuid'
    },
    device_id: {
      type: 'string'
    },
    is_valid: {
      type: 'boolean'
    }
  }
}
