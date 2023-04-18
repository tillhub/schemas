const { oneOf } = require('../helpers/payload-or-null')
const { dateRange, dayTimeSlots } = require('./date_time_constraints')

module.exports = {
  type: 'object',
  additionalProperties: false,
  properties: {
    scheduled: oneOf({
      type: 'object',
      description: 'specifies date ranges and daytime slots for defining active states based on dates',
      additionalProperties: false,
      properties: {
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
    })
  }
}
