const query = require('./query')
const base = require('./base')

module.exports.query = {
  $id: 'https://schemas.tillhub.com/v0/loyalty_cards.get.query.schema.json',
  $schema: 'http://json-schema.org/draft-07/schema#',
  additionalProperties: true,
  type: 'object',
  required: [],
  properties: query
}

module.exports.all = {
  $id: 'https://schemas.tillhub.com/v0/loyalty_cards.get.all.schema.json',
  $schema: 'http://json-schema.org/draft-07/schema#',
  additionalProperties: true,
  type: 'object',
  required: [],
  properties: {
    ...base,
    loyalty_values: {
      type: 'array',
      items: {
        type: 'object',
        additionalProperties: false,
        properties: {
          amount: {
            type: 'number'
          },
          unit: {
            type: 'string'
          }
        }
      }
    }
  }
}

module.exports.one = {
  $id: 'https://schemas.tillhub.com/v0/loyalty_cards.get.one.schema.json',
  $schema: 'http://json-schema.org/draft-07/schema#',
  additionalProperties: true,
  type: 'object',
  required: [],
  properties: {
    ...base,
    loyalty_values: {
      type: 'array',
      items: {
        type: 'object',
        additionalProperties: false,
        properties: {
          amount: {
            type: 'number'
          },
          unit: {
            type: 'string'
          }
        }
      }
    }
  }
}
