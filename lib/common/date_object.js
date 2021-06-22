module.exports = {
  type: 'object',
  additionalProperties: false,
  description: 'Downstream delivery of a date.',
  required: ['iso', 'unix'],
  properties: {
    iso: {
      type: 'string',
      format: 'date-time',
      description: 'ISO 8601 compliant format.',
      example: '2021-06-03T11:18:47.725Z' // == 1622719127725
    },
    unix: {
      type: 'integer',
      description: 'The Unix epoch timestamp in milliseconds.',
      example: 1622719127725 // == 2021-06-03T11:18:47.725Z
    }
  }
}
