module.exports = {
  type: 'object',
  default: {},
  properties: {
    scene: {
      type: 'object',
      properties: {
        color: {
          oneOf: [
            {
              type: 'string',
              pattern: '^#[0-9A-Fa-f]{6}$' // hex color code
            },
            {
              type: 'string',
              maxLength: 0
            }
          ]
        },
        width: {
          type: 'number'
        },
        height: {
          type: 'number'
        }
      },
      additionalProperties: false
    },
    entities: {
      type: 'array',
      items: {
        type: 'object',
        properties: {
          id: {
            type: 'string',
            format: 'uuid'
          },
          sortOrder: {
            type: 'number'
          },
          type: {
            type: 'string',
            minLength: 1
          },
          kind: {
            type: 'string',
            minLength: 1
          },
          fontSize: {
            type: 'number'
          },
          image: {
            type: 'string'
          },
          width: {
            type: 'number'
          },
          height: {
            type: 'number'
          },
          x: {
            type: 'number'
          },
          y: {
            type: 'number'
          },
          rotation: {
            type: 'number'
          },
          name: {
            type: 'string',
          },
          color: {
            oneOf: [
              {
                type: 'string',
                pattern: '^#[0-9A-Fa-f]{6}$' // hex color code
              },
              {
                type: 'string',
                maxLength: 0
              }
            ]
          },
          minPartySize: {
            type: 'number'
          },
          maxPartySize: {
            type: 'number'
          },
          isBookableExternally: {
            type: 'boolean'
          }
        },
        additionalProperties: false,
        required: ['id', 'type', 'x', 'y', 'width', 'height'],
        if: {
          properties: {
            type: {
              enum: ['table', 'stool']
            }
          }
        },
        then: {
          required: ['sortOrder', 'name', 'minPartySize', 'maxPartySize', 'isBookableExternally', 'x', 'y']
        }
      }
    }
  },
  additionalProperties: false
}
