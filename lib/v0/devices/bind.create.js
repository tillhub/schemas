
module.exports.request = {
  $id: 'https://schemas.tillhub.com/v0/devices.bind.create.request.schema.json',
  $schema: 'http://json-schema.org/draft-07/schema#',
  additionalProperties: false,
  type: 'object',
  required: [
    'token',
    'client_account'
  ],
  properties: {
    token: {
      type: 'string'
    },
    // REVIEW: this seems rather extraneous since the client account is already denoted in the route
    client_account: {
      type: 'string'
    },
    register: {
      type: 'string',
      format: 'uuid'
    }
  }
}

module.exports.response = {
  $id: 'https://schemas.tillhub.com/v0/devices.bind.create.response.schema.json',
  $schema: 'http://json-schema.org/draft-07/schema#',
  additionalProperties: true,
  type: 'object',
  required: [
    'id',
    'client_account'
  ],
  properties: {
    id: {
      type: 'string',
      format: 'uuid'
    },
    device_id: {
      type: 'string'
    },
    client_id: {
      oneOf: [
        {
          type: 'string'
        },
        {
          type: 'null'
        }
      ]
    },
    created_at: {
      type: 'string',
      format: 'date-time'
    },
    updated_at: {
      type: 'string',
      format: 'date-time'
    },
    status: {
      oneOf: [
        {
          type: 'string'
        },
        {
          type: 'null'
        }
      ]
    },
    type: {
      oneOf: [
        {
          type: 'string'
        },
        {
          type: 'null'
        }
      ]
    },
    device_configuration: {
      oneOf: [
        {
          type: 'object'
        },
        {
          type: 'null'
        }
      ]
    },
    client_account: {
      type: 'string'
    },
    register: {
      type: 'string',
      format: 'uuid'
    }
  }
}
