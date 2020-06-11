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
      description: 'A implementer defined identifier. This can be used for local resource matching and has no business implication.'
    },
    source_id: {
      type: 'string',
      example: 'd0d40841-b1a7-438a-9d1e-2bfec590d2e3',
      minLength: 6,
      maxLength: 64,
      description: 'The Tillhub or Fleurop Id of the source voucher.'
    },
    delta_amount: {
      description: 'The effective change in the value of the voucher or it\'s creation amount.',
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
    code: {
      default: null,
      type: 'string',
      minLength: 3,
      maxLength: 128,
      description: 'Voucher number.'
    },
    barcode: {
      default: null,
      type: 'string',
      minLength: 3,
      maxLength: 128,
      description: 'Voucher EAN or similar.'
    },
    prefix: {
      default: null,
      type: 'string',
      maxLength: 128,
      description: 'If a prefix was used, mention it here (e.g. "BSH").'
    },
    system: {
      type: 'string',
      format: 'uuid',
      example: 'AB3847a66-97dc-4ac2-8e8a-c44920e1f22f',
      description: 'Voucher system used.'
    },
    product: {
      type: 'string',
      format: 'uuid',
      example: 'DB3847a66-97dc-4ac2-8e8a-c44920e1f22f',
      description: 'Product used.'
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
    external_account: {
      description: 'If using a parent\'s voucher system, this is the account id of the delegating parent, e.g. vouchers/{external_account}/lookup?code=xyz123&system={external_system}.',
      default: null,
      ...oneOf({
        type: 'string',
        maxLength: 128,
        example: '0023903408'
      })
    },
    external_system: {
      description: 'If using a parent\'s voucher system, this is the voucher system id inside the delegating parent, e.g. vouchers/{external_account}/lookup?code=xyz123&system={external_system}.',
      default: null,
      ...oneOf({
        type: 'string',
        maxLength: 128,
        example: 'a3-e4-0023903408'
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
        'tillhub_reedeem' // formerly 8
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
    'delta_amount',
    'delta_currency',
    'system',
    'type',
    'status'
  ]
}
