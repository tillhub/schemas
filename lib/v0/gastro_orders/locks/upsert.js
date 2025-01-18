const base = require('./base')

module.exports = {
  request: {
    $id: 'https://schemas.tillhub.com/v1/gastro_orders.locks.upsert.request.schema.json',
    $schema: 'http://json-schema.org/draft-07/schema#',
    type: 'object',
    additionalProperties: false,
    required: ['register_id', 'branch_id', 'cashier_id', 'order_date', 'expires_at', 'status', 'revision'],
    properties: base
  },
  response: {
    $id: 'https://schemas.tillhub.com/v1/gastro_orders.locks.upsert.response.schema.json',
    $schema: 'http://json-schema.org/draft-07/schema#',
    type: 'object',
    additionalProperties: false,
    required: ['register_id', 'branch_id', 'cashier_id', 'order_date', 'expires_at', 'status', 'revision'],
    properties: base
  }
}
