module.exports = {
    type: 'array',
    additionalProperties: false,
    minItems: 0,
    items: {
      additionalProperties: false,
      type: 'object',
      properties: {
        id: {
          type: 'string',
          format: 'uuid'
        },
        minPartySize: {
          type: 'number'
        },
        maxPartySize: {
          type: 'number'
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
      }
      // TODO: add these line to the schema: required: ['id', 'minPartySize', 'maxPartySize', 'isBookableExternally', 'tables']
    }
  }
