const { oneOf } = require('../../../../../helpers/payload-or-null')
const currencyAmount = require('../../../../../common/currency_amount')

module.exports = {
  description: 'Balance stats per a single cashier',
  additionalProperties: false,
  type: 'object',
  required: [
    'staff'
  ],
  properties: {
    staff: {
      type: 'string',
      format: 'uuid',
      example: 'd0d40841-b1a7-438a-9d1e-2bfec590d2e3',
      description: 'The Tillhub staff (as cashier) resource ID, that the statistics apply to.'
    },
    staff_name: {
      ...oneOf({
        type: 'string',
        example: 'John Smith',
        description: 'The Tillhub staff\'s display name (as cashier), that the statistics apply to.'
      })
    },
    staff_number: {
      ...oneOf({
        type: 'string',
        example: '0018',
        description: 'The Tillhub staff\'s custom id (as cashier), that the statistics apply to.'
      })
    },
    change: {
      ...oneOf({
        description: 'The total amount of change (cash: cashier -> customer) for this staff',
        ...currencyAmount
      })
    },
    cash_payments: {
      ...oneOf({
        description: 'The total amount of cash payments (customer -> cashier) for this staff',
        ...currencyAmount
      })
    },
    expenses: {
      ...oneOf({
        description: 'The total amount of expenses (cash: cashier <-> bank/expense/deposit) for this staff',
        ...currencyAmount
      })
    },
    cash: {
      ...oneOf({
        description: 'The calulated cash amount when closing the register for this staff (starting with 0 on opening)',
        ...currencyAmount
      })
    },
    non_cash_payments: {
      ...oneOf({
        description: 'The total amount of non-cash payments (customer -> cashier) for this staff',
        ...currencyAmount
      })
    },
    payments: oneOf({
      type: 'array',
      description: 'Payments grouped by payment option',
      items: {
        description: 'Payments grouped by payment_option',
        additionalProperties: false,
        type: 'object',
        required: [
          'payment_option',
          'currency',
          'amount'
        ],
        properties: {
          payment_option: {
            type: 'string',
            format: 'uuid',
            example: '5ad2351d-9a67-45f9-ad4f-0abcbefa9037',
            description: 'The payment_option ressource id'
          },
          payment_option_name: {
            ...oneOf({
              type: 'string',
              example: 'American Express',
              description: 'Name of the used payment option'
            })
          },
          payment_option_type_name: {
            ...oneOf({
              type: 'string',
              enum: [
                'undefined',
                'cash',
                'invoice',
                'card',
                'terminal_gift_card' // e.g. Adyen Gift Card
              ],
              description: 'Payment option type'
            })
          },
          amount: {
            ...oneOf({
              description: 'The amount per this payment option',
              ...currencyAmount
            })
          },
          amount_tip: {
            ...oneOf({
              description: 'The tip amount per this payment option',
              ...currencyAmount
            })
          },
          fa_account: {
            ...oneOf({
              type: 'string',
              example: '1505',
              description: 'Custom identifier for the payment option financial account'
            })
          },
          cost_center: {
            ...oneOf({
              type: 'string',
              example: '0005',
              description: 'Custom identifier for the payment option cost center'
            })
          }
        }
      }
    })
  }
}
