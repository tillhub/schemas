const { oneOf } = require('../../../helpers/payload-or-null')
const { dateRange, dayTimeSlots } = require('../../../common/date_time_constraints')

module.exports = {
  type: 'object',
  additionalProperties: false,
  properties: {
    product: {
      description: 'The reference to the product',
      type: 'string',
      format: 'uuid'
    },
    type: {
      description: 'Type of the product prices',
      type: 'string',
      enum: [
        'customer', // defined by pricebook when of type 'customer'
        'scaled', // defined by product
        'branch', // defined by product
        'time-based', // defined by pricebook-entry
        'location-based' // defined by pricebook-entry
      ],
      example: 'scaled'
    },
    created_at: {
      type: 'string',
      format: 'date-time',
      example: '2018-11-04T23:18:43.075Z'
    },
    updated_at: {
      type: 'string',
      format: 'date-time',
      example: '2018-11-04T23:18:43.075Z'
    },
    deleted: {
      type: 'boolean',
      default: false
    },
    net: {
      ...oneOf({
        description: 'The net sales price is the price without sales tax.',
        example: '27633.02',
        type: 'number',
        minimum: 0,
        maximum: 1000000,
        multipleOf: 0.01
      })
    },
    gross: {
      ...oneOf({
        description: 'The gross sales price is the price that the customer pays, including sales tax.',
        example: '27633.02',
        type: 'number',
        minimum: 0,
        maximum: 1000000,
        multipleOf: 0.01
      })
    },
    currency: {
      ...oneOf({
        type: 'string',
        description: 'The three letter [ISO currency](https://en.wikipedia.org/wiki/ISO_4217) of this item.',
        example: 'EUR',
        minLength: 3,
        maxLength: 3
      })
    },
    price_book: oneOf({
      description: 'The reference to the price book',
      type: 'string',
      format: 'uuid'
    }),
    quantity: oneOf({
      description: 'The price is applied if quantity of items in cart is bigger or equal to this number. If 0, then it represents default pricing.',
      type: 'number',
      minimum: 0,
      example: 0
    }),
    date_range: oneOf({
      description: 'a single range with optional start and end date',
      dateRange
    }),
    day_of_week: oneOf({
      type: 'object',
      description: 'specifies daytime slots based on weekdays',
      additionalProperties: false,
      required: [
        'enabled'
      ],
      properties: {
        enabled: {
          type: 'boolean',
          default: true
        },
        monday: dayTimeSlots,
        tuesday: dayTimeSlots,
        wednesday: dayTimeSlots,
        thursday: dayTimeSlots,
        friday: dayTimeSlots,
        saturday: dayTimeSlots,
        sunday: dayTimeSlots
      }
    })
  }
}
