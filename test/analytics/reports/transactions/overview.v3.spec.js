const test = require('tape')
const validate = require('../../../helpers/validate-schema')
const overviewSchema = require('../../../../lib/v3/analytics/reports/transactions/overview')

test('analytics:reports:transactions:overview:v3: response schema validation', function (t) {
  const { valid, error } = validate(overviewSchema.response)
  t.ok(valid, 'create response schema is valid')
  t.error(error, 'should not get any error')

  t.end()
})
