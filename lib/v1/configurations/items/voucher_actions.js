const { oneOf } = require('../../../helpers/payload-or-null')

module.exports = {
  oneOf: [
    {
      type: 'null'
    },
    {
      type: 'array',
      items: {
        type: 'object',
        properties: {
          id: {
            type: 'string',
            format: 'uuid',
            description: 'The Tillhub voucher action resource reference ID.',
            example: '43847a66-97dc-4ac2-8e8a-c44920e1f22f'
          },
          action: {
            type: 'string',
            enum: [
              'increment',
              'decrement'
            ]
          },
          external_parameter: {
            default: null,
            ...oneOf({
              description: 'Additional parameter for external voucher systems, e.g. Fleurop Voucher Type specifier',
              type: 'string',
              maxLength: 128,
              example: '0023903408'
            })
          },
          context: {
            default: null,
            ...oneOf({
              description: 'Specifies from where this action can be triggered',
              type: 'string',
              enum: [
                'library',
                'tiles'
              ]
            })
          },
          lookup: {
            default: null,
            ...oneOf({
              // WARNING: not yet used in the client application
              description: 'Specifies the key for a request by e.g. \'code\'',
              type: 'string',
              maxLength: 64,
              example: 'code'
            })
          },
          type: {
            type: 'string',
            enum: [
              'tillhub-voucher-api',
              'fleurop-voucher-api'
            ]
          },
          system: {
            type: 'object',
            properties: {
              id: {
                type: 'string',
                format: 'uuid',
                description: 'The Tillhub system resource reference ID associated with this prefix.',
                example: '43847a66-97dc-4ac2-8e8a-c44920e1f22f'
              },
              system: {
                type: 'string',
                format: 'uuid',
                description: 'The Tillhub sub-system resource reference ID associated with this prefix.',
                example: '43847a66-97dc-4ac2-8e8a-c44920e1f22f'
              },
              type: {
                type: 'string',
                enum: [
                  'tillhub-voucher-api',
                  'fleurop-voucher-api'
                ]
              }
            }
          },
          product: {
            default: null,
            ...oneOf({
              type: 'object',
              properties: {
                id: {
                  type: 'string',
                  format: 'uuid',
                  description: 'The Tillhub product resource reference ID assocuated with this prefix.',
                  example: '43847a66-97dc-4ac2-8e8a-c44920e1f22f'
                }
              }
            })
          }
        }
      }
    }
  ]
}
