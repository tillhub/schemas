const test = require('tape')
const validate = require('../helpers/validate-schema')

test('Product Service Questions: create schema validation', function (t) {
  t.plan(2)
  const createRequest = require('../../lib/v0/product_service_questions').create.request
  const { valid, error } = validate(createRequest)
  t.ok(valid, 'create schema is valid')
  t.error(error, 'should not get any error')
  t.end()
})

test('Product Service Questions: update schema validation', function (t) {
  t.plan(2)
  const updateRequest = require('../../lib/v0/product_service_questions').update.request
  const { valid, error } = validate(updateRequest)
  t.ok(valid, 'update schema is valid')
  t.error(error, 'should not get any error')
  t.end()
})
