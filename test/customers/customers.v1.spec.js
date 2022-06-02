const test = require('tape')
const validate = require('../helpers/validate-schema')
const customers = require('../../lib/v1/customers')

test('Customers:v0: read.all schema validation', function (t) {
  const { valid, error } = validate(customers.read.all.response)
  t.ok(valid, 'update response schema is valid')
  t.error(error, 'should not get any error')

  t.end()
})
