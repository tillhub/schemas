const { oneOf } = require('../../helpers/payload-or-null')

module.exports = {
  name: {
    description: 'any arbitrary name for a product template that can be displayed in applications.',
    ...oneOf({
      type: 'string',
      maxLength: 128,
      minLength: 1
    })
  },
  option_template: {
    descirption: 'An arbitray option template, that holds attributes with aattribute value lists.',
    ...oneOf({
      type: 'object',
      additionalProperties: false,
      properties: {
        '/': {}
      },
      patternProperties: {
        '^(label_name_[0-9]+)+$': {
          type: 'array',
          items: {
            type: 'string',
            maxLength: 512,
            minLength: 1
          }
        }
      }
    })
  },
  active: {
    description: 'Soft disable or enabled this item.',
    type: 'boolean',
    default: true
  },
  deleted: {
    description: 'Soft delete this item.',
    type: 'boolean',
    default: false
  },
  metadata: {
    oneOf: [
      {
        description: 'Arbitrary user defined data.',
        type: 'object',
        maxProperties: 10
      },
      {
        type: 'null'
      }
    ]
  }
}
