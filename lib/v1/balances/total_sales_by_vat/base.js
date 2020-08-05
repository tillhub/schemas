module.exports = {
  description: 'Total sales by VAT (gross and net).',
  additionalProperties: false,
  type: 'object',
  required: [
    'vat_amount',
    'gross',
    'net'
  ],
  properties: {
    vat_amount: {
      type: 'number',
      description: 'The VAT rate of this group. E.g. 0.19 for 19% German VAT.',
      example: '0.19',
      minimum: 0,
      maximum: 1,
      multipleOf: 0.001
    },
    gross: {
      default: 0,
      description: 'The total amount of transactions by vat gross.',
      type: 'number',
      minimum: 0,
      maximum: 1000000,
      multipleOf: 0.01
    },
    net: {
      default: 0,
      description: 'The total amount of transactions by vat net.',
      type: 'number',
      minimum: 0,
      maximum: 1000000,
      multipleOf: 0.01
    }
  }
}
