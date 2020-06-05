const { oneOf } = require('../../../helpers/payload-or-null')

module.exports = {
  ...oneOf([
    {
      description: 'The mutation voucher actions.',
      type: 'object',
      additionalProperties: false,
      required: [
        'id',
        'type',
        'name'
      ],
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
            'decrement'
          ]
        },
        external_parameter: {
          default: null,
          ...oneOf({
            description: 'Additional parameter for external voucher systems, e.g. Fleurop Voucher Type specifier',
            type: 'string',
            maxLength: 128,
            example: '03'
          })
        },
        name: {
          default: null,
          ...oneOf({
            description: 'The display string for presenting the selection of available actions.',
            type: 'string',
            maxLength: 64,
            example: 'BSH - Marketing'
          })
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
    },
    {
      description: 'The create voucher action, that can take a template reference as input',
      type: 'object',
      additionalProperties: false,
      required: [
        'id',
        'type',
        'name'
      ],
      properties: {
        id: {
          type: 'string',
          format: 'uuid',
          description: 'The Tillhub voucher action resource reference ID - used to identify this on tiles and elsewhere.',
          example: '43847a66-97dc-4ac2-8e8a-c44920e1f22f'
        },
        templates: {
          description: 'Define whether to use a template and which one. The template must be part if this system. Leave null or undefined to present all templates or the only one or none.',
          ...oneOf({
            type: 'array',
            items: {
              type: 'string',
              format: 'uuid',
              description: 'A reference to a voucher template inside of this voucher system',
              example: '43847a66-97dc-4ac2-8e8a-c44920e1f22f'
            }
          })
        },
        type: {
          type: 'string',
          enum: [
            'create'
          ]
        },
        name: {
          default: null,
          ...oneOf({
            description: 'The display string for presenting the selection of available actions.',
            type: 'string',
            maxLength: 64,
            example: 'BSH - Marketing'
          })
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
  ])
}
