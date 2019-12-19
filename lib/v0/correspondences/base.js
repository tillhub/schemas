const { oneOf } = require('../../helpers/payload-or-null')

module.exports = {
  metadata: {
    description: 'Arbitrary user defined data.',
    ...oneOf([{
      type: 'object'
    }])
  },
  channel: {
    ...oneOf([{
      type: 'string',
      maxLength: 24,
      minLength: 1
    }])
  },
  recipient: {
    ...oneOf([{
      type: 'object'
    }])
  },
  sender: {
    ...oneOf([{
      type: 'object'
    }])
  },
  payload_type: {
    ...oneOf([{
      type: 'string',
      maxLength: 24,
      minLength: 1
    }])
  },
  payload: {
    ...oneOf([{
      type: 'object'
    }])
  },
  channel_message: {
    ...oneOf([{
      type: 'object'
    }])
  },
  customer: {
    type: 'string',
    format: 'uuid'
  },
  resource_type: {
    ...oneOf([{
      type: 'string',
      maxLength: 24,
      minLength: 1
    }])
  },
  resource: {
    ...oneOf([{
      type: 'string',
      format: 'uuid'
    }])
  },
  sent_at: {
    ...oneOf({
      type: 'string',
      format: 'date-time'
    })
  },
  delivered_at: {
    ...oneOf({
      type: 'string',
      format: 'date-time'
    })
  },
  status: {
    ...oneOf([{
      type: 'string',
      enum: [
        'dispatched',
        'send_attempted',
        'send_failed',
        'received',
        'bounced',
        'opened',
        'blocked'
      ]
    }])
  },
  status_details: {
    ...oneOf([{
      type: 'object'
    }])
  },
  type: {
    ...oneOf([{
      type: 'string',
      maxLength: 36,
      minLength: 1
    }])
  }
}
