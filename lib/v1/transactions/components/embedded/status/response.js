const base = require('./base')
const { oneOf } = require('../../../../../helpers/payload-or-null')
const dateObject = require('../../../../../common/date_object')
const signatureResponse = require('../signature/response')

module.exports = {
  type: 'object',
  additionalProperties: false,
  required: [],
  properties: {
    id: {
      type: 'string',
      format: 'uuid',
      description: 'The item resource reference ID.'
    },
    created_at: {
      description: 'The server creation time of this status.',
      ...dateObject
    },
    updated_at: {
      description: 'The server update time of this status.',
      ...dateObject
    },
    signed_at: {
      ...oneOf({
        description: 'A signing system defined compliant date object. The date will be set after having fully signed this transaction.',
        ...dateObject
      })
    },
    signature: {
      ...oneOf({
        description: 'The core fiscal signature data.',
        ...signatureResponse
      })
    },
    ...base
  }
}
