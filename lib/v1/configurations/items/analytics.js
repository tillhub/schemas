const apis = [
  'tillhub-analytics-api'
]

module.exports = {
  type: 'object',
  additionalProperties: false,
  properties: {
    enabled: {
      type: 'boolean',
      default: true
    },
    sync_ui_timeout: {
      oneOf: [
        {
          description: 'Timeout (in seconds) for hiding UI components (activity indicator)',
          type: 'number',
          minimum: 0,
          default: 10
        },
        {
          type: 'null'
        }
      ]
    },
    externals: {
      description: 'This defines whether a client account should be able to consume external analytics data, e.g. of other Tillhub client accounts.',
      type: 'object',
      additionalProperties: false,
      properties: {
        enabled: {
          type: 'boolean',
          default: false
        },
        systems: {
          type: 'array',
          items: {
            type: 'object',
            additionalProperties: false,
            properties: {
              type: {
                type: 'string',
                enum: [
                  ...apis
                ]
              },
              enabled: {
                type: 'boolean',
                default: true
              },
              id: {
                type: 'string',
                minLength: 5,
                maxLength: 64
              },
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
              }
            }
          }
        }
      }
    },
    external_targets: {
      description: 'This defines to which external systems analytics data should be made available, e.g. other Tillhub client accounts. Those external systems need to be authorised additionally via a user, with sufficient scopes. In the Tillhub client account to Tillhub client account scenerio the target account must have a matching \'external\' entry as it is defined above.',
      type: 'object',
      additionalProperties: false,
      properties: {
        enabled: {
          type: 'boolean',
          default: false
        },
        systems: {
          type: 'array',
          items: {
            type: 'object',
            additionalProperties: false,
            properties: {
              type: {
                type: 'string',
                enum: [
                  ...apis
                ]
              },
              enabled: {
                type: 'boolean',
                default: true
              },
              id: {
                type: 'string',
                minLength: 5,
                maxLength: 64
              }
            }
          }
        }
      }
    },
    snapshots: {
      type: 'object',
      additionalProperties: false,
      properties: {
        enabled: {
          type: 'boolean',
          default: true
        },
        list: {
          type: 'array',
          items: {
            type: 'object',
            properties: {
              label: {
                oneOf: [
                  {
                    type: 'string',
                    maxLength: 512
                  },
                  {
                    type: 'null'
                  }
                ]
              },
              job: {
                type: 'string',
                enum: [
                  'analytics_snapshots_bank_amount_total',
                  'analytics_snapshots_cancellations_amount_total_refunded',
                  'analytics_snapshots_cancellations_amount_total_cancelled',
                  'analytics_snapshots_cancellations_cancellations_count',
                  'analytics_snapshots_cancellations_refunds_count',
                  'analytics_snapshots_cancellations_share_of_cancelled',
                  'analytics_snapshots_cancellations_share_of_refunded',
                  'analytics_snapshots_discounts_amount_total',
                  'analytics_snapshots_discounts_count',
                  'analytics_snapshots_discounts_share_of',
                  'analytics_snapshots_expenses_amount_total',
                  'analytics_snapshots_payments_card_count',
                  'analytics_snapshots_payments_card_revenue',
                  'analytics_snapshots_payments_cash_count',
                  'analytics_snapshots_payments_cash_discrepancy',
                  'analytics_snapshots_payments_cash_revenue',
                  'analytics_snapshots_payments_giftcard_count',
                  'analytics_snapshots_payments_giftcard_revenue',
                  'analytics_snapshots_product_groups_revenue',
                  'analytics_snapshots_product_groups_share_of',
                  'analytics_snapshots_safe_amount_total',
                  'analytics_snapshots_transactions_first_transaction',
                  'analytics_snapshots_transactions_last_transaction'
                ]
              }
            }
          }
        }
      }
    }
  }
}
