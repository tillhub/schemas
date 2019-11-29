const pick = require('just-pick')
const { oneOf } = require('../../../helpers/payload-or-null')
const voucherBase = require('../../vouchers/base')

module.exports = {
  description: 'Define voucher templates that can inherit attributes and be bound to e.g. creation actions.',
  type: 'object',
  additionalProperties: false,
  required: [
    'name',
    'attributes'
  ],
  properties: {
    id: {
      type: 'string',
      format: 'uuid'
    },
    name: {
      type: 'string',
      minLength: 1,
      maxLength: 256
    },
    description: {
      ...oneOf({
        type: 'string',
        minLength: 1,
        maxLength: 4096
      })
    },
    code_generation: {
      default: 'request',
      description: 'Information if code should be picked from existing barcodes (scan) or requested from the API (request)',
      ...oneOf({
        type: 'string',
        enum: [
          // 'scan' -> currently disabled
          'request'
        ]
      })
    },
    attributes: {
      type: 'object',
      additionalProperties: false,
      description: 'Inheritable properties from Tillhub Vouchers',
      required: [
        'format',
        'format_type'
      ],
      properties: pick(voucherBase, [
        'format',
        'format_type',
        'amount_max',
        'amount',
        'increment_amount_minimum',
        'currency',
        'issuable',
        'reissuable',
        'comment',
        'expires_at',
        'customer',
        'title',
        'partial_redemption',
        'active',
        'bound_to',
        'namespace',
        'type',
        'regions',
        'limited_to_region',
        'refundable',
        'mutable',
        'exchange_for_cash',
        'restriction_single_transaction',
        'is_campaign',
        'product'
      ])
    }
  }
}
