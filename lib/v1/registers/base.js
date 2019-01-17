module.exports = {
  name: {
    anyOf: [
      {
        type: 'string',
        maxLength: 32,
        minLength: 1
      },
      {
        type: 'null'
      }
    ]
  },
  description: {
    anyOf: [
      {
        type: 'string',
        maxLength: 128,
        minLength: 1
      },
      {
        type: 'null'
      }
    ]
  },
  shop: {
    anyOf: [
      {
        type: 'string',
        maxLength: 64,
        minLength: 1
      },
      {
        type: 'null'
      }
    ]
  },
  device_id: {
    anyOf: [
      {
        type: 'string',
        maxLength: 128,
        minLength: 1
      },
      {
        type: 'null'
      }
    ]
  },
  metadata: {
    anyOf: [
      {
        type: 'object'
      },
      {
        type: 'null'
      }
    ]
  },
  custom_ids: {
    anyOf: [
      {
        type: 'object'
      },
      {
        type: 'null'
      }
    ]
  },
  branch: {
    anyOf: [
      {
        type: 'string'
      },
      {
        type: 'null'
      }
    ]
  },
  register_number: {
    anyOf: [
      {
        type: 'number'
      },
      {
        type: 'null'
      }
    ]
  },
  active: {
    type: 'boolean'
  },
  deleted: {
    type: 'boolean'
  },
  device_configuration: {
    oneOf: [
      {
        type: 'object',
        additionalProperties: false,
        properties: {
          device_token: {
            type: 'string'
          },
          bundle_id: {
            type: 'string'
          },
          network: {
            type: 'string'
          }
        },
        required: ['device_token', 'bundle_id']
      },
      {
        type: 'null'
      }
    ]
  }
}
