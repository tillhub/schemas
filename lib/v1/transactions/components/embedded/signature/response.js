const base = require('./base')
const { oneOf } = require('../../../../../helpers/payload-or-null')
const dateObject = require('../../../../../common/date_object')

module.exports = {
  type: 'object',
  additionalProperties: false,
  required: [],
  properties: {
    id: {
      type: 'string',
      format: 'uuid',
      description: 'The item resource reference ID.'
    },
    created_at: {
      description: 'The server creation time of this signature.',
      ...dateObject
    },
    updated_at: {
      description: 'The server update time of this signature.',
      ...dateObject
    },
    started_at: {
      ...oneOf({
        description: 'The start time objects of the signing process.',
        ...dateObject
      })
    },
    ...base
  }
}
