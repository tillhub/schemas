const test = require('tape')
const validate = require('../helpers/validate-schema')

test('Stock: create schema validation', function (t) {
  t.plan(2)
  const req = require('../../lib/v0/stock').create.request
  const { valid, error } = validate(req)
  t.ok(valid, 'create schema is valid')
  t.error(error, 'should not get any error')
  t.end()
})

test('Stock: update schema validation', function (t) {
  t.plan(2)
  const req = require('../../lib/v0/stock').update.request
  const { valid, error } = validate(req)
  t.ok(valid, 'update schema is valid')
  t.error(error, 'should not get any error')
  t.end()
})

test('Stock: transfer schema validation', function (t) {
  t.plan(2)
  const req = require('../../lib/v0/stock').transfer.request
  const { valid, error } = validate(req)
  t.ok(valid, 'update schema is valid')
  t.error(error, 'should not get any error')
  t.end()
})
