const commonResponse = require('../../../common/response')

module.exports.request = {
  query: {
    $id: 'https://schemas.tillhub.com/v0/analytics.create.request.query.schema.json',
    $schema: 'http://json-schema.org/draft-07/schema#',
    additionalProperties: true,
    type: 'object',
    required: [
      'start',
      'end'
    ],
    properties: {
      start: {
        type: 'string',
        format: 'date-time'
      },
      end: {
        type: 'string',
        format: 'date-time'
      }
    }
  }
}

module.exports.response = {
  $id: 'https://schemas.tillhub.com/v0/analytics.create.response.schema.json',
  $schema: 'http://json-schema.org/draft-07/schema#',
  additionalProperties: false,
  ...commonResponse({
    resultItems: {
      anyOf: [
        require('./jobs/bank.amount_total'),
        require('./jobs/cancellations.amount_total.cancelled'),
        require('./jobs/cancellations.amount_total_refunded'),
        require('./jobs/cancellations.cancellations_count'),
        require('./jobs/cancellations.refunds_count'),
        require('./jobs/cancellations.share_of_cancelled'),
        require('./jobs/cancellations.share_of_refunded'),
        require('./jobs/discounts.amount_total'),
        require('./jobs/discounts.count'),
        require('./jobs/discounts.share_of'),
        require('./jobs/expenses.amount_total'),
        require('./jobs/payments.card.count'),
        require('./jobs/payments.card.revenue'),
        require('./jobs/payments.cash.count'),
        require('./jobs/payments.cash.discrepancy'),
        require('./jobs/payments.cash.revenue'),
        require('./jobs/payments.giftcard.count'),
        require('./jobs/payments.giftcard.revenue'),
        require('./jobs/product_groups.revenue'),
        require('./jobs/product_groups.share_of'),
        require('./jobs/safe.amount_total'),
        require('./jobs/transactions.first_transaction'),
        require('./jobs/transactions.last_transaction')
      ].map((item) => {
        return {
          type: 'object',
          additionalProperties: false,
          properties: item
        }
      })
    }
  })
}
