const { oneOf } = require('../../../../../helpers/payload-or-null')

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
    id: {
      type: 'string',
      format: 'uuid',
      example: '1d53f799-c24f-49e3-b68f-93ae5fc69921',
      description: 'A Tillhub product question resource identifier.'
    },
    question: {
      type: 'string',
      maxLength: 1024,
      example: 'Which colour is used?',
      description: 'The associated Tillhub product question \'content\' field.'
    },
    type: {
      type: 'string',
      description: 'The required layout type of the answer',
      enum: [
        'checkbox',
        'free_text_input',
        'simple_select',
        'number_input_plus_optional_unit_select'
      ]
    },
    content_type: {
      type: 'string',
      description: 'The required content type of the answer',
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
      description: 'The answer content of a product service question',
      ...oneOf({
        type: 'object',
        additionalProperties: false,
        required: [
          'content'
        ],
        properties: {
          content: {
            oneOf: [
              {
                type: 'number',
                description: 'If \'number_input_plus_optional_unit_select\', this field contains the inputted numerical value.'
              },
              {
                type: 'boolean',
                description: 'If \'checkbox\', this field contains the selcetd boolean value.'
              },
              {
                type: 'string',
                description: 'If \'free_text_input\' or \'simple_select\', this field contains the inputted text.'
              },
              {
                type: 'null'
              }
            ]
          },
          unit: {
            ...oneOf({
              type: 'string',
              maxLength: 128,
              example: 'ml',
              description: 'If \'number_input_plus_optional_unit_select\', this field contains the selected unit.'
            }),
            default: null
          }
        }
      }),
      default: null
    }
  }
}
