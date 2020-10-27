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
                  default: 10
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
                  default: 10
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
                  default: false
                }
              }
            },
            concardis: {
              type: 'object',
              properties: {
                enabled: {
                  type: 'boolean',
                  default: false
                }
              }
            },
            opi: {
              type: 'object',
              properties: {
                enabled: {
                  type: 'boolean',
                  default: false
                }
              }
            },
            sumup: {
              type: 'object',
              properties: {
                enabled: {
                  type: 'boolean',
                  default: false
                }
              }
            },
            tim: {
              type: 'object',
              properties: {
                enabled: {
                  type: 'boolean',
                  default: false
                }
              }
            }
          }
        }
      }
    }
  ]
}
