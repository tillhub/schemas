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
    show_account_names: {
      description: 'Defines if account names are shown additionally to the numbers.',
      default: false,
      oneOf: [
        {
          type: 'null'
        },
        {
          type: 'boolean'
        }
      ]
    }
  }
}
