const { oneOf } = require('../../../../../helpers/payload-or-null')

module.exports = {
  type: 'object',
  additionalProperties: false,
  description: 'Any applied addons as they happened at transaction creation time.',
  properties: {
    addon: oneOf({
      type: 'string',
      format: 'uuid',
      description: 'The Tillhub addon resource reference ID.',
      example: 'ac847a66-d7dc-4ac2-8e8a-c44920e1f220'
    }),
    amount_total: {
      description: 'The effective amount (unit-price * quantity) of this addon.',
      type: 'number',
      minimum: -1000000,
      maximum: 1000000,
      multipleOf: 0.01
    },
    currency: {
      type: 'string',
      description: 'The ISO currency code for the addon\'s price.',
      example: 'EUR',
      minLength: 3,
      maxLength: 3
    },
    quantity: {
      type: 'number',
      description: 'The quantity of this addon, e.g. 1 pc or 0.125kg.',
      example: '3.6',
      minimum: -32767.000,
      maximum: 32767.000,
      multipleOf: 0.001
    },
    name: oneOf({
      description: 'The name of this addon, e.g. "Extra Mushrooms".',
      type: 'string',
      minLength: 1,
      maxLength: 256
    }),
    product: oneOf({
      type: 'string',
      format: 'uuid',
      description: 'The Tillhub product resource reference ID.',
      example: 'ff847a44-07dc-4ac2-8e8a-c44920e1f220'
    })
  },
  required: [
    'addon',
    'price',
    'currency',
    'quantity'
  ]
}
