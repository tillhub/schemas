const base = require('./base')

module.exports = {
  oneOf: [
    {
      tpye: 'array',
      minItems: 1,
      items: {
        ...base
      }
    },
    {
      type: null
    }
  ]
}
