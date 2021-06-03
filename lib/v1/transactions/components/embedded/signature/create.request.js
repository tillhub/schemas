const { oneOf } = require('../../../../../helpers/payload-or-null')
const base = require('./base')

module.exports = {
  type: 'object',
  additionalProperties: false,
  required: [],
  properties: {
    started_at: {
      ...oneOf({
        type: 'string',
        format: 'date-time',
        example: '2019-07-10T18:41:02.000Z',
        description: 'A signing system defined [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) compliant date e.g. 2018-01-29T14:55:05.000Z. This represents the time of any inital signing request (e.g. start_transaction according to DSFinV-K, Fiskaly: time_start)'
      })
    },
    ...base
  }
}
