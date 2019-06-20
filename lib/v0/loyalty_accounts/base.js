const { oneOf } = require('../../helpers/payload-or-null')

module.exports = {
  name: {
    type: 'string',
    example: 'Tillhub Loyalty Account',
    minLength: 1,
    maxLength: 128
  },
  activated_at: oneOf({
    type: 'string',
    format: 'date-time'
  }),
  is_payment_method: oneOf({
    type: 'boolean'
  }),
  description: oneOf({
    type: 'string',
    minLength: 1,
    maxLength: 4096
  }),
  deleted: {
    type: 'boolean'
  },
  active: {
    type: 'boolean'
  },
  metadata: oneOf({
    type: 'object'
  })
}
