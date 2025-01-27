const { oneOf } = require('../helpers/payload-or-null')

module.exports = {
  type: 'object',
  additionalProperties: false,
  description: 'Downstream delivery of a date.',
  required: [
    'lines',
    'street',
    'locality',
    'region',
    'postal_code',
    'country'
  ],
  properties: {
    lines: oneOf({
      description: 'Address details',
      example: 'Penthouse',
      type: 'array',
      minItems: 1,
      maxItems: 4,
      items: {
        type: 'string',
        minLength: 1
      }
    }),
    street: oneOf({
      description: 'Street name',
      example: 'Genthiner Str.',
      type: 'string'
    }),
    street_number: oneOf({
      description: 'Building number',
      example: '34',
      type: 'string'
    }),
    locality: oneOf({
      description: 'Locality name (city, village, etc.)',
      example: 'Berlin',
      type: 'string'
    }),
    region: oneOf({
      description: 'Region name',
      example: 'Branderburg',
      type: 'string'
    }),
    postal_code: oneOf({
      description: 'Postal code',
      example: '10785',
      type: 'string',
      maxLength: 10
    }),
    country: oneOf({
      description: 'A country as ISO Alpha-2 code.',
      example: 'DE',
      type: 'string',
      minLength: 2,
      maxLength: 2,
      pattern: '^[A-Z]{2}$'
    }),
    type: oneOf({
      description: 'Address type',
      example: 'delivery',
      type: 'string',
      enum: [
        'local',
        'delivery',
        'billing',
        'home',
        'work'
      ]
    }),
    reservations_google_maps_address: oneOf({
      description: 'The location of the branch on Google Maps',
      example: 'https://maps.app.goo.gl/tpF7EMsEC7Wy5hmd6',
      pattern: '^https:\\/\\/maps\\.app\\.goo\\.gl\\/[A-Za-z0-9]*$',
      type: 'string'
    })
  }
}
