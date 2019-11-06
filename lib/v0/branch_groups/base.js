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
  color: {
    oneOf: [
      {
        type: 'string',
        maxLength: 32
      },
      {
        type: 'null'
      }
    ]
  },
  branches: {
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
    description: 'Soft disable or enabled this branch group.',
    type: 'boolean',
    default: true
  },
  deleted: {
    description: 'Soft delete this branch group.',
    type: 'boolean',
    default: false
  }
}
