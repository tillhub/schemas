module.exports = {
  image_expense: {
    description: 'defines wether image is mandatory, optional, for expenses',
    oneOf: [
      {
        type: 'null'
      },
      {
        type: 'string',
        enum: [
          'mandatory',
          'optional',
          'non mandatory'
        ]
      }
    ]
  },
  image_deposit: {
    description: 'defines wether image is mandatory, optional, or non-mandatory for deposits',
    oneOf: [
      {
        type: 'null'
      },
      {
        type: 'string',
        enum: [
          'mandatory',
          'optional',
          'non-mandatory'
        ]
      }
    ]
  },
  image_bank: {
    description: 'defines wether image is mandatory, optional, or non-mandatory for banks',
    oneOf: [
      {
        type: 'null'
      },
      {
        type: 'string',
        enum: [
          'mandatory',
          'optional',
          'non-mandatory'
        ]
      }
    ]
  },
  image_safe: {
    description: 'defines wether image is mandatory, optional, or non-mandatory for safes',
    oneOf: [
      {
        type: 'null'
      },
      {
        type: 'string',
        enum: [
          'mandatory',
          'optional',
          'non-mandatory'
        ]
      }
    ]
  },
  image_tip: {
    description: 'defines wether image is mandatory, optional, or non-mandatory for tips',
    oneOf: [
      {
        type: 'null'
      },
      {
        type: 'string',
        enum: [
          'mandatory',
          'optional',
          'non-mandatory'
        ]
      }
    ]
  }
}
