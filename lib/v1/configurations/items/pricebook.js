const { oneOf } = require('../../../helpers/payload-or-null')

module.exports = {
  defaut_price: oneOf({
    type: 'string',
    description: 'Defines which price is chosen by default when conflict',
    enum: [
      'default',
      'pricebook',
      'none'
    ]
  })
}
