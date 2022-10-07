const { oneOf } = require('../../../helpers/payload-or-null')

const tipsCartItemTemplate = {
  description: 'Defines mandatory cart item properties to enable encoding tips as cart items (similar to Fiskaltrust)',
  type: 'object',
  properties: {
    product: {
      type: 'string',
      format: 'uuid',
      description: 'The Tillhub product resource reference ID.',
      example: '43847a66-97dc-4ac2-8e8a-c44920e1f22f'
    },
    product_name: {
      default: null,
      ...oneOf({
        type: 'string',
        description: 'Name of the product, e.g. Shop-owner\'s Tip.'
      })
    },
    product_number: {
      default: null,
      ...oneOf({
        type: 'string',
        description: 'The custom number of the product.'
      })
    },
    product_group: {
      default: null,
      ...oneOf({
        type: 'string',
        format: 'uuid',
        description: 'The Tillhub product group resource reference ID.',
        example: 'e3847a66-97dc-4ac2-8e8a-c44920e1f22f'
      })
    },
    product_group_name: {
      default: null,
      ...oneOf({
        type: 'string',
        description: 'The name of the product group'
      })
    },
    product_group_number: {
      default: null,
      ...oneOf({
        type: 'string',
        description: 'The custom number of the product group'
      })
    },
    account: {
      type: 'string',
      format: 'uuid',
      description: 'The Tillhub financial account reference ID.',
      example: 'a3847a66-97dc-4ac2-8e8a-c44920e1f22f'
    },
    tax: {
      type: 'string',
      format: 'uuid',
      description: 'The Tillhub tax resource reference ID.',
      example: '33847a66-97dc-4ac2-8e8a-c44920e1f22f'
    }
  }
}

module.exports = oneOf({
  type: 'object',
  required: [
    'owner_item',
    'employee_item'
  ],
  properties: {
    enabled: oneOf({
      description: 'global on-off-switch for the tips-feature',
      type: 'boolean',
      default: false
    }),
    max_factor: oneOf({
      description: 'The maximum multiplier to determine tips suggestions from a given cart price.',
      type: 'number',
      minimum: 1.0,
      maximum: 2.0,
      default: null // -> 1.3 in POS
    }),
    auto_propose: oneOf({
      description: 'if true, automatically selects the highest tip possible according to the given amount or the max_factor, no tips otherwise',
      type: 'boolean',
      default: false
    }),
    owner_item: {
      description: 'Tip item template if the shop owner IS the recipient of the tip (e.g. non-zero tax account).',
      ...tipsCartItemTemplate
    },
    employee_item: {
      description: 'Tip item template if the shop owner is NOT the recipient of the tip (e.g. zero tax account).',
      ...tipsCartItemTemplate
    },
    payment_types: oneOf({
      description: 'Defines which payment types can be used with the tips-feature',
      type: 'array',
      items: {
        type: 'string',
        'enum': [
          'cash',
          'card',
          'invoice',
          'card_opi', // deprecated, use 'card' instead
          'card_concardis', // deprecated, use 'card' instead
          'card_tim', // deprecated, use 'card' instead
          'card_adyen', // deprecated, use 'card' instead
          'gift_card',
          'default',
          'undefined',
          'voucher'
        ]
      }
    })
  }
})
