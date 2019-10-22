const { oneOf } = require('../../../helpers/payload-or-null')

module.exports = {
  image_expense: oneOf({
    type: 'string',
    description: 'defines wether image is mandatory, optional, for expenses',
    enum: [
      'mandatory',
      'optional',
      'none'
    ]
  }),
  image_deposit: oneOf({
    type: 'string',
    description: 'defines wether image is mandatory, optional, or non-mandatory for deposits',
    enum: [
      'mandatory',
      'optional',
      'none'
    ]
  }),
  image_bank: oneOf({
    type: 'string',
    description: 'defines wether image is mandatory, optional, or non-mandatory for banks',
    enum: [
      'mandatory',
      'optional',
      'none'
    ]
  }),
  image_safe: oneOf({
    type: 'string',
    description: 'defines wether image is mandatory, optional, or non-mandatory for safes',
    enum: [
      'mandatory',
      'optional',
      'none'
    ]
  }),
  image_tip: oneOf({
    type: 'string',
    description: 'defines wether image is mandatory, optional, or non-mandatory for tips',
    enum: [
      'mandatory',
      'optional',
      'none'
    ]
  })
}
