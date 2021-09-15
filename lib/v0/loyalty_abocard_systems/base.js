const { oneOf } = require('../../helpers/payload-or-null')
const voucherSystemPropertiesFull = require('../voucher_systems/base')

const {
  name: omitName,
  product: omitProduct,
  actions: omitActions,
  locations: omitLocations,
  location_groups: omitLocationGroups,
  ...voucherSystemProperties
} = voucherSystemPropertiesFull

const abocardAction = {
  description: 'The abocard action',
  type: 'object',
  additionalProperties: false,
  required: [
    'id',
    'type'
  ],
  properties: {
    id: {
      description: 'The abocard action reference ID',
      type: 'string',
      format: 'uuid',
      example: '43847a66-97dc-4ac2-8e8a-c44920e1f22f'
    },
    type: {
      description: 'The abocard action type',
      type: 'string',
      enum: [
        'sell'
      ]
    },
    product: {
      description: 'The product associated with this action',
      ...oneOf({
        type: 'string',
        format: 'uuid',
        example: '43847a66-97dc-4ac2-8e8a-c44920e1f22f'
      })
    },
    context: {
      description: 'Specifies from where this action can be triggered',
      ...oneOf({
        type: 'string',
        enum: [
          'library'
        ]
      })
    }
  }
}

module.exports.properties = {
  system_type: {
    description: 'The type of abocard system',
    type: 'string',
    enum: [
      'voucher'
    ],
    example: 'voucher'
  },
  name: oneOf({
    description: 'The abocard sustem name',
    type: 'string',
    maxLength: 255
  }),
  voucher_system: oneOf({
    description: 'Referenced voucher system',
    type: 'object',
    additionalProperties: false,
    required: [],
    properties: {
      id: {
        description: 'Voucher system primary key (required for update)',
        type: 'string',
        format: 'uuid'
      },
      ...voucherSystemProperties
    }
  }),
  actions: {
    description: 'Define actions',
    ...oneOf({
      type: 'array',
      items: {
        description: 'Available actions for this system',
        ...abocardAction
      }
    })
  },
  linked_product: oneOf({
    description: 'Referenced product',
    type: 'string',
    format: 'uuid'
  }),
  system_revenue_account: oneOf({
    description: 'Referenced revenue account',
    type: 'string',
    format: 'uuid'
  }),
  used_product_price: oneOf({
    description: 'The price of the product being used',
    type: 'number',
    minimum: 0,
    multipleOf: 0.01
  }),
  price_source: oneOf({
    description: 'The price source',
    type: 'string',
    maxLength: 255
  }),
  price_id: oneOf({
    description: 'The price ID',
    type: 'string',
    maxLength: 255
  }),
  selling_price: oneOf({
    description: 'The selling price',
    type: 'number',
    minimum: 0,
    multipleOf: 0.01
  }),
  discount_value: oneOf({
    description: 'The discount value',
    type: 'number',
    minimum: 0,
    multipleOf: 0.01
  }),
  total_value: oneOf({
    description: 'The total value',
    type: 'number',
    minimum: 0,
    multipleOf: 0.01
  }),
  units: oneOf({
    description: 'The amount of units',
    type: 'number',
    minimum: 0
  }),
  voucher_value_per_unit: oneOf({
    description: 'The voucher value per unit',
    type: 'number',
    minimum: 0,
    multipleOf: 0.01
  }),
  discount_value_per_unit: oneOf({
    description: 'The discount value per unit',
    type: 'number',
    minimum: 0,
    multipleOf: 0.01
  }),
  locations: oneOf({
    description: 'Locations where abocard system is applicable',
    type: 'array',
    items: {
      type: 'string',
      format: 'uuid'
    }
  }),
  location_groups: oneOf({
    description: 'Location groups where abocard system is applicable',
    type: 'array',
    items: {
      type: 'string',
      format: 'uuid'
    }
  })
}

module.exports.required = [
  'system_type',
  'name'
]
