const { internalCartBase, cartOfIdsBase, externalCartBase } = require('./base')

const externalCart = {
  additionalProperties: false,
  type: 'object',
  properties: externalCartBase,
  anyOf: [{
    required: [
      'custom_id',
      'qty',
      'name',
      'currency',
      'amount',
      'tax'
    ]
  }, {
    required: [
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
  properties: cartOfIdsBase,
  required: [
    'product',
    'currency',
    'qty'
  ]
}

const internalCart = {
  additionalProperties: false,
  type: 'object',
  properties: internalCartBase,
  anyOf: [{
    required: [
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
  minItems: 0,
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
