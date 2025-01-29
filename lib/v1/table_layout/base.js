module.exports = {
  id: {
    type: 'string',
    format: 'uuid'
  },
  name: {
    type: 'string',
    minLength: 1
  },
  location: {
    type: 'string',
    format: 'uuid'
  },
  tables_count: {
    type: 'integer',
    minimum: 0 // Assuming at least one table is required
  },
  active: {
    type: 'boolean',
    default: true
  },
  layout: {
    type: 'object',
    properties: {
      scene: {
        type: 'object',
        properties: {
          width: {
            type: 'number'
          },
          height: {
            type: 'number'
          },
          color: {
            type: 'string'
          }
        },
        required: ['width', 'height', 'color']
      },
      entities: {
        type: 'object',
        additionalProperties: {
          type: 'object',
          properties: {
            id: {
              type: 'string'
            },
            name: {
              type: 'string'
            },
            type: {
              type: 'string',
              enum: ['table', 'decoration']
            },
            kind: {
              type: 'string',
              enum: ['rect', 'round', 'stool', 'bar', 'couch', 'plant', 'umbrella']
            },
            width: {
              type: 'number'
            },
            height: {
              type: 'number'
            },
            rotation: {
              type: 'number'
            }
          },
          required: ['id', 'name', 'type', 'kind', 'width', 'height', 'rotation']
        }
      }
    },
    required: ['scene', 'entities'],
    default: {}
  }
}
