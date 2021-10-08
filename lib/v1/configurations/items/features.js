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
    payback: oneOf({
      description: 'Payback.de behavior configuration',
      type: 'object',
      additionalProperties: false,
      properties: {
        prompt: {
          description: 'If true - show a prompt that asks the customer for a payback number',
          type: 'boolean',
          default: false
        },
        number_format: {
          description: 'The format of the customer payback number that is being validated against the input',
          type: 'string',
          format: 'regex',
          example: '^[_A-Za-z0-9-+]+(\\.[_A-Za-z0-9-+]+)*@[A-Za-z0-9-]+(\\.[A-Za-z0-9-]+)*(\\.[A-Za-z‌​]{2,})$',
          default: '^[0-9]{10}$'
        },
        number_length_max: {
          description: 'The maxiumum length of a customer payback number (as a helper for the UI)',
          type: 'integer',
          minimum: 2,
          maximum: 99,
          default: 10
        }
      }
    }),
    split_receipt: oneOf({
      description: 'Restaurant case: split bill between a group of guests',
      type: 'object',
      additionalProperties: false,
      properties: {
        enabled: {
          description: 'Specifies if the feature is available.',
          type: 'boolean',
          default: false
        }
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
