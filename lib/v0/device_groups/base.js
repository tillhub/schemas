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
  devices: {
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
    description: 'Soft disable or enable this device group.',
    type: 'boolean',
    default: true
  },
  deleted: {
    description: 'Soft delete this device group.',
    type: 'boolean',
    default: false
  }
}
