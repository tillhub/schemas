module.exports = {
  aps: {
    type: 'object',
    additionalProperties: false,
    properties: {
      alert: {
        type: 'string'
      },
      badge: {
        type: 'integer',
        minimum: 0
      },
      sound: {
        type: 'string'
      },
      'content-available': {
        type: 'integer',
        minimum: 0,
        maximum: 1
      }
    }
  },
  data: {
    type: 'object',
    additionalProperties: false,
    properties: {
      command: {
        type: 'string',
        enum: ['send_logs', 'update_database']
      },
      ui: {
        'type': 'boolean',
        'default': true
      },
      args: {
        type: 'array',
        items: {
          type: 'string'
        }
      }
    },
    required: ['command', 'ui']
  },
  register_id: {
    type: 'string'
  },
  client_id: {
    type: 'string'
  }
}
