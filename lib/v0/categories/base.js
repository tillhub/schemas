const { oneOf } = require('../../helpers/payload-or-null')

module.exports = {
  name: {
    type: 'string',
    minLength: 1,
    maxLength: 64
  },
  summary: {
    oneOf: [
      {
        type: 'null'
      },
      {
        type: 'string',
        maxLength: 512
      }
    ]
  },
  description: {
    oneOf: [
      {
        type: 'null'
      },
      {
        type: 'string',
        minLength: 1,
        maxLength: 16384
      }
    ]
  },
  comments: {
    oneOf: [
      {
        type: 'string',
        minLength: 1,
        maxLength: 4096
      },
      {
        type: 'null'
      }
    ]
  },
  color: {
    description: 'Color to be displayed in UIs.',
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
  images: {
    description: 'A Tillhub image object with URLs to display images this for this category.',
    anyOf: [
      {
        type: 'object',
        additionalProperties: true,
        properties: {
          '1x': {
            type: 'string',
            format: 'uri'
          },
          '2x': {
            type: 'string',
            format: 'uri'
          },
          '3x': {
            type: 'string',
            format: 'uri'
          },
          original: {
            type: 'string',
            format: 'uri'
          }
        }
      },
      {
        type: 'null'
      }
    ]
  },
  active: {
    description: 'Soft disable or enable this categories.',
    type: 'boolean',
    default: true
  },
  deleted: {
    description: 'Soft delete this categories.',
    type: 'boolean',
    default: false
  },
  external_ids: oneOf({
    description: 'The category ids given by external systems, e.g. Ecwid.',
    type: 'array',
    items: {
      type: 'object',
      properties: {
        store_front: {
          description: 'uuid of the Tillhub storeFront',
          type: 'string',
          format: 'uuid'
        },
        category_id: {
          description: 'the category id given by external system, e.g. Ecwid',
          oneOf: [
            {
              type: 'string'
            },
            {
              type: 'number'
            }
          ]
        }
      }
    }
  })
}
