const { oneOf } = require('../../../../../helpers/payload-or-null')

module.exports = {
  description: 'The effective voucher delta record for this item (thus reversable if needed)',
  additionalProperties: false,
  type: 'object',
  properties: {
    client_id: {
      type: 'string',
      example: 'd0d40841-b1a7-438a-9d1e-2bfec590d2e3',
      minLength: 6,
      maxLength: 64,
      description: 'A implementer defined identifier. This can be used for local resource matching and has no business implication. TO BE DEPRECTAED.'
    },
    source_id: {
      type: 'string',
      example: 'd0d40841-b1a7-438a-9d1e-2bfec590d2e3',
      minLength: 6,
      maxLength: 64,
      description: 'The Tillhub or Fleurop Id of the source voucher.'
    },
    delta_amount: {
      description: 'The effective change in the value of the voucher or it\'s creation amount $1.37 = 1.37.',
      type: 'number',
      minimum: -1000000,
      maximum: 1000000,
      multipleOf: 0.01
    },
    delta_currency: {
      type: 'string',
      description: 'The three letter [ISO currency](https://en.wikipedia.org/wiki/ISO_4217) of this item.',
      example: 'EUR',
      minLength: 3,
      maxLength: 3
    },
    barcode: {
      default: null,
      type: 'string',
      minLength: 3,
      maxLength: 128,
      description: 'Voucher EAN or similar.'
    },
    code: {
      default: null,
      type: 'string',
      minLength: 3,
      maxLength: 128,
      description: 'Voucher number.'
    },
    system: {
      type: 'string',
      format: 'uuid',
      example: 'AB3847a66-97dc-4ac2-8e8a-c44920e1f22f',
      description: 'Voucher system used.'
    },
    external: {
      description: 'Make this voucher to follow external logic',
      type: 'boolean',
      default: false
    },
    external_system_type: {
      description: 'Define which voucher API implementation to follow',
      ...oneOf({
        type: 'string',
        enum: [
          'tillhub-voucher-api',
          'fleurop',
          'zalando'
        ]
      })
    },
    external_system_id: {
      description: 'Define here whether this voucher system is an external one and which ID it references at the provider. E.g. a Tillhub Account can talk to another one, but permissions and this reference need to be set.',
      default: null,
      ...oneOf({
        description: 'Replace own accountId with external_system_id in requests when external=true, i.e. /vouchers/external_system_id/voucher_id. If external=false use accountId as usual, i.e. /vouchers/accountId/voucher_id',
        type: 'string',
        maxLength: 128,
        example: '0023903408'
      })
    },
    external_voucher_system_id: {
      description: 'If using a parent\'s voucher system, this is the voucher system id of the delegating parent. external_voucher_system_id is to be sent in requests as a query parameter, whenever external_system_id (instead of the own accountId) is used in the url, e.g. vouchers/{external_system_id}/lookup?code=xyz123&system={external_voucher_system_id}.',
      default: null,
      ...oneOf({
        description: 'Additional parameter for external voucher systems, e.g. Fleurop Voucher Type specifier or id inside external system',
        type: 'string',
        maxLength: 128,
        example: '0023903408'
      })
    },
    action: {
      type: 'string',
      format: 'uuid',
      example: 'CD847a66-97dc-4ac2-8e8a-c44920e1f22f',
      description: 'Voucher system\'s action used.'
    },
    action_type: {
      type: 'string',
      enum: [
        'increment',
        'decrement',
        'create'
      ],
      description: 'Voucher system\'s action type used.'
    },
    template: oneOf({
      default: null,
      type: 'string',
      format: 'uuid',
      description: 'If action_type is \'create\' - a reference to the voucher template used',
      example: '43847a66-97dc-4ac2-8e8a-c44920e1f22f'
    }),
    title: oneOf({
      default: null,
      type: 'string',
      maxLength: 256,
      description: 'Title of the source voucher.'
    }),
    message: {
      default: null,
      type: 'string',
      maxLength: 2048,
      description: 'Messages from voucher processing.'
    },
    type: {
      type: 'string',
      description: 'Mainly legacy support for Fleurop flows.',
      enum: [
        'undefined', // formerly 0
        'fleurop_redeem', // formerly 1
        'fleurop_sell_or_recharge', // formerly 2
        'fleurop_own_branded_recharge', // formerly 3
        'fleurop_own_branded_redeem', // formerly 4
        'fleurop_externa_sell_and_activate', // formerly 5
        'tillhub_create', // formerly 6
        'tillhub_recharge', // formerly 7
        'tillhub_reedeem', // formerly 8
        'tillhub_percentage' // formerly 9
      ]
    },
    status: {
      type: 'string',
      description: 'Client side recorded booking state of the delta operation.',
      enum: [
        'unknown',
        'pending',
        'locked',
        'succeed',
        'failed',
        'scheduled'
      ]
    }
  },
  required: [
    'client_id',
    'source_id',
    'api',
    'delta_amount',
    'delta_currency',
    'system',
    'type',
    'status'
  ]
}
