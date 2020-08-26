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
      description: 'If true, adds extended balance information to the UI.',
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
    extended_data_layout: {
      oneOf: [
        {
          type: 'null'
        },
        {
          type: 'object',
          additionalProperties: false,
          description: 'data to be displayed if extended_report = true',
          properties: {
            revenue_net: {
              type: 'boolean',
              description: 'Total amount gross - VAT',
              default: 'true'
            },
            average_amount_gross_per_cart: {
              type: 'boolean',
              description: 'Total amount tx gross / (number of sales- sales cancelled) ',
              default: 'true'
            },
            average_cart_items_count_per_cart: {
              type: 'boolean',
              description: 'Average number of cart items per sale, total count of product sold / count of transaction',
              default: 'true'
            },
            first_last_tx_number: {
              type: 'boolean',
              description: 'first and last transaction number',
              default: 'true'
            },
            VAT_details: {
              type: 'boolean',
              description: 'Display the Total, gross, net per VAT account',
              default: 'true'
            },
            discount_amount: {
              type: 'boolean',
              description: 'Sum of discounts amounts - Cancelled discounts ',
              default: 'true'
            },
            total_quantity: {
              type: 'boolean',
              description: 'All quantities in transactions summed up → This figure might not be representative in the case of decimal products (Example: 900 gr) ',
              default: 'true'
            },
            cart_items_count: {
              type: 'boolean',
              description: 'count of cart items',
              default: 'true'
            },
            voucher_amount: {
              type: 'boolean',
              description: 'sum of the amounts of vouchers sold (positive values only)',
              default: 'true'
            }
          }
        }
      ]
    },
    print_extended: {
      description: 'If true, adds extended balance information to the receipts.',
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
