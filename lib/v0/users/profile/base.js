const { getGender } = require('../../../common/gender')
const { oneOf } = require('../../../helpers/payload-or-null')
const address = require('../../../common/address')

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
    description: 'A Tillhub address array, with different types of addresses. More description in the properties...',
    type: 'array',
    maxItems: 3,
    items: {
      ...address
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
          enum: require('../../../common/permissions').staff.items.enum
        },
        {
          type: 'string'
        }
      ]
    }
  }),
  user_permission_template_id: {
    oneOf: [
      {
        type: 'string'
      },
      {
        type: 'null'
      }
    ]
  },
  date_of_birth: oneOf({
    type: 'string',
    format: 'date-time'
  }),
  gender: getGender(),
  active: {
    description: 'Soft disable or enable this user_profiles.',
    type: 'boolean',
    default: true
  },
  deleted: {
    description: 'Soft delete this user_profiles.',
    type: 'boolean',
    default: false
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
  branch_groups: {
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
  }
}
