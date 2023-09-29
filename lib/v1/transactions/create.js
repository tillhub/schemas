const { oneOf } = require('../../helpers/payload-or-null')
const base = require('./base')
const itemsCreate = require('./components/items/create.request')
const paymentsCreate = require('./components/payments/create.request')
const statusCreate = require('../statuses/create.request')

module.exports.request = {
  $id: 'https://schemas.tillhub.com/v1/transactions.create.request.schema.json',
  $schema: 'http://json-schema.org/draft-07/schema#',
  type: 'object',
  additionalProperties: false,
  required: [
    'date',
    'type',
    'items',
    'payments'
  ],
  properties: {
    ...base,
    items: {
      type: 'array',
      minItems: 1,
      items: {
        ...itemsCreate
      }
    },
    payments: {
      type: 'array',
      items: {
        ...paymentsCreate
      }
    },
    status: {
      ...statusCreate
    },
    external_rewards: oneOf({
      type: 'object',
      description: 'If data can not be decrypted - they are stored here - Base64.',
      additionalProperties: false,
      properties: {
        payback_data: {
          type: 'string', // Base64
          maxLength: 16384,
          examples: [
            'MEQCIAy4P9k+7x9saDO0uRZ4El8QwN+qTgYiv1DIaJIMWRiuAiAt+saFDGjK2Yi5Cxgy7PprXQ5O0seRgx4ltdpW9REvwA==',
            'AUUwulkISDlfOMNro8Lx4aepbWinXgiHwGt9/xfb+WmyfAXnzAeBQmCfsRPheW/LKDlWVQWFUdvl7mXsh/vGx1vSLRiq6jn9qmL1fSGFRCrIos1U7X6dWxCr3VVZFXMILey6iuNw9i7HwNFSpyrpVOXFSDCdmKtYDfMMWD0JDAsKSFUTEbCay2yCtDEIOt/sELi6uiRwUoifztlTIt7wDNPdFrGxgJF17d2AJ4ah5V8kGTAzFygjGT8gCfTUbumKtGAJsvou+NqHAp4bb9K8+fTVG5rxw/OWux5GXmbtcxZQ3RX5IGurcsUv/kXFK+uGj7uUsCyEfq71uCxVs04Kig=='
          ],
          description: 'If payback data can not be decrypted - they are stored here - Base64.'
        }
      }
    })
  }
}
