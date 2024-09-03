const { oneOf } = require('../../../helpers/payload-or-null')

module.exports = oneOf({
  description: 'Available options for variant parent products',
  type: 'array',
  items: {
    type: 'object',
    description: 'Describes a single option with all potential values',
    patternProperties: {
      '^.{1,256}$': { // e.g. 'Size'
        type: 'array',
        items: {
          type: 'string',
          example: 'L'
        }
      }
    },
    example: {
      Size: [
        'L',
        'M',
        'S'
      ]
    }
  },
  examples: [
    [
      {
        Color: [
          'blue',
          'green',
          'red'
        ]
      },
      {
        Size: [
          'L',
          'M',
          'S'
        ]
      }
    ],
    [
      {
        Keyboard: [
          'English',
          'French',
          'German'
        ]
      },
      {
        Memory: [
          '8GB',
          '16GB',
          '32GB'
        ]
      },
      {
        Hardrive: [
          '512GB',
          '1TB',
          '2TB'
        ]
      }
    ]
  ]
})
