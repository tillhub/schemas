const combinationSchema = require('./combination_schema')
const layoutSchema = require('./layout_schema')
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
  layout: layoutSchema,
  combinations: combinationSchema
}
