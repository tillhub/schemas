module.exports = {
  $id: 'https://schemas.tillhub.com/v0/promotions.templates.schema.json',
  $schema: 'http://json-schema.org/draft-07/schema#',
  oneOf: [
    {
      additionalProperties: false,
      type: 'object',
      required: [
        'inputs',
        'type'
      ],
      properties: {
        type: {
          type: 'string',
          enum: [
            'product_property:and_or_concat:output_properties'
          ]
        },
        inputs: {
          oneOf: [
            {
              type: 'object'
            },
            {
              type: 'null'
            }
          ]
        }
      }
    },
    {
      additionalProperties: false,
      type: 'object',
      required: [
        'inputs',
        'type'
      ],
      properties: {
        type: {
          type: 'string',
          enum: [
            'product_property:exclusive_bundle:output_properties'
          ]
        },
        inputs: {
          oneOf: [
            {
              type: 'object'
            },
            {
              type: 'null'
            }
          ]
        }
      }
    }
  ]
}
