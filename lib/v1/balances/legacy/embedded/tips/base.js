const { oneOf } = require('../../../../../helpers/payload-or-null')

module.exports = {
  description: 'Tips grouped by staff',
  additionalProperties: false,
  type: 'object',
  required: [
    'staff',
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
    staff: {
      type: 'string',
      format: 'uuid',
      example: 'b3465a62-62e9-46de-9df7-4d3009c46068',
      description: 'The Tillhub staff (as salesman) resource ID.'
    },
    fa_account: {
      ...oneOf({
        type: 'string',
        example: '1505',
        description: 'Custom identifier for the tip financial account'
      }),
      default: null
    },
    amount: {
      type: 'integer',
      example: 1850,
      description: 'The per fa_account daily revenue amount (in cent-format: 1267 == 12.67€)'
    },
    template_number: {
      ...oneOf({
        type: 'string',
        example: '9977',
        description: 'Custom identifier the template - currently the product number from the template'
      }),
      default: null
    },
    vat_fa_account_number: {
      ...oneOf({
        type: 'string',
        example: '9977',
        description: 'Custom identifier for the VAT financial account'
      }),
      default: null
    },
    vat_percentage: {
      ...oneOf({
        type: 'integer',
        example: '1900',
        description: 'Millis representattion for the VAT percentage, 1900 == 19% == 0.19'
      }),
      default: null
    }
  }
}
