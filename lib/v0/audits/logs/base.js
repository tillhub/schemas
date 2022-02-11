const { oneOf } = require('../../../helpers/payload-or-null')

const changeEntry = {
  type: 'object',
  additionalProperties: false,
  properties: {
    op: {
      description: 'Operation type',
      type: 'string',
      enum: [
        'add',
        'replace',
        'remove'
      ]
    },
    path: {
      description: 'Changed property path (with dot as separator)',
      type: 'string',
      example: 'images.0.url'
    },
    value: {
      description: 'Changed value',
      type: 'string',
      example: 'This is it'
    }
  }
}

module.exports = {
  type: {
    description: 'Log type (entity type and action type)',
    type: 'string',
    example: 'product.update'
  },
  old: oneOf({
    description: 'Old data',
    type: 'object',
    example: {}
  }),
  new: oneOf({
    description: 'New data',
    type: 'object',
    example: {
      id: '0f91b67b-b1eb-4aba-827a-3a83ff967c5e',
      name: 'Foo bar'
    }
  }),
  change: oneOf({
    description: 'Changes between old and new',
    type: 'array',
    items: {
      type: changeEntry
    }
  }),
  description: oneOf({
    description: 'Description',
    type: 'string',
    example: 'Login attempt from service account'
  }),
  issuer: oneOf({
    description: 'Issuer data',
    type: 'object',
    properties: {
      sub_user: {
        description: 'Sub-user (person authorized under organization account) UUID',
        type: 'string',
        format: 'uuid',
        example: '8ddb94bf-98cf-4832-9833-c118ebf04675'
      }
    }
  }),
  metadata: oneOf({
    description: 'Metadata',
    type: 'object',
    properties: {
      user_agent: {
        description: 'User-agent data',
        type: 'string',
        example: 'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/97.0.4692.99 Safari/537.36'
      }
    }
  })
}
