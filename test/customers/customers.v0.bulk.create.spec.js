const test = require('tape')
const validate = require('../helpers/validate-schema')

test('Customers V0: create bulk schema validation', function (t) {
  t.plan(2)
  const createRequest = require('../../lib/v0/customers').bulk.create.request
  const { valid, error } = validate(createRequest)
  t.ok(valid, 'bulk create schema is valid')
  t.error(error, 'should not get any error')
  t.end()
})
