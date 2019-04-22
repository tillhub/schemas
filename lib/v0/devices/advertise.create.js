const base = require('./base')
const defaultResponse = require('./default-response')

module.exports.request = {
  $id: 'https://schemas.tillhub.com/v0/devices.advertise.create.request.schema.json',
  $schema: 'http://json-schema.org/draft-07/schema#',
  additionalProperties: false,
  type: 'object',
  required: [
    'device_configuration',
    'device_id',
    'type'
  ],
  properties: base
}

module.exports.response = {
  $id: 'https://schemas.tillhub.com/v0/devices.advertise.create.response.schema.json',
  $schema: 'http://json-schema.org/draft-07/schema#',
  additionalProperties: true,
  type: 'object',
  required: [
    'id'
  ],
  properties: {
    ...defaultResponse,
    id: {
      type: 'string',
      format: 'uuid'
    },
    token: {
      oneOf: [
        {
          type: 'string'
        },
        {
          type: 'null'
        }
      ]
    },
    short_id: {
      oneOf: [
        {
          type: 'string'
        },
        {
          type: 'null'
        }
      ]
    },
    status: {
      type: 'string'
    },
    device: {
      oneOf: [
        {
          type: 'string',
          format: 'uuid'
        },
        {
          type: 'null'
        }
      ]
    }
  }
}
