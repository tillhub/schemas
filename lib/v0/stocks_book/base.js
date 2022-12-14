const { oneOf } = require('../../helpers/payload-or-null')
const baseObject = require('../../common/base')
const locationType = require('../../common/location_type')
const baseProduct = require('../../v1/products/base').response
const baseBranch = require('../../v0/branches/base')

const simple = {
  metadata: oneOf({
    type: 'object'
  }),
  qty: {
    description: 'The quantity of product remain after book',
    example: 11,
    type: 'number'
  },
  qty_change: {
    description: 'The quantity change with the book',
    example: -2,
    type: 'number'
  },
  product: {
    description: 'The product UUID',
    example: 'b98992bf-52b8-49e5-a44c-9e20eb921422',
    type: 'string',
    format: 'uuid'
  },
  branch: {
    description: 'The branch UUID (use location instead)',
    deprecated: true,
    example: '3f7d26f4-96ff-45b2-8fce-a5c0ca6040b2',
    type: 'string',
    format: 'uuid'
  },
  status: oneOf({
    description: 'The status of the product',
    type: 'string',
    enum: [
      'available'
    ]
  }),
  location: {
    description: 'Alphanumerical UUID of the location, e.g. branch or warehouse',
    example: '5b26131d-95e8-49a0-a9b4-58397569bba8',
    type: 'string',
    format: 'uuid'
  },
  location_type: locationType,
  from: {
    description: 'Alphanumerical UUID of the stock source location',
    example: '75941a1a-01b0-47b8-806b-83bfa68f3bea',
    type: 'string',
    format: 'uuid'
  },
  to: {
    description: 'Alphanumerical UUID of the stock target location',
    example: '7b8806e7d-810f-4e18-b049-8e2cc6134a41',
    type: 'string',
    format: 'uuid'
  },
  channel: oneOf({
    description: 'The channel from which stock deduction were made',
    type: 'string',
    enum: [
      'transfer',
      'transactions',
      'delivery_notes'
    ]
  }),
  purchase: oneOf({
    description: 'The purchase object data',
    deprecated: true,
    type: 'object'
  }),
  reason: oneOf({
    description: 'Alphanumerical UUID of the reason',
    example: 'a1c1d0c6-f38b-4d89-ae26-7f1aea34985c',
    type: 'string',
    format: 'uuid'
  }),
  comments: oneOf({
    description: 'Additional comments for stock book',
    example: 'Actualized due to inventarisation',
    type: 'string',
    maxLength: 2048
  }),
  images: oneOf({
    description: 'Images associated with stock book',
    type: 'array',
    items: {
      type: 'string',
      minLength: 1
    }
  }),
  type: {
    description: 'The type of stock book',
    type: 'string',
    enum: [
      'add',
      'deduct',
      'goods_in',
      'goods_out',
      'relocation',
      'sale',
      'cancellation',
      'refund',
      'delivery_note',
      'delivery_note_refund',
      'delivery_note_cancellation'
    ]
  }
}

module.exports.simple = simple

module.exports.embedded = {
  ...simple,
  product: oneOf([simple.product, {
    type: 'object',
    additionalProperties: false,
    properties: {
      ...baseObject(),
      ...baseProduct
    }
  }]),
  location: oneOf([simple.location, {
    type: 'object',
    additionalProperties: false,
    properties: {
      ...baseObject(),
      ...baseBranch
    }
  }]),
  from: oneOf([simple.from, {
    type: 'object',
    additionalProperties: false,
    properties: {
      ...baseObject(),
      ...baseBranch
    }
  }]),
  to: oneOf([simple.to, {
    type: 'object',
    additionalProperties: false,
    properties: {
      ...baseObject(),
      ...baseBranch
    }
  }])
}
