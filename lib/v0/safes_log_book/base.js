const { oneOf } = require('../../helpers/payload-or-null')

module.exports = {
  initiated_at: {
    type: 'string',
    description: 'The timestamp from the UI, when the transfer was initiated by the user, e.g. clicking the submit button',
    format: 'date-time'
  },
  issuer: {
    type: 'string',
    description: 'Client ID of who initiated the transfer'
  },
  from: oneOf({
    type: 'string',
    description: 'Alphanumeric ID of origin, e.g. safe uuid',
    format: 'uuid'
  }),
  to: oneOf({
    type: 'string',
    description: 'Alphanumeric ID of destination, e.g. safe or bank uuid',
    format: 'uuid'
  }),
  comment: oneOf({
    type: 'string',
    maxLength: 4096
  }),
  metadata: oneOf({
    type: 'object'
  }),
  origins: oneOf({
    type: 'object',
    description: 'Holds information about e.g. the original fr_transaction'
  }),
  transfer_type: {
    type: 'string',
    enum: [
      'safe_to_safe',
      'safe_to_bank',
      'pos_to_safe'
    ]
  }
}
