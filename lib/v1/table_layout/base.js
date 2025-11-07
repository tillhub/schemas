const combinationSchema = require('./combination_schema')
const layoutSchema = require('./layout_schema')
module.exports = {
  id: {
    type: 'string',
    format: 'uuid'
  },
  name: {
    type: 'string'
  },
  location: {
    type: 'string',
    format: 'uuid'
  },
  active: {
    type: 'boolean',
    default: false
  },
  layout: layoutSchema,
  combinations: {
    ...combinationSchema,
    default: []
  }
}
