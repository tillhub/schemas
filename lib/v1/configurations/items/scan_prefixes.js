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
            description: 'The Tillhub scan prefix resource reference ID.',
            example: '43847a66-97dc-4ac2-8e8a-c44920e1f22f'
          },
          action: {
            type: 'string',
            enum: [
              'voucher'
            ]
          },
          prefix: {
            description: 'The prefix to look up and remove from scan results before requesting the voucher.',
            type: 'string',
            maxLength: 16,
            example: 'bsh'
          },
          display_name: {
            default: null,
            ...oneOf({
              description: 'The display string for presenting the selection of available prefixes.',
              type: 'string',
              maxLength: 64,
              example: 'BSH - Marketing'
            })
          },
          display_format: {
            default: null,
            ...oneOf({
              description: '\'X\' will be filled with digits/characters from a scan result.',
              type: 'string',
              maxLength: 64,
              example: 'XXXX-XXXX-XXXX-XXXX'
            })
          },
          min_identifier_length: {
            default: null,
            ...oneOf({
              description: 'The minimum length before a lookup can be performed.',
              type: 'integer',
              minimum: 1,
              maximum: 32
            })
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
