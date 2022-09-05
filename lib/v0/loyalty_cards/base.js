const { oneOf } = require('../../helpers/payload-or-null')

module.exports = {
  code: {
    type: 'string'
  },
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
    type: 'boolean',
    default: false
  },
  active: {
    type: 'boolean',
    description: 'The card defaults to inactive, if this property is not specified. Only active cards will be able to collect loyalty values.',
    default: false
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
