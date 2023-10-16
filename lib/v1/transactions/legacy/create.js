const { getEvent } = require('../../../common/webhooks')
const { oneOf } = require('../../../helpers/payload-or-null')
const statusCreate = require('../../statuses/create.request')
const base = require('./base')
const response = require('./response')
const itemsCreate = require('./items/create.request')
const paymentsCreate = require('./payments/create.request')

module.exports.request = {
  $id: 'https://schemas.tillhub.com/v1/transactions.legacy.create.request.schema.json',
  $schema: 'http://json-schema.org/draft-07/schema#',
  type: 'object',
  additionalProperties: false,
  required: [
    'date',
    'type_name',
    'cartitems',
    'payments'
  ],
  properties: {
    ...base,
    cartitems: {
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
      description: 'Payback data that should be decrypted.',
      additionalProperties: false,
      properties: {
        payback_data: {
          type: 'string', // Base64
          maxLength: 16384,
          examples: [
            'MEQCIAy4P9k+7x9saDO0uRZ4El8QwN+qTgYiv1DIaJIMWRiuAiAt+saFDGjK2Yi5Cxgy7PprXQ5O0seRgx4ltdpW9REvwA==',
            'AUUwulkISDlfOMNro8Lx4aepbWinXgiHwGt9/xfb+WmyfAXnzAeBQmCfsRPheW/LKDlWVQWFUdvl7mXsh/vGx1vSLRiq6jn9qmL1fSGFRCrIos1U7X6dWxCr3VVZFXMILey6iuNw9i7HwNFSpyrpVOXFSDCdmKtYDfMMWD0JDAsKSFUTEbCay2yCtDEIOt/sELi6uiRwUoifztlTIt7wDNPdFrGxgJF17d2AJ4ah5V8kGTAzFygjGT8gCfTUbumKtGAJsvou+NqHAp4bb9K8+fTVG5rxw/OWux5GXmbtcxZQ3RX5IGurcsUv/kXFK+uGj7uUsCyEfq71uCxVs04Kig=='
          ],
          description: 'Payback data that should be decrypted..'
        }
      }
    })
  }
}

module.exports.event = {
  $id: 'https://schemas.tillhub.com/v1/transactions.legacy.create.event.schema.json',
  $schema: 'http://json-schema.org/draft-07/schema#',
  ...getEvent(response, { eventEntityExample: 'transaction' })
}
