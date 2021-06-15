const base = require('./base')
const { oneOf } = require('../../helpers/payload-or-null')
const signatureCreate = require('./signatures/create.request')

module.exports = {
  type: 'object',
  additionalProperties: false,
  required: [],
  properties: {
    signed_at: {
      ...oneOf({
        type: 'string',
        format: 'date-time',
        example: '2018-01-29T14:55:05.000Z',
        description: 'A signing system defined [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) compliant date e.g. 2018-01-29T14:55:05.000Z. The date will be set after having fully signed this transaction.'
      })
    },
    signature: oneOf({
      description: 'The core fiscal signature data.',
      ...signatureCreate
    }),
    ...base
  }
}
