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
  status: {
    type: 'string',
    description: 'The current signing status of this transaction. A regular transaction will receive the status `complete` immediately. When signing is requested `complete` will only be assigned after signing.',
    enum: [
      'signing_requested',
      'complete'
    ]
  },
  signature_type: {
    ...oneOf({
      type: 'string',
      description: 'Any allowed singing system provider as type.',
      enum: [
        'fiskaltrust',
        'tse_fiskaly',
        'tse_epson'
      ]
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
            'code128',
            'utf8'
          ]
        },
        data: {
          type: 'string',
          example: 'NrKeZlh4xLMFS4MtJPoDP8GXPGpOw39\\/uSWYWCYa066Md7TXAL6Op0DWiB5y+dJdR1+P\\/vvtU2yPAJz9Cr2xcXsaPEoJQHTBJrEZ+Imbd7X9FMW+p3tJUeH+JAUPoDFh',
          maxLength: 16384,
          description: 'The actual signature from the signing provider (data for backwards compatibility)'
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
              type: 'string',
              description: 'The stringified version of any raw response from any signing provider.',
              example: '"{\\"function\\":\\"FinishTransaction\\",\\"output\\":{\\"logTime\\":\\"2020-06-30T12:34:53Z\\",\\"signature\\":\\"NrKeZlh4xLMFS4MtJPoDP8GXPGpOw39/uSWYWCYa066Md7TXAL6Op0DWiB5y+dJdR1+P/vvtU2yPAJz9Cr2xcXsaPEoJQHTBJrEZ+Imbd7X9FMW+p3tJUeH+JAUPoDFh\\",\\"signatureCounter\\":110},\\"result\\":\\"EXECUTION_OK\\"}"'
            },
            {
              type: 'object'
            }
          ])
        },
        request_payload: {
          description: 'The original signing request to the signing provider.',
          default: null,
          ...oneOf([
            {
              type: 'string'
            },
            {
              type: 'object'
            }
          ])
        },
        signature_counter: {
          ...oneOf({
            type: 'integer',
            minimum: 0,
            description: 'Internal counter of the signing unit'
          })
        },
        signature_unit: {
          ...oneOf({
            type: 'string',
            description: 'ID of the used signing unit'
          })
        },
        signature_error: {
          default: null,
          ...oneOf({
            type: 'string',
            description: 'Optional error reporting'
          })
        },
        signature_error_counter: {
          ...oneOf({
            type: 'integer',
            minimum: 0,
            description: 'Internal counter of succeeding errors, must be reset on next success.'
          })
        }
      }
    })
  }
}
