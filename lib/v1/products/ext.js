const { oneOf } = require('../../helpers/payload-or-null')
const localeEnum = require('../../common/locales').codes

const summaryItem = {
  qty: {
    type: 'number'
  }
}

module.exports = {
  stock_info: {
    description: 'READ ONLY: summary of stock accross accounts. This potentially is not real-time. After a stock change.',
    type: 'object',
    additionalProperties: true,
    properties: {
      additionalProperties: true,
      summary: {
        type: 'object',
        properties: {
          total: {
            type: 'object',
            additionalProperties: true,
            properties: {
              ...summaryItem
            }
          },
          locations: {
            type: 'array',
            items: {
              type: 'object',
              additionalProperties: false,
              properties: {
                id: {
                  type: 'string',
                  format: 'uuid'
                },
                ...summaryItem
              }
            }
          }
        }
      }
    }
  },
  i18n: {
    ...oneOf({
      type: 'object',
      additionalProperties: false,
      properties: {
        locales: {
          type: 'array',
          items: {
            type: 'object',
            additionalProperties: false,
            required: [
              'code',
              'translations'
            ],
            properties: {
              code: {
                type: 'string',
                enum: localeEnum
              },
              translations: {
                oneOf: [
                  {
                    type: 'object',
                    additionalProperties: false,
                    required: [
                      'format',
                      'payload'
                    ],
                    properties: {
                      format: {
                        type: 'string',
                        enum: [
                          'i18next'
                        ]
                      },
                      payload: {
                        oneOf: [
                          {
                            type: 'array'
                          },
                          {
                            type: 'object'
                          },
                          {
                            type: 'string'
                          },
                          {
                            type: 'null'
                          }
                        ]
                      }
                    }
                  },
                  {
                    type: 'null'
                  }
                ]
              }
            }
          }
        }
      }
    })
  }
}
