const { oneOf } = require('../../../helpers/payload-or-null')

module.exports = {
  description: 'Expenses grouped by expense fa_account',
  additionalProperties: false,
  type: 'object',
  required: [
    'fa_account',
    'amount'
  ],
  properties: {
    client_id: {
      ...oneOf({
        type: 'string',
        example: 'd0d40841-b1a7-438a-9d1e-2bfec590d2e3',
        minLength: 6,
        maxLength: 64,
        description: 'A implementer defined identifier. This can be used for local resource matching and has no business implication.'
      }),
      default: null
    },
    fa_account: {
      type: 'string',
      example: '1505',
      description: 'Custom identifier for the expense financial account (number)'
    },
    name: {
      ...oneOf({
        type: 'string',
        example: 'Berlin cash deposit account',
        description: 'Custom identifier for the expense financial accounts name'
      })
    },
    amount: {
      type: 'integer',
      example: 1850,
      description: 'The per fa_account daily expense amount in \'cents\'-format, 1233 == 12.33€ '
    }
  }
}
