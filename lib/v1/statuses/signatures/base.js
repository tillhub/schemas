const { oneOf } = require('../../../helpers/payload-or-null')

module.exports = {
  data: oneOf({
    type: 'string',
    maxLength: 16384,
    examples: [
      'MEQCIAy4P9k+7x9saDO0uRZ4El8QwN+qTgYiv1DIaJIMWRiuAiAt+saFDGjK2Yi5Cxgy7PprXQ5O0seRgx4ltdpW9REvwA==',
      'AUUwulkISDlfOMNro8Lx4aepbWinXgiHwGt9/xfb+WmyfAXnzAeBQmCfsRPheW/LKDlWVQWFUdvl7mXsh/vGx1vSLRiq6jn9qmL1fSGFRCrIos1U7X6dWxCr3VVZFXMILey6iuNw9i7HwNFSpyrpVOXFSDCdmKtYDfMMWD0JDAsKSFUTEbCay2yCtDEIOt/sELi6uiRwUoifztlTIt7wDNPdFrGxgJF17d2AJ4ah5V8kGTAzFygjGT8gCfTUbumKtGAJsvou+NqHAp4bb9K8+fTVG5rxw/OWux5GXmbtcxZQ3RX5IGurcsUv/kXFK+uGj7uUsCyEfq71uCxVs04Kig=='
    ],
    description: 'The actual signature from the signing provider (data for backwards compatibility)'
  }),
  caption: oneOf({
    type: 'string',
    minLength: 1,
    maxLength: 128,
    example: 'NF525 Vente',
    description: 'Optional caption if the signature by itself will be printed as QR-Code'
  }),
  qr_code_data: oneOf({
    type: 'string',
    example: 'V0;955002-00;Kassenbeleg-V1;Beleg^0.00_2.55_0.00_0.00_0.00^2.55:Bar;18;112;2019-07-10T18:41:04.000Z;2019-07-10T18:41:04.000Z;ecdsa-plain-SHA256;unixTime;MEQCIAy4P9k+7x9saDO0uRZ4El8QwN+qTgYiv1DIaJIMWRiuAiAt+saFDGjK2Yi5Cxgy7PprXQ5O0seRgx4ltdpW9REvwA==;BHhWOeisRpPBTGQ1W4VUH95TXx2GARf8e2NYZXJoInjtGqnxJ8sZ3CQpYgjI+LYEmW5A37sLWHsyU7nSJUBemyU=',
    maxLength: 16384,
    description: 'The extended signature that can be printed additionally (e.g. as QR-Code according to DSFinV- K vs. signature as string)'
  }),
  format: oneOf({
    type: 'string',
    enum: [
      'qr',
      'aztec',
      'code128',
      'utf8'
    ],
    description: 'The formatting info for potential qr-code-data'
  }),
  payload: {
    description: 'The original signing response by the signing provider.',
    default: null,
    ...oneOf([
      {
        type: 'string',
        examples: [
          '{"number":0,"time_start":1577833200,"time_end":1577833200,"client_serial_number":"string","certificate_serial":"string","state":"ACTIVE","client_id":"00000000-0000-0000-0000-000000000000","schema":{"standard_v1":{"receipt":{"receipt_type":"RECEIPT","amounts_per_vat_rate":[{"vat_rate":"NORMAL","amount":"20.25"}],"amounts_per_payment_type":[{"payment_type":"CASH","amount":"0.12","currency_code":"USD"}]},"order":{"line_items":[{"quantity":"10.982374598","text":"Eisbecher “Himbeere“","price_per_unit":"20.25"}]},"other":{}},"raw":{"process_type":"Kassenbeleg-V1","process_data":"dGVzdA=="},"aeao":{},"dfka":{}},"qr_code_data":"V0;955002-00;Kassenbeleg-V1;Beleg^0.00_2.55_0.00_0.00_0.00^2.55:Bar;18;112;2019-07-10T18:41:04.000Z;2019-07-10T18:41:04.000Z;ecdsa-plain-SHA256;unixTime;MEQCIAy4P9k+7x9saDO0uRZ4El8QwN+qTgYiv1DIaJIMWRiuAiAt+saFDGjK2Yi5Cxgy7PprXQ5O0seRgx4ltdpW9REvwA==;BHhWOeisRpPBTGQ1W4VUH95TXx2GARf8e2NYZXJoInjtGqnxJ8sZ3CQpYgjI+LYEmW5A37sLWHsyU7nSJUBemyU=","revision":1,"latest_revision":1,"log":{"operation":"Start","timestamp":1577833200,"timestamp_format":"utcTimeWithSeconds"},"signature":{"value":"string","algorithm":"ecdsa-plain-SHA256","counter":0,"public_key":"string"},"tss_id":"00000000-0000-0000-0000-000000000000","metadata":{"my_property_1":"1234","my_property_2":"https://my-internal-system/path/to/resource/1234"},"_type":"TRANSACTION","_id":"00000000-0000-0000-0000-000000000000","_links":[{"rel":"string","href":"http://example.com","title":"string","description":"string","method":"GET"}],"_env":"TEST","_version":"1.1.1"}',
          'eyJudW1iZXIiOjgyLCJ0aW1lX3N0YXJ0IjoxNjE3ODA2OTE4LCJ0aW1lX2VuZCI6MTYxNzgwNjkxOCwiY2xpZW50X3NlcmlhbF9udW1iZXIiOiJFUlMgODVkZDdlYmQtZjg1MC00YzQwLWI3NWYtNGFjMTNkMDZhMGQ1IiwiY2VydGlmaWNhdGVfc2VyaWFsIjoiNWY2ZTYzZmNmMmU3MjZjZjRmNzhiZmMxMDhkYWUzNmM2NmEzZjQzZmJiNDU1YmIwMjU4ZjVmM2ZhNTlkY2QwYiIsInN0YXRlIjoiRklOSVNIRUQiLCJjbGllbnRfaWQiOiI1NTBlODQwMC1lMjliLTExZDQtYTcxNi00NDY2NTU0NDAwMDAiLCJzY2hlbWEiOnsic3RhbmRhcmRfdjEiOnsicmVjZWlwdCI6eyJyZWNlaXB0X3R5cGUiOiJSRUNFSVBUIiwiYW1vdW50c19wZXJfdmF0X3JhdGUiOlt7InZhdF9yYXRlIjoiTk9STUFMIiwiYW1vdW50IjoiMzAuMDAifSx7InZhdF9yYXRlIjoiUkVEVUNFRF8xIiwiYW1vdW50IjoiMC4wMCJ9LHsidmF0X3JhdGUiOiJTUEVDSUFMX1JBVEVfMSIsImFtb3VudCI6IjAuMDAifSx7InZhdF9yYXRlIjoiU1BFQ0lBTF9SQVRFXzIiLCJhbW91bnQiOiIwLjAwIn0seyJ2YXRfcmF0ZSI6Ik5VTEwiLCJhbW91bnQiOiIwLjAwIn1dLCJhbW91bnRzX3Blcl9wYXltZW50X3R5cGUiOlt7InBheW1lbnRfdHlwZSI6IkNBU0giLCJhbW91bnQiOiIzMC4wMCIsImN1cnJlbmN5X2NvZGUiOiJFVVIifV19fSwicmF3Ijp7InByb2Nlc3NfdHlwZSI6Ikthc3NlbmJlbGVnLVYxIiwicHJvY2Vzc19kYXRhIjoiUW1Wc1pXZGVNekF1TURCZk1DNHdNRjh3TGpBd1h6QXVNREJmTUM0d01GNHpNQzR3TURwQ1lYST0ifX0sInFyX2NvZGVfZGF0YSI6IlYwO0VSUyA4NWRkN2ViZC1mODUwLTRjNDAtYjc1Zi00YWMxM2QwNmEwZDU7S2Fzc2VuYmVsZWctVjE7QmVsZWdeMzAuMDBfMC4wMF8wLjAwXzAuMDBfMC4wMF4zMC4wMDpCYXI7ODI7MTU4OzIwMjEtMDQtMDdUMTQ6NDg6MzguMDAwWjsyMDIxLTA0LTA3VDE0OjQ4OjM4LjAwMFo7ZWNkc2EtcGxhaW4tU0hBMjU2O3V0Y1RpbWU7M28rT3UwWEV2NVVFTVNnSFhPRkRNd0JOcllDYkRRSUtpZ1Nzajd6UWZWa2paYkZQUmV2WnQ4TStFUFIrdTI3eDlJY1lQS05uWkh3S2NibjBUUDl0OXc9PTtNRmt3RXdZSEtvWkl6ajBDQVFZSUtvWkl6ajBEQVFjRFFnQUVRa2VBVUFvUExnVG5VTEYyQ01PcDIxMGc2T05KWktNbHBPL3IwbDBISG40TFJIcmRjMjV4eHV0dDFLMjdXeFd2UlQyT2dVakpDdEh1TXBUb0xzdHJhZz09IiwicmV2aXNpb24iOjIsImxhdGVzdF9yZXZpc2lvbiI6MiwibG9nIjp7Im9wZXJhdGlvbiI6IkZpbmlzaFRyYW5zYWN0aW9uIiwidGltZXN0YW1wIjoxNjE3ODA2OTE4LCJ0aW1lc3RhbXBfZm9ybWF0IjoidXRjVGltZSJ9LCJzaWduYXR1cmUiOnsidmFsdWUiOiIzbytPdTBYRXY1VUVNU2dIWE9GRE13Qk5yWUNiRFFJS2lnU3NqN3pRZlZralpiRlBSZXZadDhNK0VQUit1Mjd4OUljWVBLTm5aSHdLY2JuMFRQOXQ5dz09IiwiYWxnb3JpdGhtIjoiZWNkc2EtcGxhaW4tU0hBMjU2IiwiY291bnRlciI6MTU4LCJwdWJsaWNfa2V5IjoiTUZrd0V3WUhLb1pJemowQ0FRWUlLb1pJemowREFRY0RRZ0FFUWtlQVVBb1BMZ1RuVUxGMkNNT3AyMTBnNk9OSlpLTWxwTy9yMGwwSEhuNExSSHJkYzI1eHh1dHQxSzI3V3hXdlJUMk9nVWpKQ3RIdU1wVG9Mc3RyYWc9PSJ9LCJ0c3NfaWQiOiI2Y2MyZGYzNy1kMDY1LTQ4MjQtODdmZi00OGM2ZTM3ODUwZTciLCJtZXRhZGF0YSI6e30sIl90eXBlIjoiVFJBTlNBQ1RJT04iLCJfaWQiOiI1MzQ1MTYxMy0xYTE1LTQ5MWYtYmQwMS0wMzNhNDI3MDg0YjciLCJfZW52IjoiVEVTVCIsIl92ZXJzaW9uIjoiMS4xLjAifQ=='
        ],
        description: 'The stringified version of any raw response from any signing provider, e.g. a base64-string for Fiskaly.'
      },
      {
        type: 'object',
        example: '{"output":{"logTime":"2021-05-11T19:27:39Z","signature":"MFesMCkRm0bUIsI8QdWlMIqhIt8r42CAGa23zGXJFDSjhQWv6hpEOUtH0zlOwff6FLuRbw8ejYCyUyRKe4ho1nseUD5SAW1Hj97AV06kDJQt2Iy8tLastn2kkleZg0Jz","signatureCounter":2036},"result":"EXECUTION_OK","function":"FinishTransaction"}',
        description: 'The object version of any raw response from any signing provider, e.g. the respnse object from an Epson TSE.'
      }
    ])
  },
  request_payload: {
    description: 'The original signing request to the signing provider.',
    default: null,
    ...oneOf([
      {
        type: 'string',
        examples: [
          '{"state":"FINISHED","client_id":"550e8400-e29b-11d4-a716-446655440000","schema":{"standard_v1":{"order":{"line_items":[{"quantity":"10.982374598","text":"Eisbecher “Himbeere“","price_per_unit":"20.25"}]}}}}',
          'eyJzdGF0ZSI6IkZJTklTSEVEIiwiY2xpZW50X2lkIjoiNTUwZTg0MDAtZTI5Yi0xMWQ0LWE3MTYtNDQ2NjU1NDQwMDAwIiwic2NoZW1hIjp7InN0YW5kYXJkX3YxIjp7InJlY2VpcHQiOnsicmVjZWlwdF90eXBlIjoiUkVDRUlQVCIsImFtb3VudHNfcGVyX3ZhdF9yYXRlIjpbeyJ2YXRfcmF0ZSI6Ik5PUk1BTCIsImFtb3VudCI6IjMwLjAwIn0seyJ2YXRfcmF0ZSI6IlJFRFVDRURfMSIsImFtb3VudCI6IjAuMDAifSx7InZhdF9yYXRlIjoiU1BFQ0lBTF9SQVRFXzEiLCJhbW91bnQiOiIwLjAwIn0seyJ2YXRfcmF0ZSI6IlNQRUNJQUxfUkFURV8yIiwiYW1vdW50IjoiMC4wMCJ9LHsidmF0X3JhdGUiOiJOVUxMIiwiYW1vdW50IjoiMC4wMCJ9XSwiYW1vdW50c19wZXJfcGF5bWVudF90eXBlIjpbeyJwYXltZW50X3R5cGUiOiJDQVNIIiwiYW1vdW50IjoiMzAuMDAiLCJjdXJyZW5jeV9jb2RlIjoiRVVSIn1dfX19fQ=='
        ],
        description: 'The stringified version of any raw request to any signing provider, e.g. a base64-string for Fiskaly.'
      },
      {
        type: 'object',
        example: '{"input":{"clientId":"TillhubPOS.0014.0001","processData":"QmVsZWdeMTguMDBfMC4wMF8wLjAwXzAuMDBfMC4wMF4xOC4wMDpCYXI=","processType":"Finish","additionalData":"","transactionNumber":244}}',
        description: 'The object version of any raw request to any signing provider, e.g. the request object for an Epson TSE.'
      }
    ])
  },
  client_id: oneOf({
    type: 'string',
    examples: [
      'TillhubPOS.0014.0001',
      '550e8400-e29b-11d4-a716-446655440000'
    ],
    description: 'ID of the register according to the signing unit. Will deviate from the Tillhub register UUID!'
  }),
  counter: oneOf({
    type: 'integer',
    minimum: 0,
    example: 227,
    description: 'Internal counter of the signing unit (signature counter)'
  }),
  unit: oneOf({
    type: 'string',
    examples: [
      'soTFFH9xiZP9JYWCPRgvpw6xhZ3ttbWDjfS4ky4AMEk=',
      '6cc2df37-d065-4824-87ff-48c6e37850e7'
    ],
    description: 'ID of the used signing unit (e.g. Fiskaly/Epson: serialNumber)'
  }),
  public_key: oneOf({
    type: 'string',
    description: 'Public key of the signing unit according to BSI TR-03111'
  }),
  algorithm: oneOf({
    type: 'string',
    examples: [
      'ecdsa-plain-SHA256',
      'rsa-2048-SHA512'
    ],
    description: 'The algorithm type used by the signing unit'
  }),
  process_type: oneOf({
    type: 'string',
    examples: [
      'Kassenbeleg-V1',
      'Bestellung-V1',
      'NF525-receipt-V1',
      'NF525-balance-V1'
    ],
    description: 'A string describing the local type of the signing process'
  }),
  receipt_type: oneOf({
    type: 'string',
    examples: [
      'Beleg',
      'Order',
      'Vente',
      'Shift'
    ],
    description: 'A string describing the local type of the signing receipt'
  }),
  process_data: oneOf({
    type: 'string',
    examples: [
      'Beleg^0.00_2.55_0.00_0.00_0.00^2.55:Bar',
      '2;”Eisbecher ““Himbeere“““;3.99\r1;”Eiskaffee“;2.99',
      'QmVsZWdeMTAuMDBfMC4wMF8wLjAwXzAuMDBfMC4wMF4xMC4wMDpVbmJhcg=='
    ],
    maxLength: 1024,
    description: 'The raw input for the signing process (e.g. according to DSFinV-K defined per process type)'
  }),
  transactionNumber: oneOf({ // camel case due to client implementation
    type: 'integer',
    minimum: 0,
    example: 16,
    description: 'The transaction number according to the signing unit, required in final input data'
  }),
  transaction_id: oneOf({
    type: 'string',
    example: '53451613-1a15-491f-bd01-033a427084b7',
    description: 'The transaction id according to the signing unit (currently only Fiskaly: _id)'
  }),
  started_at: oneOf({
    type: 'string',
    format: 'date-time',
    example: '2019-07-10T18:41:02.000Z',
    description: 'This represents the time of any inital signing request (e.g. start_transaction according to DSFinV-K, Fiskaly: time_start)'
  }),
  error: oneOf({
    type: 'string',
    description: 'Optional error reporting'
  }),
  error_counter: oneOf({
    type: 'integer',
    minimum: 0,
    description: 'Internal counter of succeeding errors, must be reset on next success.'
  })
}
