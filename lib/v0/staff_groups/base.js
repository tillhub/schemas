module.exports = {
  name: {
    type: 'string',
    maxLength: 64
  },
  description: {
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
  staffs: {
    oneOf: [
      {
        type: 'array',
        items: {
          type: 'string'
        }
      },
      {
        type: 'null'
      }
    ]
  },
  client_id: {
    description: 'A identifier used locally on POS for their own reference.',
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
    description: 'Soft disable or enabled this staff group.',
    type: 'boolean',
    default: true
  },
  deleted: {
    description: 'Soft delete this staff group.',
    type: 'boolean',
    default: false
  }
}
