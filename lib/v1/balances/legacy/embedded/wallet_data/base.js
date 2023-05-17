const { oneOf } = require('../../../../../helpers/payload-or-null')
const currencyAmount = require('../../../../../common/currency_amount')
const balanceWalletObject = require('./wallet')

module.exports = {
  description: 'Balance stats for waiter wallets',
  additionalProperties: false,
  type: 'object',
  properties: {
    outstanding_total: oneOf({
      description: 'The outstanding cash from all wallets at the time of the balance',
      ...currencyAmount
    }),
    wallets: oneOf({
      type: 'array',
      description: 'Wallet balance objects',
      items: {
        ...balanceWalletObject
      }
    })
  }
}
