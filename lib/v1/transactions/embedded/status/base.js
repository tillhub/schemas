const { oneOf } = require('../../../../helpers/payload-or-null')

module.exports = {
  metadata: {
    ...oneOf({
      type: 'object',
      description: 'A container for storing arbitrary metadata. This might be altered by API.'
    }),
    default: null
  },
  dispatched_at: {
    ...oneOf({
      type: 'string',
      format: 'date-time',
      example: '2018-11-04T23:18:43.075Z',
      description: 'The actual time a dsipatchable transaction was dispatched, e.g. an invoice has been sent and results in an oblicgation from that time on.'
    })
  }
}
