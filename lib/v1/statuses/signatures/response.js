const base = require('./base')
const { oneOf } = require('../../../helpers/payload-or-null')
const dateObject = require('../../../common/date_object')

module.exports = {
  type: 'object',
  additionalProperties: false,
  required: [],
  properties: {
    started_at: oneOf({
      description: 'The start time object of the signing process.',
      ...dateObject
    }),
    ...base
  }
}
