module.exports = {
  name: {
    type: 'string',
    description: 'addon name to search'
  },
  product: {
    type: 'string',
    description: 'product name that is related to the addon to search'
  },
  deleted: {
    type: 'string',
    enum: [
      'true',
      'false'
    ]
  },
  active: {
    type: 'string',
    enum: [
      'true',
      'false'
    ]
  }
}
