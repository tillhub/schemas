const test = require('tape')
const validate = require('../helpers/validate-schema')

test('Safes Log Book: get response schema validation', function (t) {
  t.plan(2)
  const getResponse = require('../../lib/v0/safes_log_book').get.response
  const { valid, error } = validate(getResponse)
  t.ok(valid, 'get response schema is valid')
  t.error(error, 'should not get any error')
  t.end()
})
