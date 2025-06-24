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
            oneOf: [
              {
                type: 'number'
              },
              {
                type: 'null'
              }
            ]
          },
          type: {
            type: 'string'
          },
          kind: {
            type: 'string'
          },
          text: {
            type: 'string'
          },
          fontSize: {
            type: 'number'
          },
          image: {
            type: 'object',
            properties: {
              type: {
                type: 'string'
              },
              value: {
                type: 'string'
              }
            }
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
            type: 'string'
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
        additionalProperties: false
      },
      required: ['id', 'type', 'x', 'y', 'width', 'height']
    }
  },
  additionalProperties: false
}

/** @TODO: add these line to the schema :
 *         required: ['id', 'type', 'x', 'y', 'width', 'height'],
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
 */
