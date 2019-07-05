const { oneOf } = require('../../helpers/payload-or-null')

const hook = {
  type: 'object',
  additionalProperties: false,
  required: [
    'endpoint',
    'method'
  ],
  properties: {
    endpoint: {
      type: 'string',
      description: 'The url of the cloud based function',
      example: 'https://us-central1-<project-id>.cloudfunctions.net/date'
    },
    method: oneOf({
      type: 'string',
      enum: [
        'GET',
        'POST',
        'PUT'
      ]
    }),
    auth: {
      type: 'object',
      additionalProperties: false,
      required: [
        'type'
      ],
      properties: {
        type: {
          type: 'string',
          enum: [
            'basic',
            'token',
            'bearer_token'
          ]
        },
        token: {
          type: 'string'
        },
        user: {
          type: 'string'
        }
      }
    }
  },
  example: {
    endpoint: 'https://us-central1-<project-id>.cloudfunctions.net/date',
    method: 'GET',
    auth: {
      type: 'basic',
      user: 'some_user_name_123123',
      token: 'abc123456789'
    }
  }
}

module.exports = {
  name: {
    type: 'string',
    example: 'Miles and More',
    minLength: 1,
    maxLength: 128
  },
  description: oneOf({
    type: 'string',
    minLength: 1,
    maxLength: 4096
  }),
  deleted: {
    type: 'boolean'
  },
  active: {
    type: 'boolean'
  },
  branches: oneOf({
    type: 'array',
    description: 'If defined then only these branches will be using this system. If not defined, there will be no restrictions on which branches can use this system.',
    minItems: 1,
    items: {
      type: 'string',
      format: 'uuid'
    }
  }),
  region: oneOf({
    type: 'string',
    description: 'The international format for regional sub category of a country e.g. a state or province.'
  }),
  country: oneOf({
    type: 'string',
    description: 'A country as ISO Alpha-2 code.',
    minLength: 2,
    maxLength: 2,
    pattern: '^[A-Z]{2}$'
  }),
  metadata: oneOf({
    type: 'object'
  }),
  hooks: oneOf({
    type: 'object',
    additionalProperties: false,
    properties: {
      get: {
        type: 'object',
        additionalProperties: false,
        properties: {
          incoming: oneOf(hook),
          outgoing: oneOf(hook)
        }
      }
    }
  })
}
