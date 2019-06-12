const { oneOf } = require('../../helpers/payload-or-null')
const notes = require('./notes').base

module.exports.base = {
  analytics: {
    ...oneOf({
      type: 'object',
      properties: {
        summary: {
          ...oneOf({
            type: 'object'
          })
        }
      }
    })
  },
  notes: {
    ...oneOf({
      type: 'array',
      items: {
        ...notes
      }
    })
  }
}
