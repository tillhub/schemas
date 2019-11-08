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
    type: {
      type: 'string',
      enum: [
        'increment',
        'decrement',
        'create'
      ]
    },
    lookup: {
      default: 'code',
      description: 'Specifies the key for a request by e.g. \'csode\'',
      type: 'string',
      maxLength: 64,
      example: 'code'
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
    }
  }
}
