const test = require('tape')
const validate = require('../helpers/validate-schema')

test('Balances: v1: create schema validation', function (t) {
  t.plan(2)
  const createRequest = require('../../lib/v1/balances').create.request
  const { valid, error } = validate(createRequest)
  t.ok(valid, 'create schema is valid')
  t.error(error, 'should not get any error')
  t.end()
})

test('Balances: v1: get schema validation', function (t) {
  t.plan(2)
  const getResponse = require('../../lib/v1/balances').get.all.response
  const { valid, error } = validate(getResponse)
  t.ok(valid, 'get schema is valid')
  t.error(error, 'should not get any error')
  t.end()
})

test('Balances: v1: create response schema', function (t) {
  t.plan(2)
  const createResponse = require('../../lib/v1/balances').create.response
  const { valid, error } = validate(createResponse)
  t.ok(valid, 'response schema is valid')
  t.error(error, 'should not get any error')
  t.end()
})

test('Balances: v1: legacy: create request schema', function (t) {
  t.plan(2)
  const createRequest = require('../../lib/v1/balances').legacy.create.request
  const { valid, error } = validate(createRequest)
  t.ok(valid, 'create schema is valid')
  t.error(error, 'should not get any error')
  t.end()
})

test('Balances: v1: legacy: create response schema', function (t) {
  t.plan(2)
  const createResponse = require('../../lib/v1/balances').legacy.create.response
  const { valid, error } = validate(createResponse)
  t.ok(valid, 'response schema is valid')
  t.error(error, 'should not get any error')
  t.end()
})
