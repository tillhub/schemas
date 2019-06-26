const { oneOf } = require('../../helpers/payload-or-null')
const notes = require('./notes').base

module.exports.base = {
  analytics: require('./properties/anaylytics'),
  notes: {
    ...oneOf({
      type: 'array',
      items: {
        ...notes
      }
    })
  }
}
