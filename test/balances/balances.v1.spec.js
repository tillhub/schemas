const test = require('tape')
const validate = require('../helpers/validate-schema')

test('Balances: create schema validation', function (t) {
  t.plan(2)
  const createRequest = require('../../lib/v1/balances').create.request
  const { valid, error } = validate(createRequest)
  t.ok(valid, 'create schema is valid')
  t.error(error, 'should not get any error')
  t.end()
})
