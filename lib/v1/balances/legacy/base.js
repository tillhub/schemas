const { stripIndents } = require('common-tags')
const { oneOf } = require('../../../helpers/payload-or-null')

const balanceRevenuesObject = require('./embedded/revenues/base')
const balanceVatsObject = require('./embedded/vats/base')
const balanceExpensesObject = require('./embedded/expenses/base')
const balancePaymentsObject = require('./embedded/payments/base')
const balanceCashUnitsObject = require('./embedded/cash_units/base')
const balanceTipsObject = require('./embedded/tips/base')
const balanceExtendedObject = require('./embedded/extended')
const balanceMetadataObject = require('./embedded/metadata')

module.exports = {
  dev_uuid: {
    deprecated: true,
    ...oneOf({
      type: 'string',
      example: '886eef646bc1c4d79eb8495321bbd472',
      description: 'Initialized as the iPAD\'s UIDevice.current.identifierForVendor?.uuidString.md5() and stored in the Keychain for the Tillhub application'
    })
  },
  balance_number: {
    deprecated: true,
    ...oneOf({
      type: 'integer',
      example: 5,
      description: 'The balance\'s counting number'
    })
  },
  branch: oneOf({
    type: 'string',
    format: 'uuid',
    description: 'Id of the Tillhub branch resource'
  }),
  register: oneOf({
    type: 'string',
    format: 'uuid',
    description: 'Id of the Tillhub register resource'
  }),
  branch_number: {
    deprecated: true,
    ...oneOf({
      type: 'integer',
      example: 7,
      description: 'The branch number (to be branch_custom_id)'
    })
  },
  register_number: {
    deprecated: true,
    ...oneOf({
      type: 'integer',
      example: 3,
      description: 'The register number (to be register_custom_id)'
    })
  },
  client: {
    deprecated: true,
    ...oneOf({
      type: 'string',
      format: 'uuid',
      example: '5ad2351d-9a67-45f9-ad4f-0abcbefa9037',
      description: 'The associated Tillhub client resource identifier.'
    })
  },
  guid: {
    deprecated: true,
    ...oneOf({
      type: 'string',
      example: '00110002000120190123175129150',
      description: 'The balance\'s unique identifier built on the client: 0011 + register(%04lu) + branch(%04lu) + yyyyMMddHHmmssSSS'
    })
  },
  client_id: {
    ...oneOf({
      type: 'string',
      description: stripIndents`
      The unique identifier within the application (balance producer)

      Note: this will be used as idempotency mechanism.
      `
    })
  },
  date: {
    deprecated: true,
    type: 'string',
    format: 'date-time',
    example: '2019-01-23 16:51:29.143+00',
    description: 'Closing date of the balance'
  },
  date_begin: {
    deprecated: true,
    type: 'string',
    format: 'date-time',
    example: '2019-01-23 16:51:29.143+00',
    description: 'Opening date of the balance'
  },
  cashier_staff: {
    deprecated: true,
    ...oneOf({
      type: 'string',
      format: 'uuid',
      example: '5ad2351d-9a67-45f9-ad4f-0abcbefa9037',
      description: 'The staff ressource id of the responsible cashier'
    })
  },
  cashier_staff_number: {
    deprecated: true,
    ...oneOf({
      type: 'string',
      example: '0018',
      description: 'The staff custom id of the responsible cashier'
    })
  },
  temp_staff: {
    deprecated: true,
    ...oneOf({
      type: 'string',
      format: 'uuid',
      example: '5ad2351d-9a67-45f9-ad4f-0abcbefa9037',
      description: 'Id of temporary/secondary Tillhub staff resource - lending permissions'
    })
  },
  branch_fa_ident: {
    deprecated: true,
    ...oneOf({
      description: 'Is not used at all'
    })
  },
  geo_data: {
    deprecated: true,
    ...oneOf({
      description: 'Not yet used, layout missing'
    })
  },
  cash_begin: {
    deprecated: true,
    ...oneOf({
      type: 'integer',
      example: 50000,
      description: 'The amount of cash when the register was opened (e.g. 50.00€)'
    })
  },
  cash_revenue: {
    deprecated: true,
    ...oneOf({
      type: 'integer',
      example: 230000,
      description: 'The daily cash revenue, POS: cashPaymentTotal - changeTotal - tipsCash'
    })
  },
  total_revenue: {
    deprecated: true,
    ...oneOf({
      type: 'integer',
      example: 430000,
      description: 'The daily total revenue, POS: revenueGrossTotal (all cart item totals that are not tip), includes vouchers'
    })
  },
  expenses_cash_total: {
    deprecated: true,
    ...oneOf({
      type: 'integer',
      example: 1200,
      description: 'The daily expenses, POS: expensesCashTotal, API: transactionTotal(type: expense), includes tip expenses'
    })
  },
  expenses_tips_total: {
    deprecated: true,
    ...oneOf({
      type: 'integer',
      example: 1850,
      description: 'The daily tip pay outs, POS: expensesTipsTotal, API: transactionTotal(type: expense, expense.expense_account_type: tip_expense)'
    })
  },
  cash_total_calculated: {
    deprecated: true,
    ...oneOf({
      type: 'integer',
      example: 281000,
      description: 'The calulated (should be) cash amount when closing the register, POS: cash_begin + cash_revenue + expenses_cash_total + tips_cash'
    })
  },
  cash_total_counted: {
    deprecated: true,
    ...oneOf({
      type: 'integer',
      example: 280000,
      description: 'The (is) cash amount - counted by a cashier - when closing the register, POS: user input'
    })
  },
  cash_discrepancy: {
    deprecated: true,
    ...oneOf({
      type: 'integer',
      example: 1000,
      description: 'The discrepancy between calculated and counted cash: cash_total_counted - cash_total_calculated'
    })
  },
  tips_total: {
    deprecated: true,
    ...oneOf({
      type: 'integer',
      example: 3405,
      description: 'The total amount of all tips for that balance. (carry over not included)'
    })
  },
  tips_cash: {
    deprecated: true,
    ...oneOf({
      type: 'integer',
      example: 2850,
      description: 'The total amount of all cash tips for that balance. (carry over not included)'
    })
  },
  tips_begin: {
    deprecated: true,
    ...oneOf({
      type: 'integer',
      example: 560,
      description: 'The total carry-over of tips from the previous balance (tips at opening).'
    })
  },
  tips_balance: {
    deprecated: true,
    ...oneOf({
      type: 'integer',
      example: 2850,
      description: 'The total carry-over of tips for the next balance (tps at closing).'
    })
  },
  sales_count: {
    deprecated: true,
    ...oneOf({
      type: 'integer',
      example: 26,
      description: 'Daily balance count of transactions of type_name \'sale\' and \'sale_cancel\', POS: salesCount - salesCancelCount'
    })
  },
  currency_iso_code: {
    deprecated: true,
    ...oneOf({
      type: 'string',
      example: 'EUR',
      description: 'The three letter [ISO currency](https://en.wikipedia.org/wiki/ISO_4217) of this balance.'
    })
  },
  receipt_text: {
    deprecated: true,
    ...oneOf({
      type: 'string',
      description: 'Receipt printable plaintext of the balance.'
    })
  },
  fr_receipt_id: {
    deprecated: true,
    ...oneOf({
      type: 'integer',
      description: 'Is not used'
    })
  },
  revenues: oneOf({
    type: 'array',
    description: 'Revenues grouped by financial account',
    items: {
      ...balanceRevenuesObject
    }
  }),
  vats: oneOf({
    type: 'array',
    description: 'Taxes grouped by VAT account',
    items: {
      ...balanceVatsObject
    }
  }),
  expenses: oneOf({
    type: 'array',
    description: 'Expenses grouped by financial account',
    items: {
      ...balanceExpensesObject
    }
  }),
  payments: oneOf({
    type: 'array',
    description: 'Payments grouped by payment option',
    items: {
      ...balancePaymentsObject
    }
  }),
  tips: oneOf({
    type: 'array',
    description: 'Tips grouped by salesperson',
    items: {
      ...balanceTipsObject
    }
  }),
  cash_units: oneOf({
    description: 'Counted cash in bills and coins',
    ...balanceCashUnitsObject
  }),
  extended: oneOf({
    ...balanceExtendedObject
  }),
  _metadata: oneOf({
    ...balanceMetadataObject
  })
}
