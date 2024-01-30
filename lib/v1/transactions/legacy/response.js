const { stripIndents } = require('common-tags')
const { oneOf } = require('../../../helpers/payload-or-null')
const dateObject = require('../../../common/date_object')
const statusResponse = require('../../statuses/response')
const base = require('./base')
const items = require('./items/response')
const payments = require('./payments/response')

module.exports = {
  type: 'object',
  additionalProperties: false,
  properties: {
    id: {
      type: 'string',
      example: '860defb8-5598-421d-9da4-f0826e767536',
      format: 'uuid',
      description: 'The uuid v4 that is generated on the API when a transaction is received. This id can be used for idempotency'
    },
    update_id: {
      type: 'integer'
    },
    created_at: {
      description: 'The server creation time of this transaction.',
      ...dateObject
    },
    updated_at: {
      description: 'The server update time of this transaction.',
      ...dateObject
    },
    temporary_id: oneOf({
      type: 'string'
    }),
    _id: {
      deprecated: true,
      ...oneOf({
        type: 'string',
        format: 'uuid',
        example: '97074aa7-ed27-464c-890e-0b47ab153b8a',
        description: 'Temporary hack for id-functionality (which is Int)'
      })
    },
    fr_transaction_id: {
      deprecated: true,
      ...oneOf({
        type: 'number'
      })
    },
    ...base,
    items: {
      type: 'array',
      items: {
        ...items
      }
    },
    payments: {
      type: 'array',
      items: {
        ...payments
      }
    },
    status: {
      ...statusResponse
    },
    external_rewards: {
      anyOf: [
        {
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
        },
        {
          type: 'object',
          description: 'Necessary data to handle an external reward triggered by a transaction.',
          additionalProperties: false,
          properties: {
            coop: oneOf({
              type: 'object',
              description: 'Delta object for Swiss Coop',
              properties: {
                used_campaign_multiplier: {
                  type: 'integer',
                  description: 'Tillhub internal storage to calculate refunds properly.',
                  minimum: 1,
                  maximum: 100,
                  default: 1
                },
                current_balance: oneOf({
                  type: 'integer',
                  description: 'Current balance if known via the online validation process.',
                  minimum: 0,
                  maximum: 120000,
                  default: null
                }),
                supercard: {
                  type: 'string',
                  description: 'Supercard number, always required.',
                  example: '762250103984932838'
                },
                app_id: oneOf({
                  type: 'string',
                  description: 'GS1 AppID, Null for EAN13 cards.',
                  example: '000001'
                }),
                guid: oneOf({
                  type: 'string',
                  description: 'GS1 Card GUID, Null for EAN13 cards.',
                  example: '50269DCFF3AD18A0E10080000A050151'
                }),
                client_info: {
                  type: 'object',
                  description: 'Info about the store / Tillhub branch.',
                  properties: {
                    store_eain: {
                      type: 'string',
                      description: 'Coop identity of this Tillhub branch.',
                      example: '7640147960015'
                    },
                    store_name: {
                      type: 'string',
                      maxLength: 128,
                      description: 'Name of this Tillhub branch.',
                      example: 'Coop Supermarkt Riehen Schmiedgasse'
                    },
                    store_sap_number: oneOf({
                      type: 'string',
                      pattern: '^[0-9]{4}$',
                      description: 'Tillhub branch SAP number if available.',
                      example: '000001'
                    }),
                    terminal_id: oneOf({
                      type: 'string',
                      description: 'Tillhub custom register name.',
                      example: 'Kasse 1'
                    })
                  }
                },
                purchase_info: {
                  type: 'object',
                  description: 'Info about the store / Tillhub branch.',
                  properties: {
                    bonus_points: oneOf({
                      type: 'integer',
                      description: 'Bonus Points to be booked - Free Points preferred, use NULL here untill specified otherwise (2023-07).',
                      minimum: -12000,
                      maximum: 12000,
                      default: null
                    }),
                    free_points: {
                      type: 'integer',
                      description: 'Free Points - preferrably used over Bonus Points. (Current points x campaign multiplier) - refund points',
                      minimum: -12000,
                      maximum: 12000,
                      default: 0
                    },
                    timestamp: {
                      type: 'string',
                      format: 'date-time',
                      example: '2018-01-29T14:55:05.000Z',
                      description: 'Date of the purchase = transaction date'
                    },
                    timestamp_end: {
                      type: 'string',
                      format: 'date-time',
                      example: '2018-01-29T14:55:05.000Z',
                      description: 'Date of the purchase = transaction date'
                    },
                    total_items: {
                      type: 'integer',
                      description: 'Number of cart items in the transaction that are not campaign products or vouchers.',
                      minimum: 0,
                      maximum: 99
                    },
                    employee_flag: {
                      type: 'boolean',
                      description: 'Marks a Coop employee, not yet relevantm, send \'false\'.',
                      default: false
                    },
                    total_amount: {
                      type: 'integer',
                      description: 'Total value of the sale in Swiss Rappen including ALL cart items, including refunds, excluding tips.',
                      minimum: -2400000,
                      maximum: 2400000
                    },
                    point_base_amount: {
                      type: 'integer',
                      description: stripIndents`
                'Total value of the sale that qualifies for superpoints (campaign items, tips and vouchers excluded)

                as long as net items are not supported this is identical to \'total_amount\'.
                `,
                      minimum: -2400000,
                      maximum: 2400000
                    },
                    bon_nr: {
                      type: 'integer',
                      description: 'Tillhub transaction number.',
                      minimum: 0,
                      maximum: 32000
                    }
                  }
                }
              }
            })
          }
        },
        {
          type: 'null'
        }
      ]
    }
  }
}
