const { oneOf } = require('../../helpers/payload-or-null')

module.exports = {
  name: {
    type: 'string',
    example: 'Customer satisfaction',
    minLength: 1,
    maxLength: 128
  },
  description: {
    ...oneOf([{
      type: 'string',
      minLength: 1,
      maxLength: 4096
    }])
  },
  content: {
    type: 'string',
    description: 'The question itself that is going to displayed to the user',
    example: 'Was the service performed without any problems?',
    minLength: 1,
    maxLength: 4096
  },
  deleted: {
    type: 'boolean'
  },
  active: {
    type: 'boolean'
  },
  required: {
    type: 'boolean',
    description: 'Flag on the service for mandatory input request'
  },
  answer_validation: {
    description: 'JSON schema that is applied to the user\'s answer to the product question; it is useful for UI development because it gives information on how to construct the answer form fields, i.e. the field type (select, input, checkbox) and values for unit options',
    oneOf: [
      {
        type: 'object'
      },
      {
        type: 'null'
      }
    ],
    examples: [
      {
        'type': 'object',
        'title': 'checkbox',
        '$id': 'https://schemas.tillhub.com/v1/product_service_questions.answer_validation.checkbox',
        'description': 'Checkbox or toggle for a true/false answer',
        'required': ['content'],
        'properties': {
          'content': {
            'type': 'boolean',
            'default': false
          }
        }
      },
      {
        'type': 'object',
        'title': 'free_text_input',
        '$id': 'https://schemas.tillhub.com/v1/product_service_questions.answer_validation.free_text_input',
        'description': 'User input for free text',
        'required': ['content'],
        'properties': {
          'content': {
            'type': 'string'
          }
        }
      },
      {
        'type': 'object',
        'title': 'simple_select',
        '$id': 'https://schemas.tillhub.com/v1/product_service_questions.answer_validation.simple_select',
        'description': 'Simple dropwdown select with given options',
        'required': ['content'],
        'properties': {
          'content': {
            'type': 'string',
            'enum': [
              'green',
              'blue',
              'red'
            ]
          }
        }
      },
      {
        'type': 'object',
        'title': 'number_input_plus_optional_unit_select',
        '$id': 'https://schemas.tillhub.com/v1/product_service_questions.answer_validation.number_input_plus_optional_unit_select',
        'description': 'Number input field plus a select field for optional unit options',
        'required': ['content'],
        'properties': {
          'content': {
            'type': 'number',
            'max': 100,
            'min': 0
          },
          'unit': {
            'type': 'string',
            'enum': [
              'ml',
              'l'
            ]
          }
        }
      }
    ]
  }
}
