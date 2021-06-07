const { oneOf } = require('../../../../helpers/payload-or-null')

module.exports = {
  signed_at: {
    ...oneOf({
      type: 'string',
      format: 'date-time',
      example: '2018-01-29T14:55:05.000Z',
      description: 'A signing system defined [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) compliant date e.g. 2018-01-29T14:55:05.000Z. The date will be set after having fully signed this delta.'
    })
  },
  signature_type: {
    type: 'string',
    description: 'Any allowed singing system provider as type.',
    enum: [
      'fiskaltrust',
      'tse_fiskaly', // main client
      'tse_epson',
      'fr_NF525'
    ]
  },
  signature: {
    type: 'object',
    description: 'The data that can be used to verify fiscal signing.',
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
        example: 'MEQCIAy4P9k+7x9saDO0uRZ4El8QwN+qTgYiv1DIaJIMWRiuAiAt+saFDGjK2Yi5Cxgy7PprXQ5O0seRgx4ltdpW9REvwA==',
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
            description: 'The stringified version of any raw response from any signing provider, e.g. a base64-string for Fiskaly.',
            example: '{"number":0,"time_start":1577833200,"time_end":1577833200,"client_serial_number":"string","certificate_serial":"string","state":"ACTIVE","client_id":"00000000-0000-0000-0000-000000000000","schema":{"standard_v1":{"receipt":{"receipt_type":"RECEIPT","amounts_per_vat_rate":[{"vat_rate":"NORMAL","amount":"20.25"}],"amounts_per_payment_type":[{"payment_type":"CASH","amount":"0.12","currency_code":"USD"}]},"order":{"line_items":[{"quantity":"10.982374598","text":"Eisbecher “Himbeere“","price_per_unit":"20.25"}]},"other":{}},"raw":{"process_type":"Kassenbeleg-V1","process_data":"dGVzdA=="},"aeao":{},"dfka":{}},"qr_code_data":"V0;955002-00;Kassenbeleg-V1;Beleg^0.00_2.55_0.00_0.00_0.00^2.55:Bar;18;112;2019-07-10T18:41:04.000Z;2019-07-10T18:41:04.000Z;ecdsa-plain-SHA256;unixTime;MEQCIAy4P9k+7x9saDO0uRZ4El8QwN+qTgYiv1DIaJIMWRiuAiAt+saFDGjK2Yi5Cxgy7PprXQ5O0seRgx4ltdpW9REvwA==;BHhWOeisRpPBTGQ1W4VUH95TXx2GARf8e2NYZXJoInjtGqnxJ8sZ3CQpYgjI+LYEmW5A37sLWHsyU7nSJUBemyU=","revision":1,"latest_revision":1,"log":{"operation":"Start","timestamp":1577833200,"timestamp_format":"utcTimeWithSeconds"},"signature":{"value":"string","algorithm":"ecdsa-plain-SHA256","counter":0,"public_key":"string"},"tss_id":"00000000-0000-0000-0000-000000000000","metadata":{"my_property_1":"1234","my_property_2":"https://my-internal-system/path/to/resource/1234"},"_type":"TRANSACTION","_id":"00000000-0000-0000-0000-000000000000","_links":[{"rel":"string","href":"http://example.com","title":"string","description":"string","method":"GET"}],"_env":"TEST","_version":"1.1.1"}'
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
            example: '{"state":"FINISHED","client_id":"550e8400-e29b-11d4-a716-446655440000","schema":{"standard_v1":{"order":{"line_items":[{"quantity":"10.982374598","text":"Eisbecher “Himbeere“","price_per_unit":"20.25"}]}}}}'
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
          description: 'ID of the used signing unit (e.g. Fiskaly: serialNumber)',
          example: 'soTFFH9xiZP9JYWCPRgvpw6xhZ3ttbWDjfS4ky4AMEk='
        })
      },
      public_key: {
        ...oneOf({
          type: 'string',
          description: 'Public key of the signing unit according to BSI TR-03111'
        })
      },
      algorithm: {
        ...oneOf({
          type: 'string',
          description: 'The algorithm type used by the signing unit',
          example: 'ecdsa-plain-SHA256'
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
            example: '2;”Eisbecher ““Himbeere“““;3.99\r1;”Eiskaffee“;2.99',
            maxLength: 1024,
            description: 'The delta relevant content as input for the signing algorithm'
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
  }
}
