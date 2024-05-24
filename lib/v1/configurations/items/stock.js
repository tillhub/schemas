const { oneOf } = require('../../../helpers/payload-or-null')

module.exports = {
  oneOf: [
    {
      type: 'null'
    },
    {
      type: 'object',
      additionalProperties: true,
      properties: {
        minimum_check_enabled: {
          description: "Enable email notifications on the client accounts email address, when a product's stock sinks below the defined stock minimum.",
          oneOf: [
            {
              type: 'null'
            },
            // type legacy regression. We gonna start writing booleans from the dashboard
            {
              type: 'string',
              enum: [
                'false',
                'true'
              ]
            },
            {
              type: 'boolean'
            }
          ]
        },
        pos: oneOf({
          type: 'object',
          description: 'Stock configurations for POS clients',
          properties: {
            sale: oneOf({
              type: 'object',
              description: 'Sale stock restrictions',
              additionalProperties: true,
              properties: {
                negative_stock_behavior: oneOf({
                  type: 'string',
                  description: 'Defines behavior if products with negative stock can be sold.',
                  enum: [
                    'ignore', // Don't block
                    'warning', // Warning (and let the user decide if he still wants to go through)
                    'block'
                  ],
                  default: 'ignore'
                })
              }
            }),
            booking: oneOf({
              type: 'object',
              description: 'Restrictions on actively booking stock from th POS',
              properties: {
                increment_reason_required: oneOf({
                  type: 'boolean',
                  description: 'Defines if reasons are mandatory for increasing stock',
                  default: false
                }),
                decrement_reason_required: oneOf({
                  type: 'boolean',
                  description: 'Defines if reasons are mandatory for lowering stock',
                  default: false
                }),
                reference_enabled: oneOf({
                  deprecated: true,
                  type: 'boolean',
                  description: 'Defines if delivery note reference should be requested for changing stock',
                  default: false
                }),
                reference_required: oneOf({
                  deprecated: true,
                  type: 'boolean',
                  description: 'Defines if delivery note reference is mandatory for changing stock',
                  default: false
                }),
                increment_reference: oneOf({
                  description: 'Defines how a delivery note reference will be requested when incrementing stock',
                  type: 'string',
                  enum: [
                    'none',
                    'optional',
                    'required'
                  ],
                  default: 'none'
                }),
                decrement_reference: oneOf({
                  description: 'Defines how a delivery note reference will be requested when decrementing stock',
                  type: 'string',
                  enum: [
                    'none',
                    'optional',
                    'required'
                  ],
                  default: 'none'
                }),
                reference_format: {
                  description: 'The format of the delivery note reference that is being validated against the input',
                  type: 'string',
                  format: 'regex',
                  example: '^[_A-Za-z0-9-+]+(\\.[_A-Za-z0-9-+]+)*@[A-Za-z0-9-]+(\\.[A-Za-z0-9-]+)*(\\.[A-Za-z‌​]{2,})$',
                  default: '^[0-9]{10}$'
                },
                reference_length_max: {
                  description: 'The maxiumum length of a delivery note reference (as a helper for the UI)',
                  type: 'integer',
                  minimum: 2,
                  maximum: 99,
                  default: 10
                }
              }
            })
          }
        })
      }
    }
  ]
}
