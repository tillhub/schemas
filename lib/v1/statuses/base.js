const { oneOf } = require('../../helpers/payload-or-null')

module.exports = {
  metadata: oneOf({
    type: 'object',
    description: 'A container for storing arbitrary metadata. This might be altered by API.'
  }),
  dispatched_at: oneOf({
    type: 'string',
    format: 'date-time',
    example: '2018-11-04T23:18:43.075Z',
    description: 'The actual time a dsipatchable transaction was dispatched, e.g. an invoice has been sent and results in an oblicgation from that time on.'
  }),
  printed_at: oneOf({
    type: 'string',
    format: 'date-time',
    example: '2018-11-04T23:18:43.075Z',
    description: 'The first time any document was printed (also plain text receipts - to mark subsequent prints as copy).'
  }),
  status: { // yes, it is status.status
    type: 'string',
    enum: [
      'signing_requested',
      'complete'
    ],
    description: 'The current signing status of this transaction. A regular transaction will receive the status `complete` immediately. When signing is requested `complete` will only be assigned after signing.'
  },
  signed_at: oneOf({
    type: 'string',
    format: 'date-time',
    example: '2018-01-29T14:55:05.000Z',
    description: 'The time when the signing process was completed (ISO_8601).'
  }),
  signature_type: {
    type: 'string',
    enum: [
      'fiskaltrust',
      'tse_fiskaly',
      'at_fiskaly',
      'tse_epson',
      'fr_NF525'
    ],
    description: 'Any allowed singing system provider as type.'
  },
  source_type: {
    type: 'string',
    enum: [
      'transaction', // sale
      'balance', // daily closing
      'gastro_order_delta' // gastro order deltas
    ],
    description: 'The type of the source that was signed.'
  },
  canceled_at: oneOf({
    type: 'string',
    format: 'date-time',
    example: '2018-01-29T14:55:05.000Z',
    description: 'The time when the tranasaction was canceled (ISO_8601).'
  }),
  refunded_at: oneOf({
    type: 'string',
    format: 'date-time',
    example: '2018-01-29T14:55:05.000Z',
    description: 'The time when the tranasaction was refunded (ISO_8601).'
  })
}
