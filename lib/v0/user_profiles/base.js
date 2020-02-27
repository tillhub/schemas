const { oneOf } = require('../../helpers/payload-or-null')

module.exports = {
  firstname: oneOf({
    description: 'User first name.',
    type: 'string',
    maxLength: 32,
    minLength: 1
  }),
  lastname: oneOf({
    description: 'User last name.',
    type: 'string',
    maxLength: 32,
    minLength: 1
  }),
  displayname: oneOf({
    description: 'User display name.',
    type: 'string',
    maxLength: 32,
    minLength: 3
  }),
  phonenumbers: oneOf({
    type: 'object',
    additionalProperties: false,
    properties: {
      any: {
        type: 'string'
      },
      home: {
        type: 'string'
      },
      mobile: {
        type: 'string'
      },
      work: {
        type: 'string'
      }
    },
    anyOf: [
      {
        required: [
          'any'
        ]
      },
      {
        required: [
          'home'
        ]
      },
      {
        required: [
          'mobile'
        ]
      },
      {
        required: [
          'work'
        ]
      }
    ]
  }),
  addresses: oneOf({
    type: 'array',
    minItems: 1,
    maxItems: 3,
    items: {
      type: 'object',
      additionalProperties: false,
      properties: {
        lines: oneOf({
          type: 'array',
          minItems: 1,
          maxItems: 4,
          items: {
            type: 'string',
            minLength: 1
          }
        }),
        street: oneOf({
          type: 'string'
        }),
        street_number: oneOf({
          type: 'string'
        }),
        locality: oneOf({
          type: 'string'
        }),
        region: oneOf({
          type: 'string'
        }),
        postal_code: oneOf({
          type: 'string',
          maxLength: 10
        }),
        country: oneOf({
          type: 'string',
          minLength: 2,
          maxLength: 2,
          pattern: '^[A-Z]{2}$'
        }),
        type: oneOf({
          type: 'string',
          'enum': [
            'home',
            'work',
            'delivery',
            'billing'
          ]
        })
      },
      required: [
        'lines',
        'street',
        'street_number',
        'locality',
        'region',
        'postal_code',
        'country',
        'type'
      ]
    }
  }),
  images: oneOf({
    type: 'object',
    additionalProperties: false,
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
  }),
  scopes: oneOf({
    type: 'array',
    uniqueItems: true,
    items: {
      // we are loosely validation the permissions, as they have been removed for a while
      // and it is unclear which consumers added invlalid ones.
      anyOf: [
        {
          type: 'string',
          enum: require('../../common/permissions').staff.items.enum
        },
        {
          type: 'string'
        }
      ]
    }
  }),
  date_of_birth: oneOf({
    type: 'string',
    format: 'date-time'
  }),
  gender: oneOf({
    type: 'string',
    enum: [
      'male',
      'female'
    ]
  }),
  user: {
    type: 'string',
    format: 'uuid'
  },
  active: {
    description: 'Soft disable or enable this user_profiles.',
    type: 'boolean',
    default: true
  },
  deleted: {
    description: 'Soft delete this user_profiles.',
    type: 'boolean',
    default: false
  }
}
