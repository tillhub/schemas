
const { oneOf } = require('../../helpers/payload-or-null')
const address = require('../../common/address')

module.exports = {
  order: {
    description: 'the reference to a Tillhub order',
    oneOf: [
      {
        type: 'string',
        format: 'uuid'
      },
      {
        type: 'null'
      }
    ]
  },
  open: {
    description: 'the \'open\' status flag',
    type: 'boolean',
    default: 'true'
  },
  deleted: {
    description: 'the \'deleted\' status flag',
    type: 'boolean',
    default: 'false'
  },
  ordered_at: {
    oneOf: [
      {
        type: 'string',
        format: 'date-time'
      },
      {
        type: 'null'
      }
    ]
  },
  received: {
    description: 'the \'received\' status flag',
    type: 'boolean',
    default: 'false'
  },
  delivered: {
    description: 'the \'delivered\' status flag',
    type: 'boolean',
    default: 'false'
  },
  dispatched: {
    description: 'the \'delivered\' status flag',
    type: 'boolean',
    default: 'false'
  },
  revoked: {
    description: 'the \'revoked\' status flag',
    type: 'boolean',
    default: 'false'
  },
  received_at: {
    oneOf: [
      {
        type: 'string',
        format: 'date-time'
      },
      {
        type: 'null'
      }
    ]
  },
  dispatched_at: {
    oneOf: [
      {
        type: 'string',
        format: 'date-time'
      },
      {
        type: 'null'
      }
    ]
  },
  delivered_at: {
    oneOf: [
      {
        type: 'string',
        format: 'date-time'
      },
      {
        type: 'null'
      }
    ]
  },
  revoked_at: {
    description: 'time when a delivery has been rejected or cancelled',
    oneOf: [
      {
        type: 'string',
        format: 'date-time'
      },
      {
        type: 'null'
      }
    ]
  },
  comments: {
    oneOf: [
      {
        type: 'string',
        minLength: 1,
        maxLength: 4096
      },
      {
        type: 'null'
      }
    ]
  },
  from: {
    description: 'from which Tillhub resource, that is able to handle stock, a delivery is coming from. E.g. branch, warehouse, shelve, client',
    oneOf: [
      {
        type: 'string',
        format: 'uuid'
      },
      {
        type: 'null'
      }
    ]
  },
  to: {
    description: 'from which Tillhub resource, that is able to handle stock, a delivery is going to. E.g. branch, warehouse, shelve, client',
    oneOf: [
      {
        type: 'string',
        format: 'uuid'
      },
      {
        type: 'null'
      }
    ]
  },
  recipient: oneOf({
    ...address
  }),
  sender: oneOf({
    ...address
  }),
  metadata: {
    type: 'object'
  },
  orders: {
    description: 'a list of references to a number of orders',
    type: 'array',
    minItems: 1,
    items: {
      additionalProperties: false,
      type: 'object',
      required: [
        'id'
      ],
      properties: {
        id: {
          type: 'string',
          format: 'uuid'
        }
      }
    }
  },
  issuer: {
    type: 'object',
    maxProperties: 10
  },
  stock_mode: {
    oneOf: [
      {
        type: 'null'
      },
      {
        type: 'string',
        enum: [
          'never_out_of_stock',
          'proxy'
        ]
      }
    ]
  },
  status: {
    default: 'open',
    oneOf: [
      {
        type: 'null'
      },
      {
        type: 'string',
        enum: [
          'open',
          'in_progress',
          'dispatched',
          'delivered',
          'revoked'
        ]
      }
    ]
  }
}
