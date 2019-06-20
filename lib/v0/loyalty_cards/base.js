const { oneOf } = require('../../helpers/payload-or-null')

module.exports = {
  code: {
    type: 'string'
  },
  activated_at: oneOf({
    type: 'string',
    format: 'date-time'
  }),
  name: oneOf({
    type: 'string',
    minLength: 1
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
  }),
  loyalty_account: oneOf({
    description: 'The loyalty account that this card belongs to.',
    type: 'string',
    format: 'uuid',
    example: '936835f7-2d75-41d2-9001-38ed6e458328'
  })
}
