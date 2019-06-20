const test = require('tape')
const validate = require('../helpers/validate-schema')

test('Loyalty Accounts: create schema validation: request', function (t) {
  t.plan(2)
  const createRequest = require('../../lib/v0/loyalty_accounts').create.request
  const { valid, error } = validate(createRequest)
  t.ok(valid, 'create request schema is valid')
  t.error(error, 'should not get any error')
  t.end()
})

test('Loyalty Accounts: create schema validation: response', function (t) {
  t.plan(2)
  const createResponse = require('../../lib/v0/loyalty_accounts').create.response
  const { valid, error } = validate(createResponse)
  t.ok(valid, 'create response schema is valid')
  t.error(error, 'should not get any error')
  t.end()
})

test('Loyalty Accounts: update schema validation: request', function (t) {
  t.plan(2)
  const updateRequest = require('../../lib/v0/loyalty_accounts').update.request
  const { valid, error } = validate(updateRequest)
  t.ok(valid, 'update request schema is valid')
  t.error(error, 'should not get any error')
  t.end()
})

test('Loyalty Accounts: update schema validation: response', function (t) {
  t.plan(2)
  const updateResponse = require('../../lib/v0/loyalty_accounts').update.response
  const { valid, error } = validate(updateResponse)
  t.ok(valid, 'update response schema is valid')
  t.error(error, 'should not get any error')
  t.end()
})

test('Loyalty Accounts: get schema validation: query', function (t) {
  t.plan(2)
  const getQuery = require('../../lib/v0/loyalty_accounts').get.query
  const { valid, error } = validate(getQuery)
  t.ok(valid, 'get query schema is valid')
  t.error(error, 'should not get any error')
  t.end()
})
