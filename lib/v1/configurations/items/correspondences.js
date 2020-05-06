const { oneOf } = require('../../../helpers/payload-or-null')

const correspondencesFlags = {
  type: 'object',
  description: 'defines flags that control the client\'s email API requests',
  properties: {
    only_correspondences: oneOf({
      description: 'If true - must be reported by the client and will by that skip direct email sending.',
      type: 'boolean',
      default: false
    }),
    strict_mode: oneOf({
      description: 'If true - client must report the transaction\'s client UUID and the transaction\'s UUID if available.',
      type: 'boolean',
      default: false
    })
  }
}

module.exports = {
  type: 'object',
  description: 'defines flags that control the client\'s email API requests per receipt type',
  properties: {
    receipts: {
      ...correspondencesFlags
    },
    invoices: {
      ...correspondencesFlags
    }
  }
}
