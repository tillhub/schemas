const { oneOf } = require('../../../helpers/payload-or-null')
const voucherObject = require('../embedded/voucher/base')
const terminalObject = require('../embedded/terminal/base')

const relatedObject = require('../embedded/reference/related')
const dependsObject = require('../embedded/reference/depends')
const originObject = require('../embedded/reference/origin')

module.exports = {
  additionalProperties: false,
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
  type: {
    type: 'string',
    description: '',
    enum: [
      'card',
      'cash',
      'expense', // together with an 'expense' item encodes expense/deposit etc.
      'voucher',
      'custom', // paypal etc.
      'invoice',
      // legacy
      'card_opi',
      'card_concardis',
      'card_adyen',
      'card_tim'
    ]
  },
  payment_option: {
    default: null,
    ...oneOf({
      type: 'string',
      format: 'uuid',
      description: 'The Tillhub payment option resource reference ID.',
      example: 'bd7d8a90-83d1-4d53-8659-b205b409d6e1'
    })
  },
  position: {
    default: null,
    ...oneOf({
      type: 'number',
      description: 'The position description of the payment item. E.g. positon 1 (2, 3 etc.) in the cart.',
      example: '1',
      maximum: 32767,
      minimum: 0
    })
  },
  date: {
    type: 'string',
    format: 'date-time',
    example: '2018-01-29T14:55:05.000Z',
    description: 'A user defined [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) compliant date e.g. 2018-01-29T14:55:05.000Z. This is used to track local client time as oppsed to `created_at`, which is the time the server has received it. This is necessary for e.g. offline client, and is valid time in fiscal reports. If none is provided it will default to the transaction\'s date.'
  },
  name: {
    type: 'string',
    description: 'The nomenclature for this item, which is fiscally required.',
    example: 'Packaged beans, green'
  },
  currency: {
    type: 'string',
    description: 'The three letter [ISO currency](https://en.wikipedia.org/wiki/ISO_4217) of this item.',
    example: '',
    minLength: 3,
    maxLength: 3
  },
  amount_total: {
    description: 'The payed amount total.',
    type: 'number',
    minimum: -1000000,
    maximum: 1000000,
    multipleOf: 0.01
  },
  tip_total: {
    description: 'The payed amount total.',
    type: 'number',
    minimum: -1000000,
    maximum: 1000000,
    multipleOf: 0.01,
    default: null
  },
  amount_given: {
    description: 'The actual over the counter money flow: regardles what needs to be payed e.g. 49.98, but the customer has given. This is usually of interest in cash payments, or when when customers gave fewer amount than they ought to pay.',
    example: '50.00',
    type: 'number',
    minimum: -1000000,
    maximum: 1000000,
    multipleOf: 0.01,
    default: null
  },
  amount_requested: {
    description: 'The amount that was requested by the POS e.g. 49.98, regardless of what was given e.g. 50.00. Hence the rest is change or tip. This is usually of interest in cash payments.',
    example: '49.98',
    type: 'number',
    minimum: -1000000,
    maximum: 1000000,
    multipleOf: 0.01,
    default: null
  },
  amount_change: {
    description: 'The cash amount that was handed back from the cashier as change.',
    example: '49.98',
    type: 'number',
    minimum: 0,
    maximum: 1000000,
    multipleOf: 0.01,
    default: null
  },
  custom_id: {
    default: null,
    ...oneOf({
      type: 'string',
      description: 'Any custom ID, e.g. a rolling payment number',
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
  cost_center: {
    default: null,
    ...oneOf({
      type: 'string',
      description: 'Any external reference to a cost center e.g. in enterprise environments.',
      example: 'CORP-123'
    })
  },
  account: {
    default: null,
    ...oneOf({
      type: 'string',
      description: 'The applicable Tillhub account e.g for this payment type.', // cash account if type == expense
      example: 'a5380b42-6025-49de-bb1d-c9357df96506'
    })
  },
  account_change: {
    default: null,
    ...oneOf({
      type: 'string',
      description: 'The applicable Tillhub account for the cash payment type used for change.',
      example: 'a5380b42-6025-49de-bb1d-c9357df96506'
    })
  },
  context: {
    ...oneOf({
      type: 'object',
      additionalProperties: false,
      description: 'Any additional flat values.',
      properties: {
        title: {
          ...oneOf({
            type: 'string',
            example: 'Random 3.',
            maxLength: 1024,
            description: 'Any arbitrary title.'
          }),
          default: null
        },
        account: {
          ...oneOf({
            type: 'object',
            additionalProperties: false,
            description: 'Account face values.',
            properties: {
              number: {
                type: 'string',
                example: '1009'
              }
            }
          }),
          default: null
        }
      },
      required: [
        'account'
      ]
    }),
    default: null
  },
  comments: {
    ...oneOf({
      type: 'string',
      example: 'Did this sale. Went to the next one.',
      maxLength: 8192,
      description: 'Any arbitrary comment.'
    }),
    default: null
  },
  origins: {
    ...oneOf({
      type: 'array',
      description: 'A list of Tillhub resources that caused this transaction, e.g. a stored cart or multiple delivery notes',
      items: {
        ...originObject
      }
    }),
    default: null
  },
  depends_on: {
    ...oneOf({
      type: 'array',
      description: 'A list of Tillhub resources that this transaction directly depends on, e.g. a refund for a previous sale',
      items: {
        ...dependsObject
      }
    }),
    default: null
  },
  related_to: {
    ...oneOf({
      type: 'array',
      description: 'A list of Tillhub resources that this transaction is related to, e.g. an invoice object that tracks the lifetime of that invoice',
      items: {
        ...relatedObject
      }
    }),
    default: null
  },
  external_reference_id: {
    ...oneOf({
      type: 'string',
      example: '823742686434462376376376473647346',
      maxLength: 128,
      description: 'Any identifier a user wants to store in the transaction system. E.g. an ID in a third party ERP.'
    }),
    default: null
  },
  external_reference: {
    ...oneOf({
      type: 'object',
      description: 'A generic reference container as a user defined object.',
      maxProperties: 10
    }),
    default: null
  },
  metadata: {
    ...oneOf({
      type: 'object',
      description: 'A container for storing arbitrary metadata. This might be altered by API.'
    }),
    default: null
  },
  voucher: {
    description: 'If a voucher was used for this payment - addtional information will be stored here.',
    ...oneOf({
      ...voucherObject
    }),
    default: null
  },
  terminal: {
    description: 'If a terminal was used for this payment - addtional information will be stored here. NULL together with a card type indicates a disconnected terminal payment.',
    ...oneOf({
      ...terminalObject
    }),
    default: null
  }
}
