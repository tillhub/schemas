module.exports = {
  name: {
    type: 'string',
    maxLength: 64
  },
  scopes: {
    oneOf: [
      {
        type: 'array',
        items: {
          type: 'string'
        }
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
  }
}
