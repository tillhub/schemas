const items = require('./items').create
module.exports = {
  $id: 'https://schemas.tillhub.com/v1/carts.create.request.schema.json',
  $schema: 'http://json-schema.org/draft-07/schema#',
  type: 'object',
  additionalProperties: false,
  required: [
    'items'
  ],
  properties: {
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
    custom_id: {
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
    cart_id: {
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
    metadata: {
      type: 'object'
    }
  }
}
