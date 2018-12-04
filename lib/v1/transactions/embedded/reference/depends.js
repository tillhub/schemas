module.exports = {
  type: 'object',
  additionalProperties: false,
  required: [
    'type',
    'id'
  ],
  properties: {
    type: {
      type: 'string',
      description: 'The type of reference',
      enum: [
        'cancelled_sale',
        'refunded_sale',
        'cancelled_expense',
        'cancelled_deposit',
        'cancelled_bank_expense',
        'cancelled_bank_deposit'
      ]
    },
    id: {
      type: 'string',
      format: 'uuid',
      example: 'f2ac2cae-97ff-42a1-967b-0a35222ab6d1',
      description: 'A Tillhub transaction that this reference links to.'
    }
  }
}
