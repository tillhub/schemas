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
          incoming: oneOf({
            ...hook,
            description: 'This hook is intended for the case when a voucher is queried by voucher-code in the endpoint "/api/v0/vouchers/:voucher_id". This hook allows to modify the code before the query continues and it receives the code (string) as a request body. E.g. if the scanned voucher-code needs to be shortened to the first eight characters, this is where it happens. The endpoint expects from the hook response a json of the format { code: "some string" }'
          }),
          outgoing: oneOf({
            ...hook,
            description: 'This hook is used in the endpoint "/api/v0/vouchers/:voucher_id" and is applied after the results returned from the database query and before they are returned to the caller. The hook receives the voucher in the request body. Whatever response from the hook will be passed on to caller.'
          })
        }
      }
    }
  })
}
