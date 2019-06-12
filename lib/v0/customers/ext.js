const { oneOf } = require('../../helpers/payload-or-null')

module.exports = {
  analytics: {
    ...oneOf({
      type: 'object',
      properties: {
        summary: {
          ...oneOf({
            type: 'object'
          })
        }
      }
    })
  },
  notes: {
    ...oneOf({
      type: 'array',
      items: {
        oneOf: [
          {
            type: 'object',
            required: [
              'type',
              'payload'
            ],
            properties: {
              type: {
                type: 'string',
                enum: [
                  'text'
                ]
              },
              payload: {
                type: 'string',
                maxLength: 16384
              }
            }
          }
        ]
      }
    })
  }
}
