module.exports = {
  type: 'object',
  'additionalProperties': false,
  properties: {
    id: {
      type: 'string',
      description: 'unique ID for this table, set by the client'
    },
    index: {
      type: 'number',
      description: 'position of the table'
    },
    name: {
      type: 'string',
      description: 'a descriptive name for the table'
    }
  },
  required: ['id', 'index', 'name']
}
