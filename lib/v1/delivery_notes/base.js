const { oneOf } = require('../../helpers/payload-or-null')
const items = require('./items').create

module.exports = {
  date: {
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
  invoiced_at: {
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
  refunded_at: {
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
  done_at: {
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
  branch: {
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
  register: {
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
  cashier_staff: {
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
  temporary_staff: {
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
  currency: {
    oneOf: [
      {
        type: 'string',
        minLength: 3,
        maxLength: 3
      },
      {
        type: 'null'
      }
    ]
  },
  client_id: {
    oneOf: [
      {
        type: 'string',
        minLength: 12,
        maxLength: 64
      },
      {
        type: 'null'
      }
    ]
  },
  external_reference_id: {
    oneOf: [
      {
        type: 'string',
        maxLength: 128
      },
      {
        type: 'null'
      }
    ]
  },
  customer: {
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
  customer_name: {
    oneOf: [
      {
        type: 'string',
        maxLength: 64
      },
      {
        type: 'null'
      }
    ]
  },
  customer_description: {
    oneOf: [
      {
        type: 'string',
        maxLength: 128
      },
      {
        type: 'null'
      }
    ]
  },
  customer_number: {
    oneOf: [
      {
        type: 'string',
        maxLength: 128
      },
      {
        type: 'null'
      }
    ]
  },
  name: {
    oneOf: [
      {
        type: 'string',
        maxLength: 128
      },
      {
        type: 'null'
      }
    ]
  },
  description: {
    oneOf: [
      {
        type: 'string',
        maxLength: 512
      },
      {
        type: 'null'
      }
    ]
  },
  custom_id: {
    oneOf: [
      {
        type: 'string',
        minLength: 1,
        maxLength: 128
      },
      {
        type: 'null'
      }
    ]
  },
  barcode: {
    oneOf: [
      {
        type: 'string',
        maxLength: 128
      },
      {
        type: 'null'
      }
    ]
  },
  customer_receipt: {
    anyOf: [
      {
        type: 'string',
        maxLength: 16384
      },
      {
        type: 'null'
      }
    ]
  },
  merchant_receipt: {
    anyOf: [
      {
        type: 'string',
        maxLength: 16384
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
        maxLength: 4096
      },
      {
        type: 'null'
      }
    ]
  },
  items,
  metadata: oneOf({
    type: 'object',
    description: 'Additional meta data',
    properties: {
      customer: oneOf({
        type: 'object',
        description: 'Additional data for a customer',
        properties: {
          price_book: oneOf({
            type: 'string',
            format: 'uuid',
            description: 'The Tillhub pricebook resource asscociated with the customer at that moment',
            example: '512448db-5e6c-4fcf-bd70-f8a5e56fa269'
          })
        }
      })
    }
  })
}
