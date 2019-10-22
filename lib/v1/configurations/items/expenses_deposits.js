const { oneOf } = require('../../../helpers/payload-or-null')

module.exports = {
  image_expense: {
    description: 'defines wether image is mandatory, optional, for expenses',
    ...oneOf({
      type: 'string',
      enum: [
        'mandatory',
        'optional',
        'none'
      ]
    })
  },
  image_deposit: {
    description: 'defines wether image is mandatory, optional, or non-mandatory for deposits',
    ...oneOf({
      type: 'string',
      enum: [
        'mandatory',
        'optional',
        'none'
      ]
    })
  },
  image_bank: {
    description: 'defines wether image is mandatory, optional, or non-mandatory for banks',
    ...oneOf({
      type: 'string',
      enum: [
        'mandatory',
        'optional',
        'none'
      ]
    })
  },
  image_safe: {
    description: 'defines wether image is mandatory, optional, or non-mandatory for safes',
    ...oneOf({
      type: 'string',
      enum: [
        'mandatory',
        'optional',
        'none'
      ]
    })
  },
  image_tip: {
    description: 'defines wether image is mandatory, optional, or non-mandatory for tips',
    ...oneOf({
      type: 'string',
      enum: [
        'mandatory',
        'optional',
        'none'
      ]
    })
  }
}
