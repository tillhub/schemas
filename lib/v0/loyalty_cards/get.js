const { oneOf } = require('../../helpers/payload-or-null')
const query = require('./query')
const defaultResponse = require('./default-response')

const loyaltyValues = {
  type: 'array',
  items: {
    type: 'object',
    description: 'The loyalty values accumulated on the loyalty card',
    additionalProperties: false,
    properties: {
      amount: {
        example: '27633.02',
        type: 'number',
        multipleOf: 0.01
      },
      unit: {
        type: 'string',
        examples: [
          'EUR',
          'points',
          'miles'
        ]
      }
    }
  }
}

module.exports.query = {
  $id: 'https://schemas.tillhub.com/v0/loyalty_cards.get.all.query.schema.json',
  $schema: 'http://json-schema.org/draft-07/schema#',
  additionalProperties: true,
  type: 'object',
  required: [],
  properties: query
}

module.exports.all = {
  $id: 'https://schemas.tillhub.com/v0/loyalty_cards.get.all.response.schema.json',
  $schema: 'http://json-schema.org/draft-07/schema#',
  additionalProperties: true,
  type: 'object',
  required: [],
  properties: {
    ...defaultResponse,
    loyalty_values: loyaltyValues
  }
}

module.exports.one = {
  $id: 'https://schemas.tillhub.com/v0/loyalty_cards.get.one.response.schema.json',
  $schema: 'http://json-schema.org/draft-07/schema#',
  additionalProperties: true,
  type: 'object',
  required: [],
  properties: {
    ...defaultResponse,
    loyalty_values: loyaltyValues
  }
}

module.exports.lookup = {
  $id: 'https://schemas.tillhub.com/v0/loyalty_cards.get.lookup.response.schema.json',
  $schema: 'http://json-schema.org/draft-07/schema#',
  additionalProperties: true,
  type: 'object',
  required: ['loyalty_system', 'code', 'loyalty_values'],
  properties: {
    ...defaultResponse,
    loyalty_values: loyaltyValues,
    response_object: oneOf({
      type: 'object',
      description: 'The original data coming back from querying the external providers APIs.'
    })
  }
}
