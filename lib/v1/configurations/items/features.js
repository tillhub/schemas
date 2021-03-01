const { oneOf } = require('../../../helpers/payload-or-null')
module.exports = oneOf({
  type: 'object',
  properties: {
    library_view: oneOf({
      type: 'object',
      additionalProperties: false,
      properties: {
        enabled: {
          description: 'Specifies if library view is available.',
          type: 'boolean',
          default: true
        }
      }
    }),
    scan_view: oneOf({
      type: 'object',
      additionalProperties: false,
      properties: {
        enabled: {
          description: 'Specifies if scan view is available.',
          type: 'boolean',
          default: true
        }
      }
    })
  }
})
