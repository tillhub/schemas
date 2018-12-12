module.exports = {
  type: 'object',
  description: 'Reference to a very different type of object (e.g. transaction to invoice)',
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
        'invoice'
      ]
    },
    id: {
      type: 'string',
      format: 'uuid',
      example: 'f2ac2cae-97ff-42a1-967b-0a35222ab6d1',
      description: 'A Tillhub resource that this reference links to.'
    }
  }
}
