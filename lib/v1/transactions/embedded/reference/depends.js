module.exports = {
  type: 'object',
  description: 'Reference to the same type of object (e.g. transaction to pervious transaction)',
  additionalProperties: false,
  required: [
    'type'
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
      description: 'A Tillhub transaction that this reference links to.',
      default: null
    },
    custom_id: {
      type: 'string',
      example: '278',
      description: 'The custom_id of a Tillhub transaction that this reference links to.',
      default: null
    },
    date: {
      type: 'string',
      format: 'date-time',
      example: '2018-01-29T14:55:05.000Z',
      description: 'The date of a Tillhub transaction that this reference links to.'
    }
  }
}
