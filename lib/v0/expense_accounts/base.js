const locationsAccounts = require('../locations/accounts')

module.exports = {
  active: {
    type: 'boolean'
  },
  deleted: {
    type: 'boolean'
  },
  name: {
    anyOf: [
      {
        description: 'A custom name for an expense account.',
        example: 'Utilities expense',
        type: 'string',
        minLength: 1,
        maxLength: 64
      },
      {
        type: 'null'
      }
    ]
  },
  fa_account_number: {
    anyOf: [
      {
        description: 'The custom financial account identifier.',
        example: '1776',
        type: 'string',
        minLength: 1,
        maxLength: 64
      },
      {
        type: 'null'
      }
    ]
  },
  financial_accounts: {
    anyOf: [
      {
        ...locationsAccounts
      },
      {
        type: 'null'
      }
    ]
  },
  type: {
    type: 'string',
    'enum': [
      'expense',
      'deposit',
      'bank',
      'transit',
      'safe'
    ]
  },
  tax: {
    description: 'DEPRECATED',
    // NOTE: due to migration path, make sure clients always write this value with actual uuid. Nullability is reserved for future refactoring
    oneOf: [
      {
        type: 'string',
        maxLength: 64
      },
      {
        type: 'null'
      }
    ]
  },
  locations: {
    oneOf: [
      {
        type: 'array',
        items: {
          type: 'string',
          format: 'uuid'
        }
      },
      {
        type: 'null'
      }
    ]
  },
  accepts_booking_from_safe: {
    type: 'boolean',
    default: false
  },
  images: {
    description: 'A Tillhub image object with URLs to display images for expenses.',
    anyOf: [
      {
        type: 'object',
        additionalProperties: true,
        properties: {
          original: {
            type: 'string',
            format: 'uri'
          },
          gallery: {
            type: 'string',
            format: 'uri'
          },
          avatar: {
            type: 'string',
            format: 'uri'
          },
          '1x': {
            type: 'string',
            format: 'uri'
          },
          '2x': {
            type: 'string',
            format: 'uri'
          },
          '3x': {
            type: 'string',
            format: 'uri'
          }
        }
      },
      {
        type: 'null'
      }
    ]
  }
}
