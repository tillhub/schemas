const { oneOf } = require('../../helpers/payload-or-null')

module.exports = {
  type: {
    type: 'string',
    enum: [
      'safe',
      'vault'
    ]
  },
  account_number: {
    type: 'string',
    minLength: 1,
    description: 'Financial account number of the safe, which is mutable and not deduplicated'
  },
  name: {
    ...oneOf({
      type: 'string',
      minLength: 1,
      maxLength: 128
    })
  },
  custom_id: {
    ...oneOf({
      type: 'string',
      minLength: 1,
      maxLength: 128
    })
  },
  cost_center: {
    ...oneOf({
      type: 'string',
      minLength: 1
    })
  },
  location: {
    ...oneOf({
      type: 'string',
      description: 'Alphanumeric ID of the location, e.g. branch, warehouse, or warehouse_shelf',
      format: 'uuid'
    })
  },
  state: {
    ...oneOf({
      type: 'object'
      // properties to follow...
    })
  },
  limit_upper: {
    ...oneOf({
      type: 'number',
      description: 'Maximum amount that can be booked into the safe',
      multipleOf: 0.01
    })
  },
  limit_lower: {
    ...oneOf({
      type: 'number',
      minimum: 0,
      description: 'Minimum amount that has to be present in the safe',
      multipleOf: 0.01
    })
  },
  items: {
    ...oneOf({
      type: 'array',
      description: 'Amount items that are stored by currency',
      minItems: 1,
      items: {
        type: 'object',
        additionalProperties: false,
        properties: {
          currency: {
            type: 'string',
            description: 'The three letter [ISO currency](https://en.wikipedia.org/wiki/ISO_4217) of this item.',
            example: '',
            minLength: 3,
            maxLength: 3
          },
          amount: {
            type: 'number',
            minimum: 0,
            multipleOf: 0.01
          }
        }
      }
    })
  },
  metadata: {
    ...oneOf({
      type: 'object'
    })
  },
  deleted: {
    ...oneOf({
      type: 'boolean'
    })
  },
  active: {
    ...oneOf({
      type: 'boolean'
    })
  }
}
