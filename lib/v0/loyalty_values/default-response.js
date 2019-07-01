const base = require('./base')
const { oneOf } = require('../../helpers/payload-or-null')

module.exports = {
  ...base,
  id: {
    type: 'string',
    format: 'uuid'
  },
  created_at: {
    type: 'string',
    format: 'date-time'
  },
  updated_at: {
    type: 'string',
    format: 'date-time'
  },
  loyalty_system: {
    description: 'The loyalty account that this card belongs to.',
    type: 'string',
    format: 'uuid',
    example: '936835f7-2d75-41d2-9001-38ed6e458328'
  },
  loyalty_account: oneOf({
    description: 'The loyalty account that this card belongs to.',
    type: 'string',
    format: 'uuid',
    example: '936835f7-2d75-41d2-9001-38ed6e458328'
  }),
  loyalty_card: {
    description: 'The loyalty account that this card belongs to.',
    type: 'string',
    format: 'uuid',
    example: '936835f7-2d75-41d2-9001-38ed6e458328'
  }
}
