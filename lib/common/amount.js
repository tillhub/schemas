module.exports = {
  description: 'the currency / amount object combination is the Tillhub Money object.',
  type: 'object',
  additionalProperties: false,
  properties: {
    net: {
      type: 'number',
      minimum: -1000000,
      maximum: 1000000,
      multipleOf: 0.01
    },
    gross: {
      type: 'number',
      minimum: -1000000,
      maximum: 1000000,
      multipleOf: 0.01
    }
  }
}
