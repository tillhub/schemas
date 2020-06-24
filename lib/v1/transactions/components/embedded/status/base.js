const { oneOf } = require('../../../../../helpers/payload-or-null')

module.exports = {
  metadata: {
    ...oneOf({
      type: 'object',
      description: 'A container for storing arbitrary metadata. This might be altered by API.'
    }),
    default: null
  },
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
      type: 'object',
      description: 'The singing data that can be used to print singing results or as fiscal reference.',
      properties: {
        format: {
          type: 'string',
          enum: [
            'qr',
            'aztec',
            'code128'
          ]
        },
        data: {
          type: 'string',
          example: '{"data_for_a": "qr_code"}',
          maxLength: 16384,
          description: 'A barcade container of any type with which this transaction is associated.'
        },
        caption: {
          default: null,
          type: 'string',
          minLength: 1,
          maxLength: 128
        },
        payload: {
          description: 'The original signing response by the signing provider.',
          default: null,
          ...oneOf([
            {
              type: 'string'
            },
            {
              type: 'object'
            }
          ])
        }
      }
    })
  },
  signature_type: {
    ...oneOf({
      type: 'string',
      description: 'Any allowed singing system provider as type.',
      enum: [
        'fiskaltrust'
      ]
    })
  },
  status: {
    type: 'string',
    description: 'The current status transition of this transaction. A regular transaction will receive the status `complete` immediately. When signing is requested `complete` will only be assigned after signing.',
    enum: [
      'signing_requested',
      'complete'
    ]
  }
}
