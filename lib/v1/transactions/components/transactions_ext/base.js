const { oneOf } = require('../../../../helpers/payload-or-null')

module.exports = {
  additionalProperties: false,
  transaction_id: {
    description: 'The transaction uuid for this expense/deposit.',
    type: 'string',
    format: 'uuid'
  },
  images: {
    description: 'A Tillhub images object with URLs to display images for this expense/deposit.',
    anyOf: [
      {
        type: 'object',
        additionalProperties: true,
        properties: {
          original: {
            type: 'string',
            format: 'uri'
          },
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
          }
        }
      }
    ]
  },
  metadata: {
    ...oneOf({
      type: 'object',
      description: 'A container for storing arbitrary metadata.'
    }),
    default: null
  }
}
