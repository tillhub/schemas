const base = require('./base')
const defaultResponse = require('./default-response')
const templateBase = require('./items/template')
const voucherRequestBase = require('./items/voucher')
const voucherResponseBase = require('../vouchers/base')

/* ---------------- create voucher system ---------------- */
module.exports.request = {
  $id: 'https://schemas.tillhub.com/v0/voucher_systems.create.request.schema.json',
  $schema: 'http://json-schema.org/draft-07/schema#',
  additionalProperties: false,
  type: 'object',
  required: [
    'name'
  ],
  properties: base
}

module.exports.response = {
  $id: 'https://schemas.tillhub.com/v0/voucher_systems.create.response.schema.json',
  $schema: 'http://json-schema.org/draft-07/schema#',
  additionalProperties: true,
  type: 'object',
  required: [
    'id',
    'name'
  ],
  properties: defaultResponse
}

/* ---------------- create a voucher through a voucher system ---------------- */
module.exports.voucher = {
  request: {
    $id: 'https://schemas.tillhub.com/v0/voucher_systems.create.voucher.request.schema.json',
    $schema: 'http://json-schema.org/draft-07/schema#',
    ...voucherRequestBase
  },
  response: {
    $id: 'https://schemas.tillhub.com/v0/voucher_systems.create.voucher.response.schema.json',
    $schema: 'http://json-schema.org/draft-07/schema#',
    additionalProperties: false,
    type: 'object',
    required: [ 'id' ],
    properties: voucherResponseBase
  }
}

/* ---------------- create a template through a voucher system ---------------- */

module.exports.templates = {
  request: {
    $id: 'https://schemas.tillhub.com/v0/voucher_systems.create.templates.request.schema.json',
    $schema: 'http://json-schema.org/draft-07/schema#',
    ...templateBase
  },
  response: {
    $id: 'https://schemas.tillhub.com/v0/voucher_systems.create.templates.response.schema.json',
    $schema: 'http://json-schema.org/draft-07/schema#',
    ...templateBase,
    required: [
      ...templateBase.required,
      'id'
    ]
  }
}
