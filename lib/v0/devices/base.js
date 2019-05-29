const { oneOf } = require('../../helpers/payload-or-null')

// NOTE: WIP
module.exports = {
  name: oneOf({
    type: 'string',
    minLength: 3,
    maxLength: 255
  }),
  client_id: {
    type: 'string',
    format: 'uuid'
  },
  device_id: {
    type: 'string',
    format: 'uuid'
  },
  register: {
    type: 'string',
    format: 'uuid'
  },
  device_configuration: {
    type: 'object',
    properties: {
      network: {
        type: 'object',
        properties: {
          ip: {
            type: 'string',
            oneOf: [
              { format: 'ipv4' },
              { format: 'ipv6' }
            ]
          },
          host: {
            oneOf: [
              {
                type: 'string'
              },
              {
                type: 'null'
              }
            ]
          },
          port: {
            type: 'integer'
          },
          protocol: {
            type: 'string',
            enum: ['http', 'https']
          }
        }
      },
      public_key: {
        oneOf: [
          {
            type: 'string'
          },
          {
            type: 'null'
          }
        ]
      },
      auth: {
        oneOf: [
          {
            type: 'object',
            properties: {
              type: {
                type: 'string',
                enum: [
                  'x.509'
                ]
              }
            }
          },
          {
            type: 'null'
          }
        ]
      }
    }
  },
  type: {
    ...oneOf([
      {
        type: 'string',
        enum: [
          'cfd',
          'printer'
        ]
      }
    ])
  },
  contents: {
    ...oneOf([
      {
        type: 'object',
        description: 'CFD displayable device contents',
        additionalProperties: false,
        properties: {
          idle: {
            ...oneOf({
              type: 'array',
              items: {
                type: 'string',
                format: 'uuid'
              }
            })
          },
          welcome: {
            ...oneOf({
              type: 'array',
              items: {
                type: 'string',
                format: 'uuid'
              }
            })
          },
          cart: {
            ...oneOf({
              type: 'array',
              items: {
                type: 'string',
                format: 'uuid'
              }
            })
          },
          payment: {
            ...oneOf({
              type: 'array',
              items: {
                type: 'string',
                format: 'uuid'
              }
            })
          },
          payment_terminal: {
            ...oneOf({
              type: 'array',
              items: {
                type: 'string',
                format: 'uuid'
              }
            })
          },
          payment_approved: {
            ...oneOf({
              type: 'array',
              items: {
                type: 'string',
                format: 'uuid'
              }
            })
          },
          goodbye: {
            ...oneOf({
              type: 'array',
              items: {
                type: 'string',
                format: 'uuid'
              }
            })
          },
          logo: {
            ...oneOf({
              type: 'array',
              items: {
                type: 'string',
                format: 'uuid'
              }
            })
          },
          runtime: {
            ...oneOf({
              type: 'string',
              format: 'uuid'
            })
          }
        }
      }
    ])
  }
}
