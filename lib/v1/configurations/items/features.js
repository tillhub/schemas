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
    }),
    pagers: oneOf({
      description: 'Restaurant case: pagers/coasters/buzzers',
      type: 'object',
      additionalProperties: false,
      properties: {
        enabled: {
          description: 'Specifies if the feature is available.',
          type: 'boolean',
          default: false
        },
        prompt: oneOf({
          description: 'If true and not previously assigned - show a prompt that asks the cashier to add a pager number on cart checkout',
          type: 'boolean',
          default: false
        })
      }
    })
  }
})
