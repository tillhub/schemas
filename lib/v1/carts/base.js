const { oneOf } = require('../../helpers/payload-or-null')
const items = require('./items').create

module.exports = {
  date: {
    description: 'Date of this cart',
    example: '2022-02-20T19:41:07.736Z',
    ...oneOf({
      type: 'string',
      format: 'date-time'
    })
  },
  done_at: {
    description: 'Date when this cart was used in a transaction (currently). If date is not null, this cart must not be used.',
    example: '2022-02-21T16:14:55.076Z',
    ...oneOf({
      type: 'string',
      format: 'date-time'
    })
  },
  branch: {
    description: 'The branch cart belongs to',
    example: '0eb9ad65-63e5-445e-a7c2-3e13591011de',
    ...oneOf({
      type: 'string',
      format: 'uuid'
    })
  },
  register: {
    description: 'The register cart belongs to',
    example: 'ede968cc-1ea1-4710-8d81-97d5a5fb166e',
    ...oneOf({
      type: 'string',
      format: 'uuid'
    })
  },
  cashier_staff: {
    description: 'Cashier who handled the cart',
    example: 'bcd84d35-f887-4c35-bdad-291a154802a7',
    ...oneOf({
      type: 'string',
      format: 'uuid'
    })
  },
  temporary_staff: {
    description: 'Staff who was lending permissions temporarily (in case that \'cashier_staff\' did not have that permission)',
    example: 'f925ce8c-fd80-40e5-bac4-b269a04bda6f',
    ...oneOf({
      type: 'string',
      format: 'uuid'
    })
  },
  currency: {
    description: 'Currency being used',
    example: 'EUR',
    ...oneOf({
      type: 'string',
      minLength: 3,
      maxLength: 3
    })
  },
  custom_id: {
    description: 'User defined (human readable) identifier for the cart, e.g. counting number 1, 2, 3 ...',
    example: '17',
    ...oneOf({
      type: 'string',
      maxLength: 128
    })
  },
  client_id: {
    description: 'Producer side unique identifier to resolve downstream mapping targets, e.g. GUID or UUID',
    example: '00060968000420200624004214945',
    ...oneOf({
      type: 'string',
      minLength: 12,
      maxLength: 64
    })
  },
  cart_id: {
    description: 'Cart ID',
    example: '4553332',
    ...oneOf({
      type: 'string',
      maxLength: 128
    })
  },
  external_reference_id: {
    description: 'Cart ID in external system',
    example: '4433fg44ghnh4dfdf322',
    ...oneOf({
      type: 'string',
      maxLength: 128
    })
  },
  lps: {
    description: 'Lean Payment System: If TRUE the client application will process this cart with minimal validation and without forced property fetching. Use on at your own risk.',
    ...oneOf({
      type: 'boolean'
    })
  },
  instant_checkout: {
    description: 'If TRUE this cart will be checked out immediately and thus landing on the payment screen.',
    ...oneOf({
      type: 'boolean'
    })
  },
  immutable: {
    description: 'If TRUE this cart will not be editable, thus a user can not remove nor add new items.',
    ...oneOf({
      type: 'boolean'
    })
  },
  customer: {
    description: 'Customer ID cart belongs to',
    example: '55ec2da5-f9a4-4868-8f00-65ae0804a9d3',
    ...oneOf({
      type: 'string',
      format: 'uuid'
    })
  },
  customer_name: {
    description: 'Customer name',
    example: 'Morpheus',
    ...oneOf({
      type: 'string',
      maxLength: 64
    })
  },
  customer_description: {
    description: 'Customer description',
    example: 'Color pills seller',
    ...oneOf({
      type: 'string',
      maxLength: 128
    })
  },
  customer_number: {
    description: 'Customer number',
    example: '322223',
    ...oneOf({
      type: 'string',
      maxLength: 128
    })
  },
  name: {
    description: 'Cart name',
    example: 'For the chosen one',
    ...oneOf({
      type: 'string',
      maxLength: 128
    })
  },
  description: {
    description: 'Cart description',
    example: 'Red or blue',
    ...oneOf({
      type: 'string',
      maxLength: 512
    })
  },
  comments: {
    description: 'Additional comments',
    example: 'Just funny choice',
    ...oneOf({
      type: 'string',
      maxLength: 4096
    })
  },
  items,
  metadata: {
    description: 'Additional meta data',
    type: 'object'
  },
  opened_at: {
    description: 'Date when this cart was opened. If date is not null, this cart must not be used.',
    example: '2022-02-19T00:00:00.001Z',
    ...oneOf({
      type: 'string',
      format: 'date-time'
    })
  }
}
