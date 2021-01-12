const countingNumbers = {
  type: 'object',
  additionalProperties: false,
  properties: {
    sale: {
      type: 'integer',
      description: 'The sale counting number at the time of the decision.',
      example: 37,
      minimum: 0
    },
    expense: {
      type: 'integer',
      description: 'The expense counting number at the time of the decision.',
      example: 19,
      minimum: 0
    },
    balance: {
      type: 'integer',
      description: 'The balance counting number at the time of the decision.',
      example: 5,
      minimum: 0
    },
    delivery_note: {
      type: 'integer',
      description: 'The delivery note counting number at the time of the decision.',
      example: 3,
      minimum: 0
    },
    saved_cart: {
      type: 'integer',
      description: 'The saved cart counting number at the time of the decision.',
      example: 29,
      minimum: 0
    }
  }
}

module.exports = {
  type: 'object',
  additionalProperties: false,
  description: 'Describes a more or less one-time decision about the state of the registers counting numbers (initializing the keychain).',
  required: ['date', 'local', 'remote', 'decision'],
  properties: {
    date: {
      description: 'Date of a counting number decision',
      type: 'string',
      format: 'date-time',
      example: '2019-01-23 16:51:29.143+00'
    },
    local: {
      description: 'Local (POS) counting numbers at the time of the decision',
      ...countingNumbers
    },
    remote: {
      description: 'Remote (API) counting numbers at the time of the decision',
      ...countingNumbers
    },
    decision: {
      description: 'Counting numbers decision, individual max(local, remote)',
      ...countingNumbers
    }
  }
}
