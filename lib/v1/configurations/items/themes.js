module.exports = {
  type: 'object',
  additionalProperties: false,
  properties: {
    defaults: {
      type: 'object',
      additionalProperties: false,
      properties: {
        logos: {
          type: 'object'
        },
        colors: {
          type: 'object'
        }
      },
      required: [
        'logos',
        'colors'
      ]
    },
    ios: {
      type: 'object',
      additionalProperties: false,
      properties: {
        colors: {
          type: 'object',
          additionalProperties: false,
          properties: {
            background: {
              type: 'string'
            }
          },
          required: [
            'background'
          ]
        }
      },
      required: [
        'colors'
      ]
    },
    dashboard: {
      type: 'object',
      additionalProperties: false,
      properties: {
        logos: {
          type: 'object',
          additionalProperties: false,
          properties: {
            top_left: {
              oneOf: [
                {
                  type: 'string'
                },
                {
                  type: 'null'
                }
              ]
            }
          },
          required: [
            'top_left'
          ]
        },
        colors: {
          type: 'object'
        }
      },
      required: [
        'logos',
        'colors'
      ]
    }
  },
  required: [
    'defaults',
    'ios',
    'dashboard'
  ]
}
