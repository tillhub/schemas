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
        'checked_out_delivery_note',
        'checked_out_saved_cart'
      ]
    },
    id: {
      type: 'string',
      format: 'uuid',
      example: 'f2ac2cae-97ff-42a1-967b-0a35222ab6d1',
      description: 'A Tillhub cart or delivery note that this reference links to.'
    }
  }
}
