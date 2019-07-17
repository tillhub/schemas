const test = require('tape')
const validate = require('../helpers/validate-schema')

test('Loyalty Values: create schema validation: request', function (t) {
  t.plan(2)
  const createRequest = require('../../lib/v0/loyalty_values').create.request
  const { valid, error } = validate(createRequest)
  t.ok(valid, 'create request schema is valid')
  t.error(error, 'should not get any error')
  t.end()
})

test('Loyalty Values: create schema validation: response', function (t) {
  t.plan(2)
  const createResponse = require('../../lib/v0/loyalty_values').create.response
  const { valid, error } = validate(createResponse)
  t.ok(valid, 'create response schema is valid')
  t.error(error, 'should not get any error')
  t.end()
})

test('Loyalty Values: book schema validation: request', function (t) {
  t.plan(2)
  const bookRequestBody = require('../../lib/v0/loyalty_values').book.request
  const { valid, error } = validate(bookRequestBody)
  t.ok(valid, 'book request schema is valid')
  t.error(error, 'should not get any error')
  t.end()
})
