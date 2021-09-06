const test = require('tape')
const validate = require('../helpers/validate-schema')

test('Vouchers: create schema validation', function (t) {
  t.plan(2)
  const createRequest = require('../../lib/v0/vouchers').create
  const { valid, error } = validate(createRequest)
  t.ok(valid, 'create schema is valid')
  t.error(error, 'should not get any error')
  t.end()
})

test('Vouchers: patch schema validation', function (t) {
  t.plan(2)
  const patchRequest = require('../../lib/v0/vouchers').patch
  const { valid, error } = validate(patchRequest)
  t.ok(valid, 'patch schema is valid')
  t.error(error, 'should not get any error')
  t.end()
})

test('Vouchers: increment or decrement schema validation', function (t) {
  t.plan(2)
  const incrementOrDecrementRequest = require('../../lib/v0/vouchers').incrementOrDecrement
  const { valid, error } = validate(incrementOrDecrementRequest)
  t.ok(valid, 'increment or decrement schema is valid')
  t.error(error, 'should not get any error')
  t.end()
})

test('Vouchers: bulk create schema validation', function (t) {
  t.plan(2)
  const bulkRequest = require('../../lib/v0/vouchers').bulk
  const { valid, error } = validate(bulkRequest)
  t.ok(valid, 'bulk create schema is valid')
  t.error(error, 'should not get any error')
  t.end()
})
