module.exports = {
  type: 'object',
  additionalProperties: false,
  properties: {
    enabled: {
      type: 'boolean',
      default: false
    },
    dashboards: {
      type: 'array',
      items: {
        type: 'object',
        additionalProperties: false,
        properties: {
          enabled: {
            type: 'boolean',
            default: false
          },
          name: {
            type: 'string',
            minLength: 1,
            maxLength: 64
          },
          url: {
            type: 'string',
            format: 'uri'
          }
        }
      }
    }
  }
}
