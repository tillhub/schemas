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
        max: oneOf({
          type: 'integer',
          description: 'Largest pager number - serves as a helper to contrain the input component.',
          minimum: 10,
          maximum: 1000,
          example: 54,
          default: 99
        }),
        prompt: oneOf({
          description: 'If true and not previously assigned - show a prompt that asks the cashier to add a pager number on cart checkout',
          type: 'boolean',
          default: false
        })
      }
    }),
    gastro_tables: oneOf({
      type: 'object',
      additionalProperties: false,
      properties: {
        enabled: {
          description: 'Specifies if gastro tables feature is available.',
          type: 'boolean',
          default: false
        }
      }
    })
  }
})
