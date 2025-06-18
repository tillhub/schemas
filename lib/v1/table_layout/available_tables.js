module.exports = {
  id: {
    type: 'string',
    format: 'uuid'
  },
  layoutId: {
    type: 'string',
    format: 'uuid'
  },
  sortOrder: {
    type: 'number'
  },
  name: {
    type: 'string'
  },
  parents: {
    type: 'array',
    items: {
      type: 'string',
      format: 'uuid'
    }
  },
  minPartySize: {
    type: 'number'
  },
  maxPartySize: {
    type: 'number'
  },
  isCombination: {
    type: 'boolean'
  },
  isBookableExternally: {
    type: 'boolean'
  },
  type: {
    type: 'string'
  }
}
