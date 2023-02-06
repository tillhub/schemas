const availableCurrencies = [
  'EUR',
  'USD',
  'GBP',
  'CHF',
  'HUF',
  'DKK',
  'SEK'
]

module.exports.available_currency = {
  $id: 'https://schemas.tillhub.com/common/currency.available.schema.json',
  $schema: 'http://json-schema.org/draft-07/schema#',
  oneOf: [
    {
      type: 'null'
    },
    {
      type: 'string',
      enum: availableCurrencies
    }
  ]
}

module.exports.available_currences = availableCurrencies
