const { oneOf } = require('../../../../../helpers/payload-or-null')

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
        'canceled_sale',
        'canceled_item',
        'refunded_sale',
        'refunded_item',
        'canceled_expense',
        'canceled_deposit',
        'canceled_bank_expense',
        'canceled_bank_deposit',
        'linked_item'
      ]
    },
    id: {
      // needs to be optional in case this reference was not yet synched with the API
      ...oneOf({
        type: 'string',
        format: 'uuid',
        example: 'f2ac2cae-97ff-42a1-967b-0a35222ab6d1', // is GUID for canceled_sale, cartItem._id (UUID) canceled_item
        description: 'A Tillhub transaction that this reference links to.'
      }),
      default: null
    },
    custom_id: {
      ...oneOf({
        type: 'string',
        example: '0814 QZXL', // transaction number for canceled_sale, client_id for canceled_item (sic!) - to be discussed
        description: 'The custom_id of a Tillhub transaction that this reference links to.'
      }),
      default: null
    },
    client_id: {
      // only used for references created on the client or externally // missing on iOS
      ...oneOf({
        type: 'string',
        example: '278d66eae23400bcdbe283764sc',
        description: 'The client_id of a Tillhub transaction or item that this reference links to.'
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
