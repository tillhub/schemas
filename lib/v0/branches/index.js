module.exports.create = require('./create')
module.exports.read = require('./read')
module.exports.update = require('./update')
module.exports.shift_plan = {
  read: require('./shift_plan/read'),
  update: require('./shift_plan/update')
}
