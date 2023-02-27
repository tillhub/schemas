const { oneOf } = require('../helpers/payload-or-null')
const { timezone } = require('../common/timezones')

const dateRange = {
  type: 'object',
  additionalProperties: false,
  required: ['enabled'],
  properties: {
    enabled: {
      type: 'boolean',
      description: 'disables or activates the date range',
      default: true
    },
    tz: oneOf({
      deprecated: true,
      type: 'string',
      description: 'specifies the timezone for a data range',
      enum: timezone.iana,
      default: null
    }),
    start: oneOf({
      type: 'object',
      additionalProperties: false,
      required: ['enabled'],
      properties: {
        enabled: {
          type: 'boolean',
          description: 'disables or activates the start of a date range',
          default: true
        },
        value: oneOf({
          type: 'string',
          format: 'date-time',
          description: 'starting time of a date range',
          example: '2021-09-23T08:19:02.059Z',
          default: null // == distant past
        })
      }
    }),
    end: oneOf({
      type: 'object',
      additionalProperties: false,
      required: ['enabled'],
      properties: {
        enabled: {
          type: 'boolean',
          description: 'disables or activates the end of a date range',
          default: true
        },
        value: oneOf({
          type: 'string',
          format: 'date-time',
          description: 'starting time of a date range',
          example: '2021-10-03T14:20:31.011Z',
          default: null // == distant future
        })
      }
    })
  }
}

const dayTimeSlot = {
  type: 'object',
  additionalProperties: false,
  required: ['enabled'],
  properties: {
    enabled: {
      type: 'boolean',
      description: 'disables or activates a set slot',
      default: true
    },
    start: oneOf({
      type: 'string',
      pattern: '([0-1][0-9]|2[0-3]):[0-5][0-9]',
      example: '08:30',
      description: 'daytime for the start of an active time slot',
      default: '00:00'
    }),
    end: oneOf({
      type: 'string',
      pattern: '([0-1][0-9]|2[0-3]):[0-5][0-9]',
      example: '09:15',
      description: 'daytime for the end of an active time slot',
      default: '23:59'
    })
  }
}

const dayTimeSlots = oneOf({
  type: 'object',
  additionalProperties: false,
  properties: {
    slots: oneOf({
      description: 'A number of timeslots for a specific day. Not enforced - but overlaps are not encouraged',
      type: 'array',
      items: dayTimeSlot
    })
  }
})
module.exports.dateRange = oneOf({
  description: 'a single range with optional start and end date',
  dateRange
})

module.exports.dayOfWeek = oneOf({
  type: 'object',
  description: 'specifies daytime slots based on weekdays',
  additionalProperties: false,
  required: ['enabled'],
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
