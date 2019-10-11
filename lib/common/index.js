
module.exports.patch = {
  request: require('./patch.request')
}

module.exports.timezone = require('./timezones').timezone
module.exports.available_currency = require('./currencies').available_currency

module.exports.product_price = require('../v1/products/common/price')
