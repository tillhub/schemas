const { oneOf } = require('../../../helpers/payload-or-null')

module.exports = {
  metadata: oneOf({
    type: 'object'
  }),
  roles: oneOf({
    type: 'object'
  }),
  email: {
    type: 'string'
  },
  firstname: oneOf({
    type: 'string',
    maxLength: 32,
    minLength: 3
  }),
  lastname: oneOf({
    type: 'string',
    maxLength: 32,
    minLength: 3
  }),
  display_name: oneOf({
    type: 'string',
    maxLength: 32,
    minLength: 3
  }),
  password_hash: oneOf({
    type: 'string',
    maxLength: 32,
    minLength: 3
  }),
  internal: {
    type: 'boolean',
    default: true
  },
  whitelabels: {
    type: 'array',
    items: {
      type: 'string'
    }
  },
  active: {
    description: 'Soft disable or enable this user.',
    type: 'boolean',
    default: true
  },
  deleted: {
    description: 'Soft delete this user.',
    type: 'boolean',
    default: false
  }
}
