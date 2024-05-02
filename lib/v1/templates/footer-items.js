module.exports = {
  type: 'object',
  additionalProperties: false,
  properties: {
    location_and_date: {
      type: 'object',
      additionalProperties: false,
      properties: {
        default: {
          oneOf: [
            {
              type: 'string'
            },
            {
              type: 'null'
            }
          ]
        },
        custom: {
          oneOf: [
            {
              type: 'string'
            },
            {
              type: 'null'
            }
          ]
        },
        show: {
          type: 'boolean',
          default: true
        }
      }
    },
    signature: {
      type: 'object',
      additionalProperties: false,
      properties: {
        default: {
          oneOf: [
            {
              type: 'string'
            },
            {
              type: 'null'
            }
          ]
        },
        custom: {
          oneOf: [
            {
              type: 'string'
            },
            {
              type: 'null'
            }
          ]
        },
        show: {
          type: 'boolean',
          default: true
        }
      }
    },
    amount_received: {
      type: 'object',
      additionalProperties: false,
      properties: {
        default: {
          oneOf: [
            {
              type: 'string'
            },
            {
              type: 'null'
            }
          ]
        },
        custom: {
          oneOf: [
            {
              type: 'string'
            },
            {
              type: 'null'
            }
          ]
        },
        show: {
          type: 'boolean',
          default: true
        }
      }
    }
  }
}
