module.exports = {
  name: {
    type: 'string',
    maxLength: 64
  },
  scopes: {
    anyOf: [
      {
        type: 'array',
        uniqueItems: true,
        items: {
          // Should specify the current permissions for user for validation
          type: 'string'
        }
      },
      {
        type: 'null'
      }
    ]
  },
  client_id: {
    description: 'An identifier used locally on POS for their own reference.',
    oneOf: [
      {
        type: 'string',
        maxLength: 128
      },
      {
        type: 'null'
      }
    ]
  },
  active: {
    description: 'Soft disable or enable this user_permission_templates.',
    type: 'boolean',
    default: true
  },
  deleted: {
    description: 'Soft delete this user_permission_templates.',
    type: 'boolean',
    default: false
  }
}
