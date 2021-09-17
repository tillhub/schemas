const { oneOf } = require('../../helpers/payload-or-null')
const baseObject = require('../../common/base')
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
      description: 'The product associated with this action. Product gets created automatically when creating a abocard system and based on "linked_product" vat and "system_revenue_account" field values.',
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

const request = {
  system_type: {
    description: 'The type of abocard system',
    type: 'string',
    enum: [
      'voucher'
    ],
    example: 'voucher'
  },
  name: oneOf({
    description: 'The abocard system name',
    example: 'Buy 4 haircuts and pay 10 Bucks less.',
    type: 'string',
    maxLength: 255
  }),
  voucher_system: oneOf({
    description: 'Referenced voucher system when system_type == "voucher". 1 to 1 relationship with voucher system instance.',
    type: 'object',
    additionalProperties: false,
    required: [],
    properties: {
      id: {
        description: 'Voucher system primary key (should be omitted for creation but required for update)',
        example: 'ad572a0d-301a-4270-8a49-5f720f2b277d',
        type: 'string',
        format: 'uuid'
      },
      ...voucherSystemProperties
    }
  }),
  actions: {
    description: 'Defines actions for various abocard system life cycle events',
    ...oneOf({
      type: 'array',
      items: {
        description: 'Available actions for this system',
        ...abocardAction
      }
    })
  },
  linked_product: oneOf({
    description: 'The Product that is linked to the abocard, if the abocard system requires a bound product. On creation of the system, a new products (abocard XYZ) is being created for "actions[...].product" and "voucher_system.product" based on this product. The VAT ID reference is propogating system_tax_account, as systems with product binding are creating single purpose vouchers that are tax relevant.',
    example: '3610eb8a-2d21-4034-9aa6-0a097a2ce5f2',
    type: 'string',
    format: 'uuid'
  }),
  system_revenue_account: oneOf({
    description: 'Referenced revenue account. New products being created for "actions[...].product" and "voucher_system.product" will use this revenue account.',
    example: '075a2f42-c29f-44d2-9ed3-2d636888e9b5',
    type: 'string',
    format: 'uuid'
  }),
  system_tax_account: oneOf({
    description: 'Referenced tax account. New products being created for "actions[...].product" and "voucher_system.product" will use this tax account.',
    example: '075a2f42-c29f-44d2-9ed3-2d636888e9b5',
    type: 'string',
    format: 'uuid'
  }),
  system_tax_rate: oneOf({
    description: 'New products being created for "actions[...].product" and "voucher_system.product" will use this tax rate.',
    example: '075a2f42-c29f-44d2-9ed3-2d636888e9b5',
    type: 'string',
    format: 'uuid'
  }),
  used_product_price: oneOf({
    description: 'For type=voucher abocard systems: The price of the product used to calculate the value of discounts and vouchers.',
    example: 12.99,
    type: 'number',
    minimum: 0,
    multipleOf: 0.01
  }),
  price_source: oneOf({
    description: 'The source of where the product price was taken from.',
    type: 'string',
    enum: [
      'product',
      'pricebook_entry'
    ]
  }),
  price_id: oneOf({
    description: 'The price reference of the price source. In case of price book entries, a uuid, in case of default price, the path of the JSONB fields.',
    example: 'default_prices[0]',
    type: 'string',
    maxLength: 255
  }),
  selling_price: oneOf({
    description: 'The selling price of the abocard for the POS.',
    example: 11.99,
    type: 'number',
    minimum: 0,
    multipleOf: 0.01
  }),
  discount_value: oneOf({
    description: 'For type=voucher abocard systems: The total discount value assigned to the abocard',
    example: 2.00,
    type: 'number',
    minimum: 0,
    multipleOf: 0.01
  }),
  total_value: oneOf({
    description: 'For type=voucher abocard systems: The total value of the abocard (selling price plus discount)',
    example: 9.99,
    type: 'number',
    minimum: 0,
    multipleOf: 0.01
  }),
  units: oneOf({
    description: 'For type=voucher abocard systems: The amount of vouchers that we issue on creation of the abocard',
    type: 'number',
    minimum: 0
  }),
  voucher_value_per_unit: oneOf({
    description: 'For type=voucher abocard systems: The voucher value per unit (when system_type == "voucher")',
    example: 3,
    type: 'number',
    minimum: 0,
    multipleOf: 0.01
  }),
  discount_value_per_unit: oneOf({
    description: 'For type=voucher abocard systems: The discount value per unit',
    example: 1.33,
    type: 'number',
    minimum: 0,
    multipleOf: 0.01
  }),
  locations: oneOf({
    description: 'Locations where abocard system is applicable',
    example: ['6d541143-2ada-4ece-9cc1-1260e7e5f718'],
    type: 'array',
    items: {
      type: 'string',
      format: 'uuid'
    }
  }),
  location_groups: oneOf({
    description: 'Location groups where abocard system is applicable',
    example: ['25812497-4559-458c-ab0e-faa93e513d3e'],
    type: 'array',
    items: {
      type: 'string',
      format: 'uuid'
    }
  })
}

const response = {
  ...baseObject,
  deleted: {
    type: 'boolean'
  },
  ...request
}

module.exports = {
  request,
  response,
  required: [
    'system_type',
    'name'
  ]
}
