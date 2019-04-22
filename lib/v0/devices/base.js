const { oneOf } = require('../../helpers/payload-or-null')

// NOTE: WIP
module.exports = {
  client_id: {
    type: 'string',
    format: 'uuid'
  },
  device_id: {
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
  }
}
