const { oneOf } = require('../../../../../helpers/payload-or-null')

module.exports = {
  metadata: {
    ...oneOf({
      type: 'object',
      description: 'A container for storing arbitrary metadata. This might be altered by API.'
    }),
    default: null
  },
  status: { // yes, it is status.status
    type: 'string',
    description: 'The current signing status of this transaction. A regular transaction will receive the status `complete` immediately. When signing is requested `complete` will only be assigned after signing.',
    enum: [
      'signing_requested',
      'complete'
    ]
  },
  signature_type: {
    ...oneOf({
      type: 'string',
      description: 'Any allowed singing system provider as type.',
      enum: [
        'fiskaltrust',
        'tse_fiskaly',
        'tse_epson',
        'fr_NF525'
      ]
    })
  }
}
