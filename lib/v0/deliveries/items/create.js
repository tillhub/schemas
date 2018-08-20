const base = require('./base')

module.exports = {
  tpye: 'array',
  minItems: 1,
  items: {
    ...base
  }
}
