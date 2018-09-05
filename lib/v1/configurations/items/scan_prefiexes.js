module.exports = {
  type: 'array',
  items: {
    type: 'object',
    properties: {
      id: {
        type: 'string',
        maxLength: 64
      },
      action: {
        type: 'string',
        maxLength: 32
      },
      prefix: {
        type: 'string',
        maxLength: 16
      },
      display_name: {
        type: 'string',
        maxLength: 64
      },
      system: {
        type: 'object'
      },
      product: {
        type: 'object'
      }
    }
  }
}
