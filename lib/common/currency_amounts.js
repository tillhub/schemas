const currencyAmountObject = require('../common/currency_amount')

module.exports = {
  type: 'array',
  description: 'A list of non-negative monetary values by currency',
  items: {
    ...currencyAmountObject
  }
}
