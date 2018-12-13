module.exports = {
  type: 'object',
  description: 'Reference to a very different type of object (e.g. transaction to invoice)',
  additionalProperties: false,
  required: [
    'type'
  ],
  properties: {
    type: {
      type: 'string',
      description: 'The type of reference',
      enum: [
        'invoice'
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
    }
  }
}
