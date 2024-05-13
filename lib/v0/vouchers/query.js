module.exports = {
  start: {
    type: 'string',
    format: 'date-time'
  },
  cursor: {
    type: 'string'
  },
  cursor_field: {
    type: 'string'
  },
  limit: {
    type: 'string'
  },
  deleted: {
    type: 'string',
    enum: [
      'true',
      'false'
    ]
  },
  active: {
    type: 'string',
    enum: [
      'true',
      'false'
    ]
  },
  issuable: {
    type: 'string',
    enum: [
      'true',
      'false'
    ]
  },
  reissuable: {
    type: 'string',
    enum: [
      'true',
      'false'
    ]
  },
  restriction_single_transaction: {
    type: 'string',
    enum: [
      'true',
      'false'
    ]
  },
  partial_redemption: {
    type: 'string',
    enum: [
      'true',
      'false'
    ]
  },
  limited_to_region: {
    type: 'string',
    enum: [
      'true',
      'false'
    ]
  },
  refundable: {
    type: 'string',
    enum: [
      'true',
      'false'
    ]
  },
  mutable: {
    type: 'string',
    enum: [
      'true',
      'false'
    ]
  },
  exchange_for_cash: {
    type: 'string',
    enum: [
      'true',
      'false'
    ]
  },
  is_campaign: {
    type: 'string',
    enum: [
      'true',
      'false'
    ]
  },
  code: {
    type: 'string'
  },
  regions: {
    oneOf: [
      {
        type: 'array',
        minItems: 1,
        items: {
          type: 'string',
          length: 2
        }
      },
      {
        type: 'string',
        length: 2
      }
    ]
  },
  amount_from: {
    type: 'string',
    minLength: 1,
    maxLength: 15
  },
  amount_to: {
    type: 'string',
    minLength: 1,
    maxLength: 15
  },
  expires_at_start: {
    type: 'string',
    format: 'date-time'
  },
  expires_at_end: {
    type: 'string',
    format: 'date-time'
  }
}
