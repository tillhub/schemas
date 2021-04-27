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
                }
              }
            },
            concardis: {
              type: 'object',
              properties: {
                enabled: {
                  type: 'boolean',
                  default: true
                }
              }
            },
            opi: {
              type: 'object',
              properties: {
                enabled: {
                  type: 'boolean',
                  default: true
                }
              }
            },
            sumup: {
              type: 'object',
              properties: {
                enabled: {
                  type: 'boolean',
                  default: true
                }
              }
            },
            tim: {
              type: 'object',
              properties: {
                enabled: {
                  type: 'boolean',
                  default: true
                }
              }
            }
          }
        }
      }
    }
  ]
}
