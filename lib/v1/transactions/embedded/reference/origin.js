const { oneOf } = require('../../../../helpers/payload-or-null')

module.exports = {
  type: 'object',
  description: 'Reference to a similar type of object (e.g. transaction to cart)',
  additionalProperties: false,
  required: [
    'type'
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
      // needs to be optional in case this reference was not yet synched with the API
      ...oneOf({
        type: 'string',
        format: 'uuid',
        example: 'f2ac2cae-97ff-42a1-967b-0a35222ab6d1',
        description: 'A Tillhub transaction that this reference links to.'
      }),
      default: null
    },
    custom_id: {
      // only used for references created on the client or externally
      ...oneOf({
        type: 'string',
        example: '278',
        description: 'The custom_id of a Tillhub transaction that this reference links to.'
      }),
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
