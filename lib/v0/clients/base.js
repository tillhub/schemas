const { oneOf } = require('../../helpers/payload-or-null')
const address = require('../../common/address')

module.exports = {
  name: {
    anyOf: [
      {
        type: 'string',
        maxLength: 64,
        minLength: 1
      },
      {
        type: 'null'
      }
    ]
  },
  phonenumbers: {
    anyOf: [
      {
        type: 'object',
        additionalProperties: false,
        properties: {
          line_main: {
            type: 'string'
          },
          line_1: {
            type: 'string'
          },
          line_2: {
            type: 'string'
          }
        },
        anyOf: [
          {
            required: [
              'line_main'
            ]
          },
          {
            required: [
              'line_1'
            ]
          },
          {
            required: [
              'line_2'
            ]
          }
        ]
      },
      {
        type: 'null'
      }
    ]
  },
  images: {
    anyOf: [
      {
        type: 'object',
        additionalProperties: false,
        properties: {
          '1x': {
            type: 'string',
            format: 'uri'
          },
          avatar: {
            type: 'string',
            format: 'uri'
          }
        }
      },
      {
        type: 'null'
      }
    ]
  },
  contacts: {
    anyOf: [
      {
        type: 'object',
        additionalProperties: false,
        properties: {
          email: {
            type: 'string',
            format: 'email'
          }
        }
      },
      {
        type: 'null'
      }
    ]
  },
  active: {
    type: 'boolean',
    default: true
  },
  deleted: {
    type: 'boolean',
    default: false
  },
  metadata: {
    type: 'object'
  },
  location: {
    type: 'object'
  },
  configuration: {
    anyOf: [
      {
        type: 'string',
        format: 'uuid'
      },
      {
        type: 'null'
      }
    ]
  },
  custom_id: {
    type: 'string',
    minLength: 1,
    maxLength: 64
  },
  barcode: {
    oneOf: [
      {
        type: 'string',
        minLength: 1,
        maxLength: 64
      },
      {
        type: 'null'
      }
    ]
  },
  addresses: oneOf({
    description: 'A Tillhub address array, with different types of addresses. More description in the properties...',
    type: 'array',
    maxItems: 3,
    items: {
      ...address
    }
  })
}
