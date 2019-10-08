module.exports = {
  token_id: {
    description: 'The token of the user.',
    type: 'string'
  },
  issued_at: {
    description: 'When the token was issued.',
    type: 'string',
    format: 'date-time'
  },
  issuer: {
    description: 'Details about the issuer.',
    oneOf: [
      {
        type: 'object'
      },
      {
        type: 'null'
      }
    ]
  },
  valid_until: {
    description: 'When the token expires.',
    type: 'string',
    format: 'date-time'
  },
  is_logged_out: {
    description: 'If the token was logged out.',
    type: 'boolean',
    default: false
  },
  logged_out_at: {
    description: 'When the token was logged out.',
    oneOf: [
      {
        type: 'string',
        format: 'date-time'
      },
      {
        type: 'null'
      }
    ]
  },
  is_blocked: {
    description: 'If the token was blocked.',
    type: 'boolean',
    default: false
  },
  block_reason: {
    oneOf: [
      {
        type: 'string'
      },
      {
        type: 'null'
      }
    ]
  },
  block_origin: {
    oneOf: [
      {
        type: 'object'
      },
      {
        type: 'null'
      }
    ]
  }
}
