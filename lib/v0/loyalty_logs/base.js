const { oneOf } = require('../../helpers/payload-or-null')

module.exports = {
  loyalty_system: {
    description: 'The uuid of the loyalty system that this log belongs to.',
    type: 'string',
    format: 'uuid',
    example: '936835f7-2d75-41d2-9001-38ed6e458328'
  },
  operation: {
    type: 'string',
    enum: [
      'increment',
      'decrement',
      'spend',
      'book',
      'deactivate_card',
      'deactivate_account',
      'delete_account',
      'delete_card',
      'lookup_card'
    ]
  },
  loyalty_account: oneOf({
    description: 'The uuid of the loyalty account that this log belongs to.',
    type: 'string',
    format: 'uuid',
    example: '936835f7-2d75-41d2-9001-38ed6e458328'
  }),
  loyalty_card: oneOf({
    description: 'The uuid of the loyalty card that this log belongs to.',
    type: 'string',
    format: 'uuid',
    example: '936835f7-2d75-41d2-9001-38ed6e458328'
  }),
  product: oneOf({
    description: 'The uuid of the product that this log belongs to.',
    type: 'string',
    format: 'uuid',
    example: '936835f7-2d75-41d2-9001-38ed6e458328'
  }),
  transaction: oneOf({
    description: 'The uuid of the transaction that this log belongs to.',
    type: 'string',
    format: 'uuid',
    example: '936835f7-2d75-41d2-9001-38ed6e458328'
  }),
  cart_item: oneOf({
    description: 'The uuid of the cart_item that this log belongs to.',
    type: 'string',
    format: 'uuid',
    example: '936835f7-2d75-41d2-9001-38ed6e458328'
  }),
  register: oneOf({
    description: 'The uuid of the register that this log belongs to.',
    type: 'string',
    format: 'uuid',
    example: '936835f7-2d75-41d2-9001-38ed6e458328'
  }),
  issuer: oneOf({
    description: 'The uuid of the staff that this log belongs to.',
    type: 'string',
    format: 'uuid',
    example: '936835f7-2d75-41d2-9001-38ed6e458328'
  }),
  metadata: oneOf({
    type: 'object'
  }),
  related_to: oneOf({
    type: 'object'
  }),
  amount: oneOf({
    type: 'number'
  }),
  unit: oneOf({
    type: 'string'
  })
}
