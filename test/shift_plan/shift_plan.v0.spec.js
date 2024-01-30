const test = require('tape')
const validate = require('../helpers/validate-schema')

test('Shift Plan V0: update schema validation', function (t) {
  t.plan(2)
  const updateRequest = require('../../lib/v0/shift_plan').update.request
  const { valid, error } = validate(updateRequest)
  t.ok(valid, 'update schema is valid')
  t.error(error, 'should not get any error')
  t.end()
})
