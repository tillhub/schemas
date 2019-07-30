const { oneOf } = require('../../helpers/payload-or-null')
const loyaltySystem = require('../loyalty_systems/base')
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

module.exports.lookup = {
  $id: 'https://schemas.tillhub.com/v0/loyalty_cards.get.lookup.response.schema.json',
  $schema: 'http://json-schema.org/draft-07/schema#',
  additionalProperties: true,
  type: 'object',
  required: ['loyalty_system', 'card_code'],
  properties: {
    loyalty_system: loyaltySystem,
    card_code: {
      type: 'string',
      description: 'The code of the loyalty card that was used to make this request, typically the card\'s barcode scanned from the POS.',
      example: '2s9f384h7'
    },
    values: {
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
    },
    metadata: oneOf({
      type: 'object',
      description: 'Either the data object of loyalty_card from Tillhub database or any information coming back from external providers'
    })
  }
}
