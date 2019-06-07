const test = require('tape')
const validate = require('../helpers/validate-schema')

test('Warehouses: create schema validation', function (t) {
  t.plan(2)
  const req = require('../../lib/v0/warehouses').create.request
  const { valid, error } = validate(req)
  t.ok(valid, 'create schema is valid')
  t.error(error, 'should not get any error')
  t.end()
})

test('Warehouses: update schema validation', function (t) {
  t.plan(2)
  const req = require('../../lib/v0/warehouses').update.request
  const { valid, error } = validate(req)
  t.ok(valid, 'update schema is valid')
  t.error(error, 'should not get any error')
  t.end()
})
