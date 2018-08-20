const orderItem = require('./items').create

module.exports = {
  $id: 'https://schemas.tillhub.com/v0/orders.create.request.schema.json',
  $schema: 'http://json-schema.org/draft-07/schema#',
  additionalProperties: false,
  type: 'object',
  properties: {
    id: {
      description: 'Alphanumeric client ID of the product',
      anyOf: [
        {
          type: 'string'
        },
        {
          type: 'null'
        }
      ]
    },
    open: {
      description: 'the string representation of boolean values as `false` or `true`',
      anyOf: [
        {
          type: 'boolean'
        },
        {
          type: 'null'
        }
      ]
    },
    deleted: {
      description: 'the string representation of boolean values as `false` or `true`',
      anyOf: [
        {
          type: 'boolean'
        },
        {
          type: 'null'
        }
      ]
    },
    ordered_at: {
      description: 'ISO string (UTC) with timezone',
      example: '2018-07-11T09:30:43.382Z',
      anyOf: [
        {
          type: 'string'
        },
        {
          type: 'null'
        }
      ]
    },
    finalized_at: {
      description: 'ISO string (UTC) with timezone',
      example: '2018-07-11T09:30:43.382Z',
      anyOf: [
        {
          type: 'string'
        },
        {
          type: 'null'
        }
      ]
    },
    order_items: {
      type: 'array',
      minItems: 1,
      items: orderItem
    }
  }
}
