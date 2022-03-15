const analyticsResponse = require('../../../../common/analytics_response')

const summary = {
  absolute_average_transaction_cancellation_items_total: {
    description: 'Absolute average total of transactions with type "sale_cancel"',
    example: 2,
    type: ['integer', 'null']
  },
  absolute_average_transaction_items_total: {
    description: 'Absolute average of transactions total',
    example: 2.01,
    type: 'number',
    multipleOf: 0.01
  },
  absolute_average_transaction_revenue_items_total: {
    description: 'Absolute average total of transactions with types "sale" and "sale_cancel"',
    example: 2.01,
    type: 'number',
    multipleOf: 0.01
  },
  absolute_average_transaction_sale_items_total: {
    description: 'Absolute average total of transactions with type "sale" which never been cancelled',
    example: 2.01,
    type: 'number',
    multipleOf: 0.01
  },
  average_transaction_total: {
    description: 'Average transactions total',
    example: 2.01,
    type: 'number',
    multipleOf: 0.01
  },
  change: {
    description: 'Total change',
    example: 2.01,
    type: 'number',
    multipleOf: 0.01
  },
  currency: {
    description: 'Currency ISO code',
    example: 'EUR',
    type: 'string',
    minLength: 3,
    maxLength: 3
  },
  total: {
    description: 'Total revenue',
    example: 2.01,
    type: 'number',
    multipleOf: 0.01
  },
  total_cancellation_items_count: {
    description: 'Total cancellations count',
    example: 3,
    type: 'integer'
  },
  total_count: {
    description: 'Total transaction count',
    example: 245,
    type: 'integer'
  },
  total_revenue_items_count: {
    description: 'Total revenues count',
    example: 67,
    type: 'integer'
  },
  total_sale_items_count: {
    description: 'Total sales count',
    example: 31,
    type: 'integer'
  }
}

const data = {
  additional_type: {
    description: 'Expense account type',
    example: '',
    type: ['string', 'null']
  },
  balance_custom_id: {
    description: 'Balance custom id',
    example: '2',
    type: ['string', 'null']
  },
  branch: {
    description: 'Branch UUID',
    example: '936835f7-2d75-41d2-9001-38ed6e458328',
    type: ['string', 'null'],
    format: 'uuid'
  },
  branch_custom_id: {
    description: 'Branch custom id',
    example: '4',
    type: ['string', 'null']
  },
  cashier_staff: {
    description: 'Cashier UUID',
    example: '936835f7-2d75-41d2-9001-38ed6e458328',
    type: ['string', 'null'],
    format: 'uuid'
  },
  cashier_staff_custom_id: {
    description: 'Cashier custom id',
    example: '234',
    type: ['string', 'null']
  },
  change: {
    description: 'The amount of change',
    example: 3.34,
    type: 'number',
    multipleOf: 0.01
  },
  currency: {
    description: 'Currency ISO code',
    example: 'EUR',
    type: 'string',
    minLength: 3,
    maxLength: 3
  },
  custom_id: {
    description: 'Transaction custom id',
    example: '17',
    type: 'string'
  },
  customer: {
    description: 'Customer UUID',
    example: '936835f7-2d75-41d2-9001-38ed6e458328',
    type: ['string', 'null'],
    format: 'uuid'
  },
  customer_custom_id: {
    description: 'Customer custom id',
    example: '8328',
    type: ['string', 'null']
  },
  customer_firstname: {
    description: 'Customer first name',
    example: 'Max',
    type: ['string', 'null']
  },
  customer_lastname: {
    description: 'Customer last name',
    example: 'Zimmerman',
    type: ['string', 'null']
  },
  customer_receipt: {
    description: 'The customer receipt multiline text',
    example: 'Bestellung: 17\n------------------------------------------\nWax in the City Berlin Charlottenburg',
    type: 'string'
  },
  date: {
    description: 'The transaction date and time in ISO 8601 format',
    example: 2,
    type: 'string',
    format: 'date-time'
  },
  id: {
    description: 'Transaction UUID',
    example: '936835f7-2d75-41d2-9001-38ed6e458328',
    type: 'string',
    format: 'uuid'
  },
  merchant_receipt: {
    description: 'The merchant receipt multiline text',
    example: 'Zweitschrift,\nelektronisches Aufzeichnungssystem',
    type: 'string'
  },
  register: {
    description: 'Register UUID',
    example: '936835f7-2d75-41d2-9001-38ed6e458328',
    type: 'string',
    format: 'uuid'
  },
  register_custom_id: {
    description: 'Register custom id',
    example: '979',
    type: 'string'
  },
  timezone: {
    description: 'Timezone code',
    example: 'Europe/Berlin',
    type: ['string', 'null']
  },
  total: {
    description: 'Transaction total amount',
    example: 2.01,
    type: 'number',
    multipleOf: 0.01
  },
  type: {
    description: 'Transaction type',
    example: 'sale',
    type: 'string'
  },
  _external_reference_id: {
    description: 'Transaction external id',
    type: ['string', 'null']
  },
  _id: {
    description: 'Transaction sequential id',
    example: '64305',
    type: ['string', 'null']
  }
}

const meta = {
  count: {
    description: 'Total transactions count',
    example: 315532,
    type: 'integer'
  }
}

const filteredMeta = {
  count: {
    description: 'Total transactions count under filters applied',
    example: 7655,
    type: 'integer'
  }
}

module.exports.response = {
  $id: 'https://schemas.tillhub.com/v3/analytics.reports.transactions.overview.response.schema.json',
  ...analyticsResponse([{
    job: { enum: ['reports_transactions_v2_overview_summary'] },
    type: { enum: ['summary'] }
  }, {
    job: { enum: ['reports_transactions_v2_overview_data'] },
    type: { enum: ['data_list'] }
  }, {
    job: { enum: ['reports_transactions_v2_overview_meta'] },
    type: { enum: ['meta'] }
  }, {
    job: { enum: ['reports_transactions_v2_overview_filtered_meta'] },
    type: { enum: ['filtered_meta'] }
  }], [
    summary,
    data,
    meta,
    filteredMeta
  ])
}
