const { oneOf } = require('../../../helpers/payload-or-null')

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
    ...oneOf({
      type: 'object'
    }),
    default: null
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
    ...oneOf({
      type: 'string',
      format: 'date-time'
    }),
    default: null
  }
}
