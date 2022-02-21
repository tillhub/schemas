const { oneOf } = require('../../helpers/payload-or-null')

function getAddress ({
  required = [
    'lines',
    'street',
    'locality',
    'region',
    'postal_code',
    'country',
    'type'
  ],
  availableTypes = [
    'local',
    'delivery',
    'billing'
  ]
} = {}) {
  return {
    type: 'object',
    additionalProperties: false,
    required,
    properties: {
      lines: {
        description: 'Address details',
        example: 'Penthouse',
        ...oneOf({
          type: 'array',
          minItems: 1,
          maxItems: 4,
          items: {
            type: 'string',
            minLength: 1
          }
        })
      },
      street: {
        description: 'Street name',
        example: 'Genthiner Str.',
        ...oneOf({
          type: 'string'
        })
      },
      street_number: {
        description: 'Building number',
        example: '34',
        ...oneOf({
          type: 'string'
        })
      },
      locality: {
        description: 'Locality name (city, village, etc.)',
        example: 'Berlin',
        ...oneOf({
          type: 'string'
        })
      },
      region: {
        description: 'Region name',
        example: 'Branderburg',
        ...oneOf({
          type: 'string'
        })
      },
      postal_code: {
        description: 'Postal code',
        example: '10785',
        ...oneOf({
          type: 'string',
          maxLength: 10
        })
      },
      country: {
        description: 'Country',
        example: 'Germany',
        ...oneOf({
          type: 'string',
          minLength: 2,
          maxLength: 2,
          pattern: '^[A-Z]{2}$'
        }),
        'default': null
      },
      type: {
        description: 'Address type',
        example: 'delivery',
        ...oneOf({
          type: 'string',
          'enum': availableTypes
        })
      }
    }
  }
}

module.exports = { getAddress }
