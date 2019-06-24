const { oneOf } = require('../../../../helpers/payload-or-null')

module.exports = {
  type: 'object',
  description: 'Answer to a product service question',
  additionalProperties: false,
  required: [
    'id',
    'type',
    'content_type'
  ],
  properties: {
    question_id: {
      type: 'string',
      format: 'uuid',
      description: 'A Tillhub product question resource.'
    },
    type: {
      type: 'string',
      description: 'The type of answer layout',
      enum: [
        'checkbox',
        'free_text_input',
        'simple_select',
        'number_input_plus_optional_unit_select'
      ]
    },
    content_type: {
      type: 'string',
      description: 'The type of answer content validation',
      enum: [
        'string',
        'boolean',
        'number'
      ]
    },
    required: {
      description: 'If true, the answer is mandatory',
      ...oneOf({
        type: 'boolean',
        default: false
      }),
      default: null
    },
    answer: {
      description: 'Answer content of a product service question',
      ...oneOf({
        type: 'object',
        additionalProperties: false,
        required: [
          'content'
        ],
        properties: {
          content: {

          },
          unit: {

          }
        }
      }),
      default: null
    }
  }
}
