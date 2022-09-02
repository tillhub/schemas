const { oneOf } = require('../../helpers/payload-or-null')

module.exports = {
  customer: {
    description: 'The customer that this account belongs to.',
    type: 'string',
    format: 'uuid',
    example: '936835f7-2d75-41d2-9001-38ed6e458328'
  },
  name: oneOf({
    type: 'string',
    example: 'Tillhub Loyalty Account',
    minLength: 1,
    maxLength: 128
  }),
  account_number: oneOf({
    type: 'string',
    minLength: 1
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
    type: 'boolean',
    default: false
  },
  active: {
    type: 'boolean',
    description: 'The accounts defaults to active, if this property is not specified. Only active accounts will be able to collect loyalty values on their respective loyalty cards.',
    default: true
  },
  metadata: oneOf({
    type: 'object'
  })
}
