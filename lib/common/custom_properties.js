
// TODO: consider .fieldType, .required, .order

const PROP_MAX_LENGTH = 128
const PROP_MIN_LENGTH = 1
const MAX_PROPERTIES = 50

module.exports.definition = {
  type: 'array',
  $id: 'https://schemas.tillhub.com/common/custom_properties.definition.schema.json',
  additionalProperties: false,
  maxItems: MAX_PROPERTIES,
  items: {
    type: 'object',
    required: [
      'name',
      'type'
    ],
    properties: {
      name: {
        type: 'string',
        minLength: PROP_MIN_LENGTH,
        maxLength: PROP_MAX_LENGTH
      },
      type: {
        type: 'string',
        enum: [
          'string',
          'number',
          'boolean'
        ]
      },
      label: {
        oneOf: [
          {
            type: 'string',
            minLength: 1,
            maxLength: 256
          },
          {
            type: 'null'
          }
        ]
      },
      description: {
        oneOf: [
          {
            type: 'string',
            minLength: 1,
            maxLength: 1024
          },
          {
            type: 'null'
          }
        ]
      }
    }
  }
}

module.exports.implementation = {
  oneOf: [
    {
      type: 'null'
    },
    {
      type: 'object',
      additionalProperties: false,
      maxProperties: MAX_PROPERTIES,
      patternProperties: {
        [`^.{${PROP_MIN_LENGTH},${PROP_MAX_LENGTH}}$`]: {
          anyOf: [
            { type: 'null' },
            { type: 'array' },
            { type: 'string' },
            { type: 'number' },
            { type: 'boolean' }
          ]
        }
      }
    }
  ]
}
