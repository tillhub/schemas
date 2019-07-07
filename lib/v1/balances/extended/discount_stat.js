const { oneOf } = require('../../../helpers/payload-or-null')
const currencyAmountObject = require('../../../common/currency_amount')

module.exports = {
  description: 'Extended balance statistics - discount per source.',
  additionalProperties: false,
  type: 'object',
  required: [
    'name',
    'end_date'
  ],
  properties: {
    source_id: {
      default: null,
      ...oneOf({
        type: 'string',
        format: 'uuid',
        description: 'The applicable Tillhub discount.',
        example: 'a5380b42-6025-49de-bb1d-c9357df96506'
      })
    },
    name: {
      type: 'string',
      description: 'Name of the discount source'
    },
    amount: {
      description: 'Total amount of disocunt within the balance.',
      ...oneOf({
        ...currencyAmountObject
      })
    },
    count: {
      description: 'Total count of this discount within the balance.',
      ...oneOf({
        type: 'integer',
        minimum: 0
      })
    }
  }
}
