const commonResponse = require('../../common/response')
const { dateRange, dayOfWeek } = require('../../common/time_slot')
const { oneOf } = require('../../helpers/payload-or-null')
const base = require('../../v1/products/base').response
const price = require('../../v1/products/common/price')

const scaledPricing = {
  type: 'object',
  properties: {
    type: {
      type: 'string',
      description: 'determines if the pricing is time-related or quantitative.',
      enum: ['scaled'],
      default: 'scaled'
    },
    quantity: {
      type: 'number',
      minimum: 0,
      default: 0,
      description: 'If the quantity of the items in carts is bigger than equal to this number, then this pricing is active. If the quantity is 0, then it represents default pricing in the old schema.'
    },
    ...price,
    deleted: {
      type: 'boolean',
      description: 'Indicate if this record is deleted or not.'
    }
  }
}

const timeBasedPricing = {
  type: 'object',
  properties: {
    type: {
      type: 'string',
      description: 'determines if the pricing is time-related or quantitative.',
      enum: ['time-based'],
      default: 'time-based'
    },
    ...price,
    date_range: dateRange,
    day_of_week: dayOfWeek,
    deleted: {
      type: 'boolean',
      description: 'Indicate if this record is deleted or not.'
    }
  }
}

base.prices = oneOf({
  type: 'array',
  items: {
    anyOf: [scaledPricing, timeBasedPricing]
  }
})

module.exports = {
  $id: 'https://schemas.tillhub.com/v2/products.branch.response.schema.json',
  $schema: 'http://json-schema.org/draft-07/schema#',
  ...commonResponse({
    resultItems: {
      additionalProperties: false,
      type: 'object',
      properties: base
    }
  })
}
