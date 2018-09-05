module.exports = {
  type: 'array',
  items: {
    additionalProperties: false,
    type: 'object',
    properties: {
      name: {
        type: 'string',
        minLength: 1,
        maxLength: 64
      },
      endpoint: {
        type: 'string',
        format: 'uri'
      },
      auth: {
        type: 'string',
        minLength: 1,
        maxLength: 512
      },
      merchant_id: {
        type: 'string',
        minLength: 1,
        maxLength: 512
      },
      models: {
        type: 'array',
        items: {
          additionalProperties: false,
          type: 'object',
          properties: {
            name: {
              type: 'string',
              'enum': [
                'transactions',
                'customers'
              ]
            },
            direction: {
              type: 'string',
              'enum': [
                'duplex',
                'read',
                'write'
              ]
            }
          }
        }
      }
    }
  }
}
