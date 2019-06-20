const test = require('tape')
const validate = require('../helpers/validate-schema')

test('Loyalty Accounts: create schema validation: request', function (t) {
  t.plan(2)
  const createRequest = require('../../lib/v0/loyalty_logs').create.request
  const { valid, error } = validate(createRequest)
  t.ok(valid, 'create request schema is valid')
  t.error(error, 'should not get any error')
  t.end()
})

test('Loyalty Accounts: create schema validation: response', function (t) {
  t.plan(2)
  const createResponse = require('../../lib/v0/loyalty_logs').create.response
  const { valid, error } = validate(createResponse)
  t.ok(valid, 'create response schema is valid')
  t.error(error, 'should not get any error')
  t.end()
})

test('Loyalty Accounts: get schema validation: query', function (t) {
  t.plan(2)
  const getQuery = require('../../lib/v0/loyalty_logs').get.query
  const { valid, error } = validate(getQuery)
  t.ok(valid, 'get query schema is valid')
  t.error(error, 'should not get any error')
  t.end()
})
