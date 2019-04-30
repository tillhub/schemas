const { oneOf } = require('../../helpers/payload-or-null')

// NOTE: WIP
module.exports = {
  name: {
    description: 'any arbitrary name for a content item that can be displayed in applications.',
    ...oneOf({
      type: 'string',
      maxLength: 128,
      minLength: 1
    })
  },
  type: {
    type: 'string',
    enum: [
      'video',
      'image',
      'text',
      'transition'
    ]
  },
  payload: {
    ...oneOf({
      type: 'string',
      format: 'uri'
    })
  },
  content_configuration: {
    ...oneOf({
      type: 'object',
      additionalProperties: false,
      properties: {
        max_duration: {
          description: 'show this content a maximumn of seconds',
          ...oneOf({
            type: 'number'
          })
        },
        min_duration: {
          description: 'show this content a minimum of seconds',
          ...oneOf({
            type: 'number'
          })
        },
        start_time: {
          description: 'show/play this content, starting from this timestamp (in seconds)',
          ...oneOf({
            type: 'number'
          })
        },
        preset: {
          ...oneOf([
            {
              type: 'string',
              if: { properties: { type: { enum: ['transition'] } } },
              then: {
                enum: [
                  ''
                ]
              }
            }
          ])
        }
      }
    })
  },
  payload_configuration: {
    ...oneOf({
      type: 'object',
      additionalProperties: false,
      properties: {
        auth: {
          type: 'object',
          additionalProperties: false,
          properties: {

          }
        }

      }
    })
  },
  active: {
    description: 'Soft disable or enabled this item.',
    type: 'boolean',
    default: true
  },
  deleted: {
    description: 'Soft delete this item.',
    type: 'boolean',
    default: false
  },
  metadata: {
    oneOf: [
      {
        description: 'Arbitrary user defined data.',
        type: 'object',
        maxProperties: 10
      },
      {
        type: 'null'
      }
    ]
  }
}
