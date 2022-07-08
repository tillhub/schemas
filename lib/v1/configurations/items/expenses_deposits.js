const { oneOf } = require('../../../helpers/payload-or-null')

module.exports = {
  balance_proposal: oneOf({
    type: 'string',
    description: 'defines the value prefilling of the bank expense at the time of a balance',
    enum: [
      'zero',
      'keep_change',
      'all_cash'
    ]
  }),
  image_expense: oneOf({
    type: 'string',
    description: 'defines wether image is mandatory, optional, for expenses',
    enum: [
      'mandatory',
      'optional',
      'none'
    ],
    default: 'optional'
  }),
  image_deposit: oneOf({
    type: 'string',
    description: 'defines wether image is mandatory, optional, or non-mandatory for deposits',
    enum: [
      'mandatory',
      'optional',
      'none'
    ],
    default: 'optional'
  }),
  image_bank: oneOf({
    type: 'string',
    description: 'defines wether image is mandatory, optional, or non-mandatory for banks',
    enum: [
      'mandatory',
      'optional',
      'none'
    ],
    default: 'optional'
  }),
  image_safe: oneOf({
    type: 'string',
    description: 'defines wether image is mandatory, optional, or non-mandatory for safes',
    enum: [
      'mandatory',
      'optional',
      'none'
    ],
    default: 'optional'
  }),
  image_tip: oneOf({
    type: 'string',
    description: 'defines wether image is mandatory, optional, or non-mandatory for tips',
    enum: [
      'mandatory',
      'optional',
      'none'
    ],
    default: 'optional'
  }),
  visibility: oneOf({
    type: 'object',
    description: 'defines visibility of accounts per context e.g. balance',
    properties: {
      balance: {
        type: 'array',
        items: {
          type: 'string',
          enum: [
            'expense',
            'deposit',
            'bank',
            'transit',
            'safe',
            'tip'
          ]
        }
      },
      opening: {
        type: 'array',
        items: {
          type: 'string',
          enum: [
            'expense',
            'deposit',
            'bank',
            'transit',
            'safe',
            'tip'
          ]
        }
      },
      expense_list: {
        type: 'array',
        items: {
          type: 'string',
          enum: [
            'expense',
            'deposit',
            'bank',
            'transit',
            'safe',
            'tip'
          ]
        }
      }
    }
  })
}
