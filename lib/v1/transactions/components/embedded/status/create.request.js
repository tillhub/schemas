const base = require('./base')
const { oneOf } = require('../../../../../helpers/payload-or-null')
const signatureCreate = require('../signature/create.request')

module.exports = {
  type: 'object',
  additionalProperties: false,
  required: [],
  properties: {
    dispatched_at: {
      ...oneOf({
        type: 'string',
        format: 'date-time',
        example: '2018-11-04T23:18:43.075Z',
        description: 'The actual time a dsipatchable transaction was dispatched, e.g. an invoice has been sent and results in an oblicgation from that time on.'
      })
    },
    printed_at: {
      ...oneOf({
        type: 'string',
        format: 'date-time',
        example: '2018-11-04T23:18:43.075Z',
        description: 'The first time any document was printed (also plain text receipts - to mark subsequent prints as copy).'
      })
    },
    signed_at: {
      ...oneOf({
        type: 'string',
        format: 'date-time',
        example: '2018-01-29T14:55:05.000Z',
        description: 'A signing system defined [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) compliant date e.g. 2018-01-29T14:55:05.000Z. The date will be set after having fully signed this transaction.'
      })
    },
    signature: {
      ...oneOf({
        description: 'The core fiscal signature data.',
        ...signatureCreate
      })
    },
    ...base
  }
}
