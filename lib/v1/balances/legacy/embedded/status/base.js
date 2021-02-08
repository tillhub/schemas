const { oneOf } = require('../../../../../helpers/payload-or-null')

module.exports = {
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
        'fr_NF525'
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
          example: 'KhUt7emKGRtQkLoGuzzMZiFv2Tv8PwbivWJocDf6Z+mNGVhLz91TGt22aolKjT5e+B1A/ohzmOTyQDUy3BylL6u2fZ+lTLY2ytncY4LbjGCLOpeWzleKsrwak5oaipIeZP9qgByXdxKiax42wpp4xjhxogGEz726sr15rpMDj/1V9amH4DeI/EjLd4qLfgcEvR0wzuE78qlAvyJyzbE/zHxOMCgJfCaCsL2Y2cZm8odkq03T0Ju7uO/5lqdK4lhhBuB13DIbfFpvzL9VCXfyKQXHI30xQmbG6f+ES2Q6PhaXQbyDNo4Cy/iUQtfi1BjP85Jnf0z82U2fZyCs1oAfrw==',
          maxLength: 16384,
          description: 'The actual signature from the signing provider (data for backwards compatibility)'
        },
        qr_code_data: {
          ...oneOf({
            type: 'string',
            example: 'V0;955002-00;Kassenbeleg-V1;Beleg^0.00_2.55_0.00_0.00_0.00^2.55:Bar;18;112;2019-07-10T18:41:04.000Z;2019-07-10T18:41:04.000Z;ecdsa-plain-SHA256;unixTime;MEQCIAy4P9k+7x9saDO0uRZ4El8QwN+qTgYiv1DIaJIMWRiuAiAt+saFDGjK2Yi5Cxgy7PprXQ5O0seRgx4ltdpW9REvwA==;BHhWOeisRpPBTGQ1W4VUH95TXx2GARf8e2NYZXJoInjtGqnxJ8sZ3CQpYgjI+LYEmW5A37sLWHsyU7nSJUBemyU=',
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
              example: '108,50,Daily closing,20200616190318,123,CAISSE3,O,MQ4ZPXDmtBgaC32qumX2XEhqzHpT-XkjVhP-8PP6FgsuAh0A2zc2H4EFjaVHKzOarlBqk_C_Hz_0t01SkpL6NB"}'
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
              example: '108,50,Daily closing,20200616190318,123,CAISSE3,O,MQ4ZPXDmtBgaC32qumX2XEhqzHpT-XkjVhP-8PP6FgsuAh0A2zc2H4EFjaVHKzOarlBqk_C_Hz_0t01SkpL6NB"}'
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
            example: 'de.tillhub.tillhubstage.dev'
          })
        },
        public_key: {
          ...oneOf({
            type: 'string',
            description: 'Public key of the signing unit'
          })
        },
        algorithm: {
          ...oneOf({
            type: 'string',
            description: 'The algorithm type used by the signing unit',
            example: 'RSA2048-SHA512'
          })
        },
        process_type: {
          ...oneOf({
            type: 'string',
            description: 'A string describing the local type of the signing process',
            example: 'Kassenbeleg-V1'
          })
        },
        process_data: {
          ...oneOf([
            {
              type: 'string',
              example: '108,50,Daily closing,20200616190318,123,CAISSE3,O,',
              maxLength: 1024,
              description: 'The balance relevant content as input for the signing algorithm'
            }
          ])
        },
        transaction_number: {
          ...oneOf([
            {
              type: 'integer',
              minimum: 0,
              description: 'The balance number according to the signing unit, required in final input data',
              example: 16
            }
          ])
        },
        transaction_id: {
          ...oneOf([
            {
              type: 'string',
              description: 'The balance id according to the signing unit (Fiskaly: _id)',
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
