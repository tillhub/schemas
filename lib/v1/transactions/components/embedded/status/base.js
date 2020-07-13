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
          example: 'MEQCIAy4P9k+7x9saDO0uRZ4El8QwN+qTgYiv1DIaJIM- WRiuAiAt+saFDGjK2Yi5Cxgy7PprXQ5O0seRgx4ltdpW9REvwA==',
          maxLength: 16384,
          description: 'The actual signature from the signing provider (data for backwards compatibility)'
        },
        data_extended: {
          ...oneOf({
            type: 'string',
            example: 'V0;955002-00;Kassenbeleg-V1;Beleg^0.00_2.55_0.00_0.00_0.00^2.55:Bar; 18;112;2019-07-10T18:41:04.000Z;2019-07-10T18:41:04.000Z;ecdsa-plain- SHA256;unixTime;MEQCIAy4P9k+7x9saDO0uRZ4El8QwN+qTgYiv1DIaJIMWRiuAiAt+saFDGjK2Yi5Cxgy7PprXQ5O0seRgx4ltdpW9REvwA==;BHhWOeisRpPBTGQ1W4VUH95TXx2 GARf8e2NYZXJoInjtGqnxJ8sZ3CQpYgjI+LYEmW5A37sLWHsyU7nSJUBemyU=',
            maxLength: 16384,
            description: 'The extended signature that can be printed additionally (e.g. as QR-Code according to DSFinV- K vs. signature as string)'
          })
        },
        caption: {
          ...oneOf({
            default: null,
            type: 'string',
            description: 'Optional caption if the signature by itself will be printed as QR-Code',
            minLength: 1,
            maxLength: 128
          })
        },
        payload: {
          description: 'The original signing response by the signing provider.',
          default: null,
          ...oneOf([
            {
              type: 'string',
              description: 'The stringified version of any raw response from any signing provider.',
              example: '{"function":"FinishTransaction","output":{"logTime":"2020-07-10T23:12:21Z","signature":"HRTC0sv6HhIcMY+l8MWk9DavvF8CAHwfOaONfN5sdCvyS8zSMHXOx4829DHtTLPyOKPDe+IgT4qbbiktuj0JF9Tc4QH\\/iZ0TQSEd4rCNrPMjfOQvJpLv8ybjAy7zWs4B","signatureCounter":227},"result":"EXECUTION_OK"}'
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
              type: 'string',
              example: '{"storage":{"type":"TSE","vendor":"TSE1"},"function":"FinishTransaction","input":{"clientId":"c5a3ce2d-61a9-4c63-8d63-17d83e","processType":"Finish","processData":"QmVsZWdeMjAuMDBfMC4wMF8wLjAwXzAuMDBfMC4wMF4yMC4wMDpVbmJhcg==","transactionNumber":16,"additionalData":""},"compress":{"type":"zip_deflate","required":true}}'
            },
            {
              type: 'object'
            }
          ])
        },
        client_id: {
          ...oneOf({
            type: 'string',
            description: 'ID of the register according to the signing unit. Will deviate from the Tillhub register UUID!',
            example: '955002-00'
          })
        },
        counter: {
          ...oneOf({
            type: 'integer',
            minimum: 0,
            description: 'Internal counter of the signing unit (signature counter)',
            example: 227
          })
        },
        unit: {
          ...oneOf({
            type: 'string',
            description: 'ID of the used signing unit (e.g. Fiskaly: tss_id (UUID4), Epson: serialNumber (base64))',
            example: 'soTFFH9xiZP9JYWCPRgvpw6xhZ3ttbWDjfS4ky4AMEk='
          })
        },
        public_key: {
          ...oneOf({
            type: 'string',
            description: 'Public key of the signing unit according to BSI TR-03111 (e.g. tsePublicKey for Epson)'
          })
        },
        algorithm: {
          ...oneOf({
            type: 'string',
            description: 'The algorithm type used by the signing unit',
            example: 'ecdsa-plain-SHA256'
          })
        },
        processData: {
          ...oneOf([
            {
              type: 'string',
              example: 'Beleg^0.00_2.55_0.00_0.00_0.00^2.55:Bar',
              maxLength: 1024,
              description: 'The transaction relevant content as input for the signing algorithm'
            }
          ])
        },
        transaction_number: {
          ...oneOf([
            {
              type: 'integer',
              minimum: 0,
              description: 'The transaction number according to the signing unit, required in final input data',
              example: 16
            }
          ])
        },
        transaction_id: {
          ...oneOf([
            {
              type: 'string',
              description: 'The transaction id according to the signing unit (Fiskaly: _id)',
              example: '00000000-0000-0000-0000-000000000000'
            }
          ])
        },
        started_at: {
          ...oneOf({
            type: 'string',
            format: 'date-time',
            example: '2019-07-10T18:41:02.000Z',
            description: 'A signing system defined [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) compliant date e.g. 2018-01-29T14:55:05.000Z. This represents the time of any inital signing request (e.g. start_transaction according to DSFinV-K, Fiskaly: time_start)'
          })
        },
        error: {
          default: null,
          ...oneOf({
            type: 'string',
            description: 'Optional error reporting'
          })
        },
        error_counter: {
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
