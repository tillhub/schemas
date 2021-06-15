const { stripIndents } = require('common-tags')
const { oneOf } = require('../../../helpers/payload-or-null')
const orderItems = require('./items/base')

module.exports = {
  client_id: {
    type: 'string',
    description: stripIndents`
      The unique identifier within the application (delta producer)

      Note: this must be used as idempotency mechanism.
      `
  },
  order: {
    type: 'string',
    format: 'uuid',
    description: stripIndents`
      The unique identifier of the full order process.

      Note: This identifies all deltas and the final sale transaction (if one was made).
      `
  },
  index: {
    type: 'integer',
    example: 34,
    description: 'The index of this delta within the order [0,N]'
  },
  previous_client_id: oneOf({
    type: 'string',
    format: 'uuid',
    description: 'The client id of the previous delta object - NULL for the first.'
  }),
  dev_uuid: {
    type: 'string',
    example: '886eef646bc1c4d79eb8495321bbd472',
    description: 'Unique identifier for the physical device which is bound to a license'
  },
  branch: {
    type: 'string',
    format: 'uuid',
    description: 'Id of the Tillhub branch resource'
  },
  register: {
    type: 'string',
    format: 'uuid',
    description: 'Id of the Tillhub register resource'
  },
  date: {
    type: 'string',
    format: 'date-time',
    example: '2019-01-23 16:51:29.143+00',
    description: 'Creation date of this delta'
  },
  staff: {
    type: 'string',
    format: 'uuid',
    example: '5ad2351d-9a67-45f9-ad4f-0abcbefa9037',
    description: 'Id of Tillhub staff responsible for this delta'
  },
  type: {
    type: 'string',
    enum: [
      'save',
      'checkout',
      'cancel'
    ],
    description: 'Description of the context this delta was caused by'
  },
  items: {
    ...orderItems
  }
}
