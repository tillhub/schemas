const { oneOf, anyOf } = require('../../../helpers/payload-or-null')
const { externalCartBase, internalCartBase, cartOfIdsBase } = require('./base')

const generatedFields = {
  tax: { type: 'string' },
  taxes_options: {
    anyOf: [
      {
        type: 'array'
      },
      {
        type: 'object'
      },
      {
        type: 'null'
      }
    ]
  },
  attributes: {
    ...anyOf({
      type: 'object'
    })
  },
  description: {
    ...oneOf({
      type: 'string'
    })
  },
  id: {
    description: 'Identifier got on cart creation',
    type: 'string'
  }
}

const externalCart = {
  additionalProperties: false,
  type: 'object',
  properties: {
    ...generatedFields,
    ...externalCartBase
  },
  anyOf: [{
    required: [
      'client_id',
      'custom_id',
      'qty',
      'name',
      'currency',
      'amount',
      'tax'
    ]
  }, {
    required: [
      'client_id',
      'custom_id',
      'qty',
      'name',
      'currency',
      'amount',
      'vat_rate'
    ]
  }]
}

const cartOfIds = {
  additionalProperties: false,
  type: 'object',
  properties: {
    ...generatedFields,
    ...cartOfIdsBase
  },
  required: [
    'client_id',
    'product',
    'currency',
    'qty'
  ]
}

const internalCart = {
  additionalProperties: false,
  type: 'object',
  properties: {
    ...generatedFields,
    ...internalCartBase
  },
  anyOf: [{
    required: [
      'client_id',
      'product',
      'qty',
      'custom_id',
      'salesman_staff',
      'name',
      'discounts',
      'amount',
      'currency',
      'tax'
    ]
  }, {
    required: [
      'client_id',
      'product',
      'qty',
      'custom_id',
      'salesman_staff',
      'name',
      'discounts',
      'amount',
      'currency',
      'vat_rate'
    ]
  }]
}

module.exports = {
  type: 'array',
  minItems: 1,
  maxItems: 300,
  items: {
    anyOf: [
      // order is important: most specialized schema will win
      internalCart,
      externalCart,
      cartOfIds
    ]
  }
}
