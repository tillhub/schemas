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
            }
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
        })
      }
    })
  }
}
