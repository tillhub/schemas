const { oneOf } = require('../../helpers/payload-or-null')
const baseObject = require('../../common/base')
const voucher = require('../vouchers/base')

const request = {
  abocard_system: {
    description: 'The abocard system UUID abocard belongs to',
    example: '3610eb8a-2d21-4034-9aa6-0a097a2ce5f2',
    type: 'string',
    format: 'uuid'
  },
  active: {
    description: 'The abocard is active',
    example: true,
    type: 'boolean'
  },
  customer: {
    description: 'The customer UUID it was handed out for',
    example: 'ad572a0d-301a-4270-8a49-5f720f2b277d',
    type: 'string',
    format: 'uuid'
  },
  valid_until: oneOf({
    description: 'When the abocard expires',
    example: '2021-09-23T08:19:02.059Z',
    type: 'string',
    format: 'date-time'
  }),
  configuration: oneOf({
    description: 'A snapshot of the configuration the abocard has been created with',
    type: 'object',
    additionalProperties: true,
    required: []
  }),
  vouchers: oneOf({
    description: 'Vouchers for the abocard in case when abocard system has system_type == "voucher"',
    type: 'array',
    items: voucher
  })
}

const response = {
  ...baseObject(),
  deleted: {
    description: 'The abocard is deleted',
    example: true,
    type: 'boolean'
  },
  ...request
}

module.exports = {
  request,
  response,
  required: [
    'abocard_system',
    'valid_until'
  ]
}
