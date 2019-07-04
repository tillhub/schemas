const { oneOf } = require('../../helpers/payload-or-null')

module.exports = {
  items: {
    type: 'array',
    minLength: 1,
    items: {
      type: 'object',
      additionalProperties: false,
      properties: {
        operation: {
          type: 'string',
          enum: [
            'increment',
            'increment_failed',
            'decrement',
            'decrement_failed',
            'spend',
            'spend_failed',
            'book',
            'book_failed',
            'deactivate_card',
            'deactivate_card_failed',
            'deactivate_account',
            'deactivate_account_failed',
            'delete_account',
            'delete_account_failed',
            'delete_card',
            'delete_card_failed',
            'lookup_card',
            'lookup_card_failed',
            'create_account',
            'create_account_failed',
            'create_card',
            'create_card_failed',
            'update_system',
            'update_system_failed',
            'update_account',
            'update_account_failed',
            'update_card',
            'update_card_failed',
            'get_one_card',
            'get_one_card_failed',
            'get_one_value',
            'get_one_value_failed',
            'create_values',
            'create_values_failed',
            'increment_through_transaction_failed'
          ]
        },
        loyalty_account: oneOf({
          description: 'The uuid of the loyalty account that this log belongs to.',
          type: 'string',
          format: 'uuid',
          example: '936835f7-2d75-41d2-9001-38ed6e458328'
        }),
        loyalty_card: oneOf({
          description: 'The uuid of the loyalty card that this log belongs to.',
          type: 'string',
          format: 'uuid',
          example: '936835f7-2d75-41d2-9001-38ed6e458328'
        }),
        product: oneOf({
          description: 'The uuid of the product that this log belongs to.',
          type: 'string',
          format: 'uuid',
          example: '936835f7-2d75-41d2-9001-38ed6e458328'
        }),
        transaction: oneOf({
          description: 'The uuid of the transaction that this log belongs to.',
          type: 'string',
          format: 'uuid',
          example: '936835f7-2d75-41d2-9001-38ed6e458328'
        }),
        cart_item: oneOf({
          description: 'The uuid of the cart_item that this log belongs to.',
          type: 'string',
          format: 'uuid',
          example: '936835f7-2d75-41d2-9001-38ed6e458328'
        }),
        register: oneOf({
          description: 'The uuid of the register that this log belongs to.',
          type: 'string',
          format: 'uuid',
          example: '936835f7-2d75-41d2-9001-38ed6e458328'
        }),
        register_number: oneOf({
          description: 'The register number (not uuid).',
          type: 'number'
        }),
        issuer: oneOf({
          description: 'The uuid of the staff that this log belongs to.',
          type: 'string',
          format: 'uuid',
          example: '936835f7-2d75-41d2-9001-38ed6e458328'
        }),
        metadata: oneOf({
          type: 'object'
        }),
        related_to: oneOf({
          type: 'object'
        }),
        amount: oneOf({
          type: 'number'
        }),
        unit: oneOf({
          type: 'string'
        })
      }
    }
  }
}
