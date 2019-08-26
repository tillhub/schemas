const { oneOf } = require('../../../helpers/payload-or-null')

module.exports = {
  type: 'object',
  properties: {
    id: {
      type: 'string',
      format: 'uuid',
      description: 'The Tillhub voucher action resource reference ID - used to identify this on tiles and elsewhere.',
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
        description: 'Specifies the key for a request by e.g. \'csode\'',
        type: 'string',
        maxLength: 64,
        example: 'code'
      })
    },
    product: {
      default: null,
      ...oneOf({
        type: 'object',
        properties: {
          id: {
            oneOf: [
              {
                type: 'string',
                format: 'uuid',
                description: 'The Tillhub product resource reference ID assocuated with this action.',
                example: '43847a66-97dc-4ac2-8e8a-c44920e1f22f'
              },
              {
                type: 'null'
              }
            ]
          }
        }
      })
    }
  }
}
