const orderItem = require('./items').create
const address = require('../../common/address')

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
      type: 'object',
      additionalProperties: false,
      properties: {
        address
      }
    },
    sender: {
      type: 'object',
      properties: {
        address
      }
    },
    direction: {
      oneOf: [
        {
          type: 'string',
          enum: [
            'incoming',
            'outgoing'
          ]
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
    },
    issuer: {
      type: 'object',
      maxProperties: 10
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
            'finalized'
          ]
        }
      ]
    }
  }
}
