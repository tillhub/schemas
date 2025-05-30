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
        min_party_size: {
          type: 'number',
          minimum: 0
        },
        max_party_size: {
          type: 'number',
          minimum: 0
        },
        is_bookable_externally: {
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
      required: ['id', 'min_party_size', 'max_party_size', 'is_bookable_externally', 'tables']
    }
  }
}
