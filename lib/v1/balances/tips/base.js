const { oneOf } = require('../../../helpers/payload-or-null')

module.exports = {
  description: 'Tips grouped by staff, account and tax (and currencies if neccessary)',
  additionalProperties: false,
  type: 'object',
  required: [
    'staff',
    'account',
    'tax',
    'currency',
    'amount'
  ],
  properties: {
    client_id: {
      ...oneOf({
        type: 'string',
        example: 'd0d40841-b1a7-438a-9d1e-2bfec590d2e3',
        minLength: 6,
        maxLength: 64,
        description: 'A implementer defined identifier. This can be used for local resource matching and has no business implication.'
      }),
      default: null
    },
    staff: {
      default: null,
      ...oneOf({
        type: 'string',
        description: 'The applicable Tillhub stuff for this tip configuration.',
        example: 'a5380b42-6025-49de-bb1d-c9357df96506'
      })
    },
    account: {
      default: null,
      ...oneOf({
        type: 'string',
        description: 'The applicable Tillhub revenue account for this tip configuration.',
        example: 'a5380b42-6025-49de-bb1d-c9357df96506'
      })
    },
    tax: {
      default: null,
      ...oneOf({
        type: 'string',
        description: 'The applicable Tillhub tax account for this tip configuration.',
        example: 'a5380b42-6025-49de-bb1d-c9357df96506'
      })
    },
    vat_rate: {
      type: 'number',
      description: 'The VAT rate of this group. E.g. 0.19 for 19% German VAT.',
      example: '0.19',
      minimum: 0,
      maximum: 1,
      multipleOf: 0.001
    },
    product: {
      default: null,
      ...oneOf({
        type: 'string',
        description: 'The applicable Tillhub product for this tip configuration.',
        example: 'a5380b42-6025-49de-bb1d-c9357df96506'
      })
    },
    currency: {
      type: 'string',
      description: 'The three letter [ISO currency](https://en.wikipedia.org/wiki/ISO_4217) of this item.',
      example: 'EUR',
      minLength: 3,
      maxLength: 3
    },
    amount: {
      example: '133.41',
      description: 'The amount by summing all tips for that configuration in that balance.',
      type: 'number',
      minimum: -1000000,
      maximum: 1000000,
      multipleOf: 0.01
    },
    custom_id: {
      default: null,
      ...oneOf({
        type: 'string',
        description: 'Any custom ID.',
        example: '1234566'
      })
    },
    branch: {
      ...oneOf({
        type: 'string',
        format: 'uuid',
        example: 'f2ac2cae-97ff-42a1-967b-0a35222ab6d1',
        description: 'The Tillhub branch location ID. If none is specified we will use the one from the transaction.'
      }),
      default: null
    },
    register: {
      ...oneOf({
        type: 'string',
        format: 'uuid',
        example: '9d110eb2-2245-4e14-9574-49b502f3a9b3',
        description: 'The Tillhub register location ID. If none is specified we will use the one from the transaction.'
      }),
      default: null
    },
    context: {
      ...oneOf({
        type: 'object',
        description: 'Any additional flat values.',
        properties: {
          account: {
            ...oneOf({
              type: 'object',
              description: 'Account face values.',
              properties: {
                number: {
                  description: 'Account number.', // account or expense_account fa_account_number
                  type: 'string',
                  example: '1776'
                },
                display: {
                  description: 'Account description.', // account or expense_account name
                  type: 'string',
                  example: 'Warenerlöse 7 %' // or 'sonstige Reparaturen/und Instandhaltungen'
                }
              }
            }),
            default: null
          },
          tax: {
            ...oneOf({
              type: 'object',
              description: 'Tax face values.',
              properties: {
                number: {
                  description: 'Account number.', // account or expense_account fa_account_number
                  type: 'string',
                  example: '2006'
                },
                display: {
                  description: 'Account description.',
                  type: 'string',
                  example: 'Mehrwertsteuer ermäßigt'
                }
              }
            }),
            default: null
          },
          product: {
            ...oneOf({
              type: 'object',
              description: 'Product face values.',
              properties: {
                number: {
                  type: 'string',
                  example: '0032039845'
                },
                display: {
                  type: 'string',
                  example: 'Another product string'
                }
              }
            }),
            default: null
          },
          product_group: {
            ...oneOf({
              type: 'object',
              description: 'Product face values.',
              properties: {
                number: {
                  type: 'string',
                  example: '0032039845'
                },
                display: {
                  type: 'string',
                  example: 'Waxing HIM'
                }
              }
            }),
            default: null
          },
          staff: {
            ...oneOf({
              type: 'object',
              description: 'Salesman face values.',
              properties: {
                owner: {
                  type: 'boolean',
                  example: 'true'
                },
                number: {
                  type: 'string',
                  example: '012'
                },
                display: {
                  type: 'string',
                  example: 'Cindy Schmidt'
                }
              }
            }),
            default: null
          }
        },
        required: [
          'account',
          'tax',
          'product',
          'staff'
        ]
      }),
      default: null
    },
    metadata: {
      ...oneOf({
        type: 'object',
        description: 'A container for storing arbitrary metadata. This might be altered by API.'
      }),
      default: null
    }
  }
}
