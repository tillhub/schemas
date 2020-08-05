module.exports = {
  description: 'Transactions per the hour of day, represented by a 24-hour round hour as a key and transactions at this hour as a value.',
  example: '{"00": 15, "01": 30, "02": 24, ...}',
  additionalProperties: false,
  type: 'object',
  required: [
    '00',
    '01',
    '02',
    '03',
    '04',
    '05',
    '06',
    '07',
    '08',
    '09',
    '10',
    '11',
    '12',
    '13',
    '14',
    '15',
    '16',
    '17',
    '18',
    '19',
    '20',
    '21',
    '22',
    '23'
  ],
  properties: {
    '00': {
      default: 0,
      description: 'The number of transactions in 00:00 hours.',
      type: 'number',
      minimum: 0,
      maximum: 1000000,
      multipleOf: 1
    },
    '01': {
      default: 0,
      description: 'The number of transactions in 01:00 hours.',
      type: 'number',
      minimum: 0,
      maximum: 1000000,
      multipleOf: 1
    },
    '02': {
      default: 0,
      description: 'The number of transactions in 02:00 hours.',
      type: 'number',
      minimum: 0,
      maximum: 1000000,
      multipleOf: 1
    },
    '03': {
      default: 0,
      description: 'The number of transactions in 03:00 hours.',
      type: 'number',
      minimum: 0,
      maximum: 1000000,
      multipleOf: 1
    },
    '04': {
      default: 0,
      description: 'The number of transactions in 04:00 hours.',
      type: 'number',
      minimum: 0,
      maximum: 1000000,
      multipleOf: 1
    },
    '05': {
      default: 0,
      description: 'The number of transactions in 05:00 hours.',
      type: 'number',
      minimum: 0,
      maximum: 1000000,
      multipleOf: 1
    },
    '06': {
      default: 0,
      description: 'The number of transactions in 06:00 hours.',
      type: 'number',
      minimum: 0,
      maximum: 1000000,
      multipleOf: 1
    },
    '07': {
      default: 0,
      description: 'The number of transactions in 07:00 hours.',
      type: 'number',
      minimum: 0,
      maximum: 1000000,
      multipleOf: 1
    },
    '08': {
      default: 0,
      description: 'The number of transactions in 08:00 hours.',
      type: 'number',
      minimum: 0,
      maximum: 1000000,
      multipleOf: 1
    },
    '09': {
      default: 0,
      description: 'The number of transactions in 09:00 hours.',
      type: 'number',
      minimum: 0,
      maximum: 1000000,
      multipleOf: 1
    },
    '10': {
      default: 0,
      description: 'The number of transactions in 10:00 hours.',
      type: 'number',
      minimum: 0,
      maximum: 1000000,
      multipleOf: 1
    },
    '11': {
      default: 0,
      description: 'The number of transactions in 11:00 hours.',
      type: 'number',
      minimum: 0,
      maximum: 1000000,
      multipleOf: 1
    },
    '12': {
      default: 0,
      description: 'The number of transactions in 12:00 hours.',
      type: 'number',
      minimum: 0,
      maximum: 1000000,
      multipleOf: 1
    },
    '13': {
      default: 0,
      description: 'The number of transactions in 13:00 hours.',
      type: 'number',
      minimum: 0,
      maximum: 1000000,
      multipleOf: 1
    },
    '14': {
      default: 0,
      description: 'The number of transactions in 14:00 hours.',
      type: 'number',
      minimum: 0,
      maximum: 1000000,
      multipleOf: 1
    },
    '15': {
      default: 0,
      description: 'The number of transactions in 15:00 hours.',
      type: 'number',
      minimum: 0,
      maximum: 1000000,
      multipleOf: 1
    },
    '16': {
      default: 0,
      description: 'The number of transactions in 16:00 hours.',
      type: 'number',
      minimum: 0,
      maximum: 1000000,
      multipleOf: 1
    },
    '17': {
      default: 0,
      description: 'The number of transactions in 17:00 hours.',
      type: 'number',
      minimum: 0,
      maximum: 1000000,
      multipleOf: 1
    },
    '18': {
      default: 0,
      description: 'The number of transactions in 18:00 hours.',
      type: 'number',
      minimum: 0,
      maximum: 1000000,
      multipleOf: 1
    },
    '19': {
      default: 0,
      description: 'The number of transactions in 19:00 hours.',
      type: 'number',
      minimum: 0,
      maximum: 1000000,
      multipleOf: 1
    },
    '20': {
      default: 0,
      description: 'The number of transactions in 20:00 hours.',
      type: 'number',
      minimum: 0,
      maximum: 1000000,
      multipleOf: 1
    },
    '21': {
      default: 0,
      description: 'The number of transactions in 21:00 hours.',
      type: 'number',
      minimum: 0,
      maximum: 1000000,
      multipleOf: 1
    },
    '22': {
      default: 0,
      description: 'The number of transactions in 22:00 hours.',
      type: 'number',
      minimum: 0,
      maximum: 1000000,
      multipleOf: 1
    },
    '23': {
      default: 0,
      description: 'The number of transactions in 23:00 hours.',
      type: 'number',
      minimum: 0,
      maximum: 1000000,
      multipleOf: 1
    }
  }
}
