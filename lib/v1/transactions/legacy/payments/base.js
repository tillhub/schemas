const { oneOf } = require('../../../../helpers/payload-or-null')
const voucherObject = require('../../components/embedded/voucher/base')
const terminalObject = require('../../components/embedded/terminal/base')

const relatedObject = require('../../components/embedded/reference/related')
const dependsObject = require('../../components/embedded/reference/depends')
const originObject = require('../../components/embedded/reference/origin')

module.exports = {
  fr_transaction_id: {
    deprecated: true
  },
  fa_account_number: {
    deprecated: true,
    type: 'string',
    example: '100575',
    description: 'Custom identifier for the payment financial account'
  },
  amount: {
    deprecated: true,
    type: 'integer',
    example: 2000,
    description: 'The given amount via this payment, 20.00 EUR or 2000 HUF respectively'
  },
  currency_iso_code: {
    deprecated: true,
    type: 'string',
    example: 'EUR',
    description: 'The payment\'s currency'
  },
  account: {
    deprecated: true,
    type: 'string',
    format: 'uuid',
    example: '55224036-e83f-4ece-8dbe-504e69d662c0',
    description: 'The Tillhub account resource associated with this payment option'
  },
  exchange_rate: {
    deprecated: true,
    type: 'string',
    example: '2.315',
    description: 'String encoded number, not used'
  },
  payment_option_name: {
    deprecated: true,
    type: 'string',
    example: 'American Express',
    description: 'Name of the used payment option'
  },
  payment_option_type_name: {
    deprecated: true,
    type: 'string',
    enum: [
      'undefined',
      'cash',
      'invoice',
      'gift_card', // -> voucher
      'card_opi', // deprecated -> use 'card'
      'card_concardis', // deprecated -> use 'card'
      'card_tim', // deprecated -> use 'card'
      'card_adyen', // deprecated -> use 'card'
      'card'
    ],
    description: 'Payment option type'
  },
  payment_option_id: {
    deprecated: true,
    type: 'string',
    format: 'uuid',
    example: '96b619a6-6189-4f03-a135-e1b307d664de',
    description: 'The Tillhub payment option resource used for this payment'
  },
  guid: {
    deprecated: true,
    description: 'Not used'
  },
  _id: {
    deprecated: true
  },
  date: {
    deprecated: true,
    type: 'string',
    format: 'date-time',
    example: '2018-01-29T14:55:05.000Z',
    description: 'Date when this payment was created'
  },
  tip: {
    deprecated: true,
    type: 'integer',
    example: 110,
    description: 'The given tip via this payment, 1.10 EUR or 110 HUF respectively'
  },
  terminal_response: {
    deprecated: true,
    type: 'string',
    example: '<?xml version...',
    description: 'The final RAW response from any kind of card terminal API (e.g. OPI, Concardis...) - Used for payment verification against card operators'
  },
  context: {
    deprecated: true,
    type: 'object',
    properties: {
      voucher_value: {
        type: 'integer',
        example: 2500,
        description: 'The DELTA value of this voucher operation, 25.00 EUR or 2500 HUF respectively'
      },
      voucher_id: {
        type: 'string',
        format: 'uuid',
        example: '210fbbea-539a-4acc-a81c-09ca5c20937c',
        description: 'If is_voucher, the Tillhub voucher resource used to create this item'
      },
      voucher_client_id: {
        type: 'string',
        example: '85EA004C-15A6-477B-BC77-FD6CB9C5B67F',
        description: 'If is_voucher, the client assigned id of the item\'s associated vocuher operation'
      },
      voucher_number: {
        type: 'string',
        example: '1111111',
        description: 'If is_voucher, the used voucher code'
      },
      voucher_ean: {
        type: 'string',
        example: '9988',
        description: 'If is_voucher, the EAN of the voucher\'s associated product'
      },
      voucher_product: {
        type: 'string',
        format: 'uuid',
        example: '210fbbea-539a-4acc-a81c-09ca5c20937c',
        description: 'If is_voucher, the associated Tillhub product resource of the voucher'
      },
      voucher_system_id: {
        type: 'string',
        format: 'uuid',
        example: '456E438E3E0E47219FE9900870C4D328',
        description: 'If is_voucher, the associated Tillhub system resource of the voucher'
      },
      voucher_system_system: {
        type: 'string',
        format: 'uuid',
        example: 'f125164f-8636-43b9-8eac-eb38bda97fce',
        description: 'If is_voucher, the associated Tillhub subsystem resource of the voucher'
      },
      voucher_currency: {
        type: 'string',
        example: 'EUR',
        description: 'If is_voucher, the voucher\'s currency'
      },
      voucher_api: {
        type: 'string',
        enum: [
          'fleurop-voucher-api',
          'tillhub-voucher-api'
        ],
        description: 'If is_voucher, the API used to process this voucher operation'
      },
      voucher_is_booked: {
        deprecated: true,
        type: 'boolean',
        default: false,
        description: 'If is_voucher, indicates if the operation has been successfully applied via calling the API'
      },
      voucher_is_locked: {
        type: 'boolean',
        default: false,
        description: 'If is_voucher, indicates the locked state within the API'
      },
      voucher_message: {
        type: 'string',
        example: 'Voucher updated',
        description: 'If is_voucher, collected messages from voucher processing API calls'
      },
      voucher_title: {
        type: 'string',
        example: 'A Custom String',
        description: 'If is_voucher, a currently not used custom title'
      },
      voucher_type: {
        type: 'integer',
        enum: [
          0, // undefined
          1, // fleuropRedeem
          2, // fleuropSellOrRecharge
          3, // ownBrandedRecharge
          4, // ownBrandedRedeem
          5, // externalSellAndActivate
          6, // tillhubSell
          7, // tillhubRecharge
          8 // tillhubRedeem
        ],
        description: 'If is_voucher, the legacy type of the voucher operation'
      },
      cardCircuit: {
        type: 'string',
        example: 'American Express',
        description: 'Card circuit as reported by the terminal, e.g. Visa, MasterCard, ...'
      },
      cardCustomerReceipt: {
        type: 'string',
        description: 'Plain text customer receipt as received from the terminal (Tillhub formatting only)'
      },
      cardMerchantReceipt: {
        type: 'string',
        description: 'Plain text mechant receipt as received from the terminal (Tillhub formatting only)'
      },
      cardPAN: {
        type: 'string',
        example: '476173 **** 0119',
        description: 'Card PAN (masked) as received from the terminal'
      },
      cardTerminalID: {
        type: 'string',
        example: 'V400m-324688202',
        description: 'Unique terminal identifier within the terminal API context'
      },
      cardTerminalApi: {
        type: 'string',
        example: 'sumup',
        description: 'The terminal API used for this payment'
      },
      cardTerminalProvider: {
        type: 'string',
        example: '2',
        description: 'If available, the provider identifier for the used terminal'
      },
      cardTransactionID: {
        type: 'string',
        example: '2faWo001552390095000.8515523900996938',
        description: 'The unique terminal transaction identifier within the given terminal API context'
      },
      isTerminalConnected: {
        type: 'boolean',
        default: false,
        description: 'If true, the terminal was used via it\'s API and the above fields are mandatory. If false, the cashier is responsible for handling disconnected card payments'
      }
    }
  },
  client_id: oneOf({
    type: 'string',
    example: 'd0d40841-b1a7-438a-9d1e-2bfec590d2e3',
    minLength: 6,
    maxLength: 64,
    description: 'A implementer defined identifier. This can be used for local resource matching and has no business implication.'
  }),
  _type: oneOf({
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
  }),
  _context: {
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
              custom_id: {
                type: 'string',
                example: '1009'
              }
            }
          }),
          default: null
        },
        terminal: {
          description: 'If a terminal was used for this payment - addtional information will be stored here. NULL together with a card type indicates a disconnected terminal payment.',
          ...oneOf({
            ...terminalObject
          })
        },
        voucher: {
          description: 'If a voucher was used for this payment - addtional information will be stored here.',
          ...oneOf({
            ...voucherObject
          }),
          default: null
        }
      }
    }),
    default: null
  },
  payment_option: oneOf({
    type: 'string',
    format: 'uuid',
    description: 'The Tillhub payment option resource reference ID.',
    example: 'bd7d8a90-83d1-4d53-8659-b205b409d6e1'
  }),
  _position: oneOf({
    type: 'number',
    description: 'The position of the payment item. E.g. positon 1 (2, 3 etc.) in the transaction.',
    minimum: 0,
    maximum: 300,
    example: '1'
  }),
  _currency: oneOf({
    type: 'string',
    description: 'The three letter [ISO currency](https://en.wikipedia.org/wiki/ISO_4217) of this item.',
    example: '',
    minLength: 3,
    maxLength: 3
  }),
  _amount_total: oneOf({
    description: 'The payed amount total.',
    type: 'number',
    minimum: -1000000,
    maximum: 1000000,
    multipleOf: 0.01
  }),
  _tip_total: oneOf({
    description: 'The included tip amount.',
    type: 'number',
    minimum: -1000000,
    maximum: 1000000,
    multipleOf: 0.01
  }),
  _amount_given: oneOf({
    description: 'The actual over the counter money flow: regardles what needs to be payed e.g. 49.98, but the customer has given. This is usually of interest in cash payments, or when when customers gave fewer amount than they ought to pay.',
    example: '50.00',
    type: 'number',
    minimum: -1000000,
    maximum: 1000000,
    multipleOf: 0.01
  }),
  _amount_requested: oneOf({
    description: 'The amount that was requested by the POS e.g. 49.98, regardless of what was given e.g. 50.00. Hence the rest is change or tip. This is usually of interest in cash payments.',
    example: '49.98',
    type: 'number',
    minimum: -1000000,
    maximum: 1000000,
    multipleOf: 0.01
  }),
  _amount_change: oneOf({
    description: 'The cash amount that was handed back from the cashier as change.',
    example: '49.98',
    type: 'number',
    minimum: 0,
    maximum: 1000000,
    multipleOf: 0.01
  }),
  branch: oneOf({
    type: 'string',
    format: 'uuid',
    example: 'f2ac2cae-97ff-42a1-967b-0a35222ab6d1',
    description: 'The Tillhub branch location ID. If none is specified we will use the one from the transaction.'
  }),
  register: oneOf({
    type: 'string',
    format: 'uuid',
    example: '9d110eb2-2245-4e14-9574-49b502f3a9b3',
    description: 'The Tillhub register location ID. If none is specified we will use the one from the transaction.'
  }),
  cost_center: oneOf({
    type: 'string',
    description: 'Any external reference to a cost center e.g. in enterprise environments.',
    example: 'CORP-123'
  }),
  _account: oneOf({
    type: 'string',
    description: 'The applicable Tillhub account e.g for this payment type.', // cash account if type == expense
    example: 'a5380b42-6025-49de-bb1d-c9357df96506'
  }),
  _account_change: oneOf({
    type: 'string',
    description: 'The applicable Tillhub account for the cash payment type used for change.',
    example: 'a5380b42-6025-49de-bb1d-c9357df96506'
  }),
  _comments: oneOf({
    type: 'string',
    example: 'Did this sale. Went to the next one.',
    maxLength: 8192,
    description: 'Any arbitrary comment.'
  }),
  _origins: oneOf({
    type: 'array',
    description: 'A list of Tillhub resources that caused this transaction, e.g. a stored cart or multiple delivery notes',
    items: {
      ...originObject
    }
  }),
  _depends_on: oneOf({
    type: 'array',
    description: 'A list of Tillhub resources that this transaction directly depends on, e.g. a refund for a previous sale',
    items: {
      ...dependsObject
    }
  }),
  _related_to: oneOf({
    type: 'array',
    description: 'A list of Tillhub resources that this transaction is related to, e.g. an invoice object that tracks the lifetime of that invoice',
    items: {
      ...relatedObject
    }
  }),
  _external_reference_id: oneOf({
    type: 'string',
    example: '823742686434462376376376473647346',
    maxLength: 128,
    description: 'Any identifier a user wants to store in the transaction system. E.g. an ID in a third party ERP.'
  })
}
