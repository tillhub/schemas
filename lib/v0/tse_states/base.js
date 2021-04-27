module.exports = {
  client_id: {
    description: 'An identifier used locally on POS for their own reference.',
    oneOf: [
      {
        type: 'string',
        maxLength: 128
      },
      {
        type: 'null'
      }
    ]
  },
  raw_data: {
    description: 'Raw data from the POS.',
    type: 'object'
  },
  date: {
    description: 'Date when the TSE state was stored.',
    oneOf: [
      {
        type: 'string',
        format: 'date-time',
        example: '2019-03-17T21:12:04.849Z'
      },
      {
        type: 'null'
      }
    ]
  },
  context: {
    description: 'context in which is automatically or triggered by user.',
    type: 'string',
    enum: [
      'manual',
      'automatic'
    ],
    default: 'automatic'
  },
  tse_serial_number: {
    description: 'TSE serial number.',
    type: 'string'
  }
}
