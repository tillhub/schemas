const { oneOf } = require('../../../helpers/payload-or-null')
module.exports = {

  type: 'object',
  properties: {
    skip_x_report: oneOf({
      description: 'If true, skips the x-report and directly goes to conduct a balance.',
      type: 'boolean',
      default: false
    }),
    print_automatically: oneOf({
      description: 'If true - print the balance automatically after closing the register.',
      type: 'boolean',
      default: false
    }),
    sales_required: oneOf({
      description: 'If true, balances are not conductable without fiat/cash cashflows.',
      type: 'boolean',
      default: true
    }),
    discrepancy_warning: oneOf({
      description: 'If true, warns the user when cash counted is not equal to cash calculated.',
      type: 'boolean',
      default: true
    }),
    extended_report: oneOf({
      description: 'If true, adds extended balance information to the UI.',
      type: 'boolean',
      default: false
    }),
    grouped_expenses: oneOf({
      description: 'If true - show the expenses grouped by their financial accounts, otherwise only the total.',
      type: 'boolean',
      default: false
    }),
    print_extended: oneOf({
      description: 'If true and extended_report = true - prints extended balance information on the receipt.',
      type: 'boolean',
      default: false
    }),
    extended_excludes_vouchers: oneOf({
      description: 'If true and extended_report = true - excludes vouchers from the calculation (switches to a different set of properties).',
      type: 'boolean',
      default: false
    }),
    extended_data_layout: oneOf({
      type: 'object',
      additionalProperties: false,
      description: 'data to be displayed and printed if extended_report = true',
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
        first_last_transaction_number: {
          type: 'boolean',
          description: 'first and last transaction number',
          default: 'true'
        },
        first_last_expense_deposit: {
          type: 'boolean',
          description: 'first and last expense and deposit',
          default: 'true'
        },
        vat_details: {
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
        },
        cashier_stats: {
          type: 'boolean',
          description: 'Per cashier payment stats',
          default: 'true'
        }
      }
    }),
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
