module.exports = {

  type: 'object',
  properties: {
    skip_x_report: {
      description: 'If true, skips the x-report and directly goes to conduct a balance.',
      default: false,
      oneOf: [
        {
          type: 'null'
        },
        {
          type: 'boolean'
        }
      ]
    },
    sales_required: {
      description: 'If true, balances are not conductable without fiat/cash cashflows.',
      default: true,
      oneOf: [
        {
          type: 'null'
        },
        {
          type: 'boolean'
        }
      ]
    },
    discrepancy_warning: {
      description: 'If true, warns the user when cash counted is not equal to cash calculated.',
      default: true,
      oneOf: [
        {
          type: 'null'
        },
        {
          type: 'boolean'
        }
      ]
    },
    extended_report: {
      description: 'If true, adds extended balance information to the UI and the receipts.',
      default: false,
      oneOf: [
        {
          type: 'null'
        },
        {
          type: 'boolean'
        }
      ]
    },
    tips_expense: {
      description: 'Defines if a tip expense is required within conducting the balance (if tips > 0).',
      type: 'string',
      enum: [
        'none',
        'optional',
        'required'
      ]
    },
    bank_expense: {
      description: 'Defines if a bank expense is required within conducting the balance (if register cash > 0).',
      type: 'string',
      enum: [
        'none',
        'optional',
        'required'
      ]
    },
    balance_submission_UI: {
      oneOf: [
        {
          type: 'null'
        },
        {
          type: 'object',
          additionalProperties: false,
          properties: {
            enabled: {
              description: 'Specifies if UI for synchronization on items is available.',
              type: 'boolean',
              default: true
            },
            interval: {
              description: 'If balance_submission_UI enabled - items will be synched automatically every interval SECONDS.',
              type: 'number',
              default: 120.0
            },
            retry_count: {
              description: 'Defines the amout of new attempts',
              type: 'number',
              default: 3.0
            },
            schedule_time: {
              description: 'After defined amout of attempts failed, sync state is defined on scheduled.',
              type: 'boolean',
              default: true
            }
          }
        }
      ]
    }
  }
}
