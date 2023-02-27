const { oneOf } = require('../helpers/payload-or-null')
const { dateRange, dayOfWeek } = require('./time_slot')

module.exports = {
  type: 'object',
  additionalProperties: false,
  properties: {
    scheduled: oneOf({
      type: 'object',
      description: 'specifies date ranges and daytime slots for defining active states based on dates',
      additionalProperties: false,
      properties: {
        date_range: dateRange,
        day_of_week: dayOfWeek
      }
    })
  }
}
