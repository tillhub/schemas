const { oneOf } = require('../../../helpers/payload-or-null')
module.exports = {
  type: 'object',
  properties: {
    takeaway: oneOf({
      type: 'object',
      additionalProperties: false,
      properties: {
        enabled: {
          type: 'boolean',
          description: 'Specifies if takeaway is available.',
          default: false
        },
        use_fallback: {
          type: 'boolean',
          description: 'Legacy tax options can be used as a fallback before all products are synched',
          default: true
        }
      }
    }),
    orders: oneOf({
      type: 'object',
      properties: {
        preview_printing: oneOf({
          type: 'object',
          properties: {
            enabled: {
              type: 'boolean',
              description: 'defines whether preview printing is enabled.',
              default: 'false'
            }
          }
        }),
        remote_access: oneOf({
          type: 'object',
          properties: {
            enabled: {
              type: 'boolean',
              description: 'defines whether remote access is available on the main POS.',
              default: 'false'
            },
            background_release_seconds: {
              description: 'The time in seconds that the Local Server will stay available when the app is send to the background.',
              type: 'integer',
              example: 15,
              minimum: 0,
              maximum: 30, // to be on the safe side of Apple
              default: 25
            },
            log_level: {
              description: 'defines the granularity of the local server logging.',
              type: 'string',
              enum: [
                'error',
                'warning',
                'info', // basic server info
                'debug', // basic request/response info
                'verbose' // request/response bodies
              ],
              default: 'info'
            },
            caching: oneOf({
              type: 'object',
              description: 'Defines caching behavior of Orderpro devices - only for for order-creation and modificatiuon - no checkouts',
              properties: {
                enabled: oneOf({
                  description: 'Specifies if Orderpro should cache orders on failures (e.g. network)',
                  type: 'boolean',
                  default: false
                }),
                lifetime: oneOf({
                  description: 'Lifetime of cached operations in seconds.',
                  type: 'integer',
                  minimum: 60, // 1 minute
                  maximum: 86400, // 24 hours
                  default: 3600 // 1 hour
                }),
                max_size: oneOf({
                  description: 'Maximum number of operations to be cached on Orderpro.',
                  type: 'integer',
                  minimum: 1,
                  maximum: 100,
                  default: 25
                })
              }
            })
          }
        }),
        lock_to_waiters: oneOf({
          type: 'boolean',
          description: 'defines whether orders are locked to the waiters',
          default: 'false'
        }),
        reassignment: oneOf({
          type: 'object',
          properties: {
            requires_pin: oneOf({
              type: 'boolean',
              description: 'defines whether the pin from the next waiter will be required in the reassignment.',
              default: 'false'
            })
          }
        }),
        synch: oneOf({
          type: 'object',
          additionalProperties: false,
          properties: {
            enabled: {
              description: 'Specifies if orders will be synched via the carts-API',
              type: 'boolean',
              default: false
            }
          }
        }),
        numbers: oneOf({
          type: 'object',
          properties: {
            reset_time: oneOf({
              type: 'string',
              pattern: '([0-1][0-9]|2[0-3]):[0-5][0-9]',
              example: '09:15',
              description: 'daytime when order numbers will be reset, counting starts from 1 afterwards - only with multi iPad Synch enabled',
              default: '04:00'
            })
          }
        }),
        history: oneOf({
          type: 'object',
          properties: {
            range: oneOf({
              description: 'Sold orders created before (Now() - Range) will be deleted from the client database.',
              type: 'object',
              properties: {
                unit: {
                  description: 'Unit of the range.',
                  type: 'string',
                  enum: [
                    'hours',
                    'days',
                    'weeks',
                    'months',
                    'years'
                  ],
                  default: 'days'
                },
                value: {
                  description: 'The value of the range, defines a timeframe together with the set unit.',
                  type: 'integer',
                  minimum: 1,
                  maximum: 500,
                  default: 2
                }
              }
            }),
            max_count: oneOf({
              description: 'Maximum number of transactions that are kept on the client.',
              type: 'integer',
              minimum: 1,
              maximum: 75000,
              default: 2000
            })
          }
        })
      }
    })
  }
}
