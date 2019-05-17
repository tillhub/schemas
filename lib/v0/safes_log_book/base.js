const { oneOf } = require('../../helpers/payload-or-null')

module.exports = {
  initiated_at: {
    type: 'string',
    description: 'The timestamp from the UI, when the transfer was initiated by the user, e.g. clicking the submit button',
    format: 'date-time'
  },
  issuer: {
    type: 'string',
    description: 'Alphanumeric ID of the staff member, who initiated the transfer',
    format: 'uuid'
  },
  from: {
    type: 'string',
    description: 'Alphanumeric ID of origin, e.g. safe uuid',
    format: 'uuid'
  },
  to: {
    type: 'string',
    description: 'Alphanumeric ID of destination, e.g. safe or bank uuid',
    format: 'uuid'
  },
  transfer_value: {
    type: 'number',
    description: 'Amount that is being transferred from origin to destination',
    multipleOf: 0.01,
    minimum: 0
  },
  currency: {
    type: 'string',
    description: 'The three letter [ISO currency](https://en.wikipedia.org/wiki/ISO_4217) of this item.',
    example: 'EUR',
    minLength: 3,
    maxLength: 3
  },
  comment: oneOf({
    type: 'string',
    maxLength: 4096
  }),
  metadata: oneOf({
    type: 'object'
  })
}
