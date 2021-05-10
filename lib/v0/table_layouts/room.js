module.exports = {
  type: 'object',
  'additionalProperties': false,
  properties: {
    id: {
      type: 'string',
      description: 'an unique ID for this room, set by the client'
    },
    name: {
      type: 'string',
      description: 'a descriptive name for the room'
    },
    columns: {
      type: 'number',
      description: 'number of columns when displaying layout'
    },
    tables: {
      type: 'array',
      items: require('./table')
    }
  },
  required: ['id', 'name', 'tables']
}
