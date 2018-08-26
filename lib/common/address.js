module.exports = {
  type: 'object',
  additionalProperties: false,
  required: [
    'lines',
    'street',
    'street_number',
    'locality',
    'region',
    'postal_code',
    'country',
    'type'
  ],
  properties: {
    lines: {
      oneOf: [
        {
          type: 'array',
          minItems: 1,
          maxItems: 4,
          items: {
            type: 'string',
            minLength: 1
          }
        },
        {
          type: 'null'
        }
      ]
    },
    street: {
      oneOf: [
        {
          type: 'string'
        },
        {
          type: 'null'
        }
      ]
    },
    street_number: {
      oneOf: [
        {
          type: 'string'
        },
        {
          type: 'null'
        }
      ]
    },
    locality: {
      oneOf: [
        {
          type: 'string'
        },
        {
          type: 'null'
        }
      ]
    },
    region: {
      oneOf: [
        {
          type: 'string'
        },
        {
          type: 'null'
        }
      ]
    },
    postal_code: {
      oneOf: [
        {
          type: 'string',
          maxLength: 10
        },
        {
          type: 'null'
        }
      ]
    },
    country: {
      oneOf: [
        {
          type: 'string',
          minLength: 2,
          maxLength: 2,
          pattern: '^[A-Z]{2}$'
        },
        {
          type: 'null'
        }
      ],
      'default': null
    },
    type: {
      oneOf: [
        {
          type: 'string',
          'enum': [
            'local',
            'delivery',
            'billing'
          ]
        },
        {
          type: 'null'
        }
      ]
    }
  }
}
