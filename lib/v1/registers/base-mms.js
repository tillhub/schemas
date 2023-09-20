const { oneOf } = require('../../helpers/payload-or-null')

module.exports = {
  register_id: {
    description: 'The id of the parent register.',
    type: 'string',
    format: 'uuid'
  },
  mms_id: oneOf({
    description: 'The id of the register that identifies it in Mms.',
    type: 'string',
    format: 'uuid'
  }),
  created_by: oneOf({
    description: 'Who created the register in Mms.',
    type: 'string',
    maxLength: 255,
    minLength: 1
  }),
  updated_by: oneOf({
    description: 'Who updated the register for the last time in Mms.',
    type: 'string',
    maxLength: 255,
    minLength: 1
  }),
  deleted_by: oneOf({
    description: 'Who deleted the register in Mms.',
    type: 'string',
    maxLength: 255,
    minLength: 1
  }),
  scope: oneOf({
    description: 'The scope from Mms.',
    type: 'string',
    format: 'uuid'
  }),
  attributes: oneOf({
    description: 'The attributes of the register.',
    type: 'object'
  }),
  state: oneOf({
    description: 'The state.',
    type: 'string',
    maxLength: 255,
    minLength: 1
  }),
  type: oneOf({
    description: 'The type.',
    type: 'string',
    maxLength: 255,
    minLength: 1
  }),
  enable_cross_channel_referencing: {
    type: 'boolean',
    default: false
  },
  key_pairs: oneOf({
    type: 'array',
    items: {
      type: 'object'
    }
  }),
  payment_products: oneOf({
    type: 'array',
    items: {
      type: 'object'
    }
  }),
  terminal_id: oneOf({
    description: 'Identification for the payment terminal Id',
    type: 'string',
    maxLength: 255,
    minLength: 1
  }),
  urls: oneOf({
    type: 'array',
    items: {
      type: 'string'
    }
  }),
  website: oneOf({
    description: 'The website.',
    type: 'string',
    maxLength: 255,
    minLength: 1
  }),
  max_amount_per_txn: oneOf({
    type: 'number'
  }),
  max_amount_per_month: oneOf({
    type: 'number'
  }),
  average_amount_per_month: oneOf({
    type: 'number'
  }),
  average_count_per_month: oneOf({
    type: 'number'
  }),
  min_amount_per_month: oneOf({
    type: 'number'
  }),
  min_amount_per_txn: oneOf({
    type: 'number'
  }),
  pci_level: oneOf({
    description: 'The commercial register number.',
    type: 'string',
    maxLength: 255,
    minLength: 1
  }),
  price_information: oneOf({
    description: 'The price information of the register.',
    type: 'object'
  }),
  mcc: oneOf({
    description: 'The mcc of the register.',
    type: 'object'
  }),
  average_basket_size: oneOf({
    type: 'number'
  })
}
