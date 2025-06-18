const combination_schema = require('./combination_schema')
const layout_schema = require('./layout_schema')
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
  gridColumnCount: {
    type: 'number',
  },
  active: {
    type: 'boolean',
    default: false
  },
  layout: layout_schema,
  combinations: combination_schema
}
