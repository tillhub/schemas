const { oneOf } = require('../../helpers/payload-or-null')

module.exports = {
  items: {
    type: 'array',
    minItems: 1,
    items: {
      type: 'object',
      additionalProperties: false,
      required: [
        'amount',
        'unit',
        'operation'
      ],
      properties: {
        amount: {
          type: 'number',
          multipleOf: 0.01,
          minimum: 0
        },
        unit: {
          type: 'string',
          description: 'Custom unit name. Default is the currency',
          examples: [
            'miles',
            'points',
            'stamps'
          ],
          minLength: 1,
          maxLength: 128
        },
        operation: {
          type: 'string',
          description: 'Type of operation that changes the loyalty_values.',
          examples: [
            'increment',
            'decrease',
            'spend',
            'book'
          ],
          minLength: 1,
          maxLength: 128
        },
        product: oneOf({
          type: 'string',
          description: 'UUID of the product that this value change relates to.',
          format: 'uuid'
        }),
        transaction: oneOf({
          type: 'string',
          description: 'UUID of the transaction that this value change relates to.',
          format: 'uuid'
        }),
        cart_item: oneOf({
          type: 'string',
          description: 'UUID of the cart_item that this value change relates to.',
          format: 'uuid'
        }),
        register: oneOf({
          type: 'string',
          description: 'UUID of the register where this value change was initiated.',
          format: 'uuid'
        }),
        register_number: oneOf({
          description: 'The register number (not uuid).',
          type: 'number'
        }),
        issuer: oneOf({
          type: 'string',
          description: 'UUID of the issuer who initiated this value change.',
          format: 'uuid'
        }),
        metadata: oneOf({
          type: 'object'
        }),
        related_to: oneOf({
          type: 'object'
        })
      }
    }
  }
}
