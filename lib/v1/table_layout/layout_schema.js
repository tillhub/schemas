module.exports = {
    type: 'object',
    default: {},
    properties: {
      scene: {
        type: 'object',
        properties: {
          color: {
            type: 'string',
            pattern: '^#[0-9A-Fa-f]{6}$' // hex color code
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
              minLength: 1
            },
            color: {
              type: 'string',
              minLength: 1
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
          additionalProperties: true,
          if: {
            properties: {
              type: {
                enum: ['table', 'stool']
              }
            }
          },
          then: {
            required: ['id', 'sortOrder', 'type', 'name', 'minPartySize', 'maxPartySize', 'isBookableExternally']
          }
        }
      }
    },
    additionalProperties: false
  }
  