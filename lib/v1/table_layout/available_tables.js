module.exports = {
  id: {
    type: 'string',
    format: 'uuid'
  },
  layout_id: {
    type: 'string',
    format: 'uuid'
  },
  sort_order: {
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
  min_party_size: {
    type: 'number'
  },
  max_party_size: {
    type: 'number'
  },
  is_combination: {
    type: 'boolean'
  },
  is_bookable_externally: {
    type: 'boolean'
  },
  type: {
    type: 'string'
  }
}
