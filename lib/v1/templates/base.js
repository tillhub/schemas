module.exports.options = {
  type: 'object',
  additionalProperties: false,
  properties: {
    title: {
      type: 'string',
      maxLength: 32
    },
    logo: {
      type: 'string'
    },
    main_text: {
      type: 'string',
      maxLength: 4096
    },
    trailer_text: {
      type: 'string',
      maxLength: 16384
    },
    attention: {
      type: 'string',
      maxLength: 128
    },
    addresses: {
      type: 'object',
      additionalProperties: false,
      properties: {
        self: {
          type: 'object',
          additionalProperties: false,
          properties: {
            enabled: {
              type: 'boolean'
            }
          }
        },
        local: {
          type: 'object',
          additionalProperties: false,
          properties: {
            enabled: {
              type: 'boolean'
            }
          }
        }
      }
    },
    font_color: {
      type: 'string',
      pattern: '^#[0-9a-fA-F]{3,6}$'
    },
    currency_formats: {
      type: 'array',
      items: {
        type: 'object',
        additionalProperties: false,
        required: [
          'currency',
          'symbol',
          'decimal',
          'thousand',
          'precision',
          'format'
        ],
        properties: {
          currency: {
            example: 'EUR',
            type: 'string',
            minLength: 3,
            maxLength: 3,
            description: 'the filter for available currencies.'
          },
          symbol: {
            example: '$',
            type: 'string',
            maxLength: 10,
            minLength: 1,
            description: 'any string that should be used as symbol. Can also be the ISO identifier e.g. \'USD\'.'
          },
          decimal: {
            example: '.',
            default: '.',
            type: 'string',
            minLength: 1,
            maxLength: 2,
            description: 'define how the decimal seperator should be displayed.'
          },
          thousand: {
            example: ',',
            default: ',',
            type: 'string',
            description: 'define if and how thousand seperators should be displayed.'
          },
          precision: {
            example: '2',
            default: 2,
            type: 'number',
            description: 'define how many decimal positions should be displayed.',
            minimum: 0,
            maximum: 2
          },
          format: {
            example: '%v %s',
            default: '%v %s',
            description: 'this property can be used to set the currency in front of the value and with which distance. %s is the symbol and %v is the value.',
            type: 'string',
            enum: [
              '%v %s',
              '%v%s',
              '%s %v',
              '%s%v'
            ]
          }
        }
      }
    },
    footer_contents: {
      type: 'array',
      default: null,
      maxItems: 3,
      items: {
        type: 'object',
        additionalProperties: false,
        required: [
          'align',
          'content'
        ],
        properties: {
          align: {
            oneOf: [
              {
                type: 'null'
              },
              {
                type: 'string',
                enum: [
                  'left',
                  'right',
                  'center'
                ]
              }
            ]
          },
          content: {
            oneOf: [
              {
                type: 'string',
                maxLength: 16384
              },
              {
                type: 'null'
              }
            ]
          }
        }
      }
    },
    font: {
      type: 'string',
      enum: [
        'Open Sans',
        'arial',
        'monospace'
      ]
    },
    paper_size: {
      type: 'string',
      enum: [
        'A4',
        'letter'
      ]
    },
    row_highlight: {
      type: 'boolean'
    },
    transaction_number_title: {
      type: 'string',
      maxLength: 32
    },
    cashier_title: {
      type: 'string',
      maxLength: 32
    },
    date_of_issue_title: {
      type: 'string',
      maxLength: 32
    },
    date_of_delivery_title: {
      type: 'string',
      maxLength: 32
    }
  }
}

module.exports.base = {
  name: {
    oneOf: [
      {
        type: 'string',
        minLength: 1,
        maxLength: 64
      },
      {
        type: 'null'
      }
    ]
  },
  active: {
    type: 'boolean'
  },
  deleted: {
    type: 'boolean'
  }
}
