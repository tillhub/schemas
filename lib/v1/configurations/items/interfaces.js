const { oneOf } = require('../../../helpers/payload-or-null')

module.exports = {
  anyOf: [
    {
      type: 'null'
    },
    {
      type: 'object',
      additionalProperties: false,
      properties: {
        scanner_apis: {
          type: 'object',
          properties: {
            zebra: {
              type: 'object',
              properties: {
                enabled: {
                  type: 'boolean',
                  default: false
                },
                background_release_seconds: {
                  description: 'The time in seconds that the scanner will stay connected when the app is send to the background (for other apps to grab afterwards)',
                  type: 'integer',
                  example: 15,
                  minimum: 0,
                  maximum: 3600,
                  default: 25
                }
              }
            },
            epson: {
              type: 'object',
              properties: {
                enabled: {
                  type: 'boolean',
                  default: true
                },
                background_release_seconds: {
                  description: 'The time in seconds that the scanner will stay connected when the app is send to the background (for other apps to grab afterwards)',
                  type: 'integer',
                  example: 15,
                  minimum: 0,
                  maximum: 3600,
                  default: 25
                }
              }
            }
          }
        },
        printer_apis: {
          type: 'object',
          properties: {
            epson: {
              type: 'object',
              properties: {
                enabled: {
                  type: 'boolean',
                  default: true
                },
                pre_connect: oneOf({
                  description: 'Try connecting to the printer without an actual printing task',
                  type: 'array',
                  items: {
                    description: 'Views or conditions where a printer connection is tried just in case',
                    type: 'string',
                    enum: [
                      'payment_view'
                    ]
                  }
                })
              }
            },
            epson_fp_it: {
              type: 'object',
              properties: {
                enabled: {
                  type: 'boolean',
                  default: false
                }
              }
            }
          }
        },
        terminal_apis: {
          type: 'object',
          properties: {
            adyen: {
              type: 'object',
              properties: {
                enabled: {
                  type: 'boolean',
                  default: true
                },
                webserver: oneOf({
                  description: 'Defines which webserver implementation to use for secondary cashier messages (terminal -> POS)',
                  type: 'string',
                  enum: [
                    'none', // messages will not be visible on the POS but overall functionality is not affected
                    'criollo', // there have been issues (BSH)
                    'telegraph' // more stable than criollo
                  ],
                  default: 'telegraph'
                }),
                inter_call_delay_seconds: oneOf({
                  type: 'number',
                  description: 'Artificial delay between a previous terminal response and the next terminal request when performed automatically (some devices require additional cooldowns to avoid \'busy\' states)',
                  minimum: 0.0,
                  maximum: 10.0,
                  multipleOf: 0.001,
                  default: 0.0
                })
              }
            },
            concardis: {
              type: 'object',
              properties: {
                enabled: {
                  type: 'boolean',
                  default: true
                },
                inter_call_delay_seconds: oneOf({
                  type: 'number',
                  description: 'Artificial delay between a previous terminal response and the next terminal request when performed automatically (some devices require additional cooldowns to avoid \'busy\' states)',
                  minimum: 0.0,
                  maximum: 10.0,
                  multipleOf: 0.001,
                  default: 0.0
                })
              }
            },
            opi: {
              type: 'object',
              properties: {
                enabled: {
                  type: 'boolean',
                  default: true
                },
                swiss: oneOf({
                  description: 'Defines if swiss-specific handling of the OPI protocol will be used',
                  type: 'boolean',
                  default: false
                }),
                omit_amount_on_reversals: oneOf({
                  description: 'Defines if amount can be omitted in reversals',
                  type: 'boolean',
                  default: false
                }),
                inter_call_delay_seconds: oneOf({
                  type: 'number',
                  description: 'Artificial delay between a previous terminal response and the next terminal request when performed automatically (some devices require additional cooldowns to avoid \'busy\' states)',
                  minimum: 0.0,
                  maximum: 10.0,
                  multipleOf: 0.001,
                  default: 1.0 // defaults to 3.0 if Swiss
                })
              }
            },
            sumup: {
              type: 'object',
              properties: {
                enabled: {
                  type: 'boolean',
                  default: true
                },
                inter_call_delay_seconds: oneOf({
                  type: 'number',
                  description: 'Artificial delay between a previous terminal response and the next terminal request when performed automatically (some devices require additional cooldowns to avoid \'busy\' states)',
                  minimum: 0.0,
                  maximum: 10.0,
                  multipleOf: 0.001,
                  default: 0.0
                })
              }
            },
            tim: {
              type: 'object',
              properties: {
                enabled: {
                  type: 'boolean',
                  default: true
                },
                inter_call_delay_seconds: oneOf({
                  type: 'number',
                  description: 'Artificial delay between a previous terminal response and the next terminal request when performed automatically (some devices require additional cooldowns to avoid \'busy\' states)',
                  minimum: 0.0,
                  maximum: 10.0,
                  multipleOf: 0.001,
                  default: 0.0
                })
              }
            }
          }
        }
      }
    }
  ]
}
