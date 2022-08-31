const { anyOf, oneOf } = require('../../../helpers/payload-or-null')

module.exports = {
  user: {
    type: 'object',
    additionalProperties: false,
    properties: {
      id: oneOf({
        type: 'string',
        minLength: 5,
        maxLength: 64
      }),
      email: oneOf({
        type: 'string',
        format: 'email'
      })
    }
  },
  description: oneOf({
    type: 'string',
    minLength: 1,
    maxLength: 32
  }),
  name: anyOf({
    type: 'string'
  }),
  firstname: {
    type: 'string',
    maxLength: 32,
    minLength: 1
  },
  lastname: {
    type: 'string',
    maxLength: 32,
    minLength: 1
  },
  blocked: {
    type: 'boolean'
  },
  deleted: {
    type: 'boolean'
  },
  active: {
    type: 'boolean'
  },
  metadata: oneOf({
    type: 'object'
  }),
  role: oneOf({
    type: 'string',
    enum: [
      'admin',
      'manager',
      'serviceaccount',
      'franchisee',
      'franchise',
      'staff',
      'accountant',
      'purchaser'
    ]
  }),
  user_id: oneOf({
    type: 'string'
  }),
  configuration_id: {
    type: 'string'
  },
  groups: oneOf({
    type: 'object'
  }),
  scopes: oneOf({
    type: 'array',
    items: {
      type: 'string'
    }
  }),
  user_permission_template_id: oneOf({
    type: 'string'
  }),
  attributes: oneOf({
    type: 'array',
    items: {
      type: 'string'
    }
  }),
  parents: oneOf({
    type: 'array',
    items: {
      type: 'string'
    }
  }),
  children: oneOf({
    type: 'array',
    items: {
      type: 'string'
    }
  }),
  api_key: oneOf({
    type: 'string',
    minLength: 1,
    maxLength: 64
  }),
  key: oneOf({
    type: 'object'
  }),
  secret: oneOf({
    type: 'string',
    minLength: 5,
    maxLength: 128
  }),
  username: oneOf({
    type: 'string',
    format: 'email'
  }),
  locations: oneOf({
    type: 'array',
    items: {
      type: 'string',
      format: 'uuid'
    }
  }),
  branch_groups: oneOf({
    type: 'array',
    items: {
      type: 'string',
      format: 'uuid'
    }
  })
}
