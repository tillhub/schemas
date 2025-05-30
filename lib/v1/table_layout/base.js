module.exports = {
  id: {
    type: 'string',
    format: 'uuid'
  },
  name: {
    type: 'string',
    minLength: 1
  },
  location: {
    type: 'string',
    format: 'uuid'
  },
  active: {
    type: 'boolean',
    default: true
  },
  layout: {
    type: 'object',
    additionalProperties: true,
    default: {}
  },
  combinations: {
    type: 'array',
    minItems: 0,
    items: {
      type: 'object',
      properties: {
        id: {
          type: 'string',
          format: 'uuid'
        },
        minPartySize: {
          type: 'number',
          minimum: 0
        },
        maxPartySize: {
          type: 'number',
          minimum: 0
        },
        isBookableExternally: {
          type: 'boolean'
        },
        tables: {
          type: 'array',
          items: {
            type: 'string',
            format: 'uuid'
          }
        }
      },
      required: ['id', 'minPartySize', 'maxPartySize', 'isBookableExternally', 'tables']
    }
  }
}
