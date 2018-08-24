
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
    desciption: 'the \'open\' status flag',
    type: 'boolean',
    default: 'true'
  },
  deleted: {
    desciption: 'the \'deleted\' status flag',
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
    desciption: 'the \'received\' status flag',
    type: 'boolean',
    default: 'false'
  },
  delivered: {
    desciption: 'the \'delivered\' status flag',
    type: 'boolean',
    default: 'false'
  },
  dispatched: {
    desciption: 'the \'delivered\' status flag',
    type: 'boolean',
    default: 'false'
  },
  revoked: {
    desciption: 'the \'revoked\' status flag',
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
    descrption: 'from which Tillhub resource, that is able to handle stock, a delivery is coming from. E.g. branch, warehouse, shelve, client',
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
    descrption: 'from which Tillhub resource, that is able to handle stock, a delivery is going to. E.g. branch, warehouse, shelve, client',
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
  recipient: {
    oneOf: [
      address,
      {
        type: 'null'
      }
    ]
  },
  sender: {
    oneOf: [
      address,
      {
        type: 'null'
      }
    ]
  },
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
          'never_out_of_stock'
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
          'received',
          'revoked'
        ]
      }
    ]
  }
}
