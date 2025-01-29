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
  tables_count: {
    type: 'integer',
    minimum: 0
  },
  active: {
    type: 'boolean',
    default: true
  },
  layout: {
    type: 'object',
    additionalProperties: true,
    default: {}
  }
}
