const test = require('tape')
const validate = require('../helpers/validate-schema')

test('Transactions: v1: create request schema', function (t) {
  t.plan(2)
  const createRequest = require('../../lib/v1/transactions').create.request
  const { valid, error } = validate(createRequest)
  t.ok(valid, 'create schema is valid')
  t.error(error, 'should not get any error')
  t.end()
})

test('Transactions: v1: create response schema', function (t) {
  t.plan(2)
  const createRequest = require('../../lib/v1/transactions').create.response
  const { valid, error } = validate(createRequest)
  t.ok(valid, 'create schema is valid')
  t.error(error, 'should not get any error')
  t.end()
})

test('Transactions: v1: legacy: create request schema', function (t) {
  t.plan(2)
  const createRequest = require('../../lib/v1/transactions').legacy.create.request
  const { valid, error } = validate(createRequest)
  t.ok(valid, 'create schema is valid')
  t.error(error, 'should not get any error')
  t.end()
})

test('Transactions: v1: legacy: create response schema', function (t) {
  t.plan(2)
  const createRequest = require('../../lib/v1/transactions').legacy.create.response
  const { valid, error } = validate(createRequest)
  t.ok(valid, 'create schema is valid')
  t.error(error, 'should not get any error')
  t.end()
})
