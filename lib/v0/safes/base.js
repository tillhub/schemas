const { oneOf } = require('../../helpers/payload-or-null')
const currencyAmounts = require('../../common/currency_amounts')

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
    description: 'Upper capacity or safety limit per currency',
    ...oneOf({
      ...currencyAmounts
    })
  },
  limit_lower: {
    description: 'Lower safety limit per currency',
    ...oneOf({
      ...currencyAmounts
    })
  },
  items: {
    description: 'Current cash amount stored in the safe per currency',
    ...oneOf({
      ...currencyAmounts
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
