const test = require('tape')
const validate = require('../helpers/validate-schema')

test('Gastro Orders: v1: deltas: create request schema', function (t) {
  t.plan(2)
  const createRequest = require('../../lib/v1/gastro_orders').deltas.create.request
  const { valid, error } = validate(createRequest)
  t.ok(valid, 'create schema is valid')
  t.error(error, 'should not get any error')
  t.end()
})

test('Gastro Orders: v1: deltas: create response schema', function (t) {
  t.plan(2)
  const createRequest = require('../../lib/v1/gastro_orders').deltas.create.response
  const { valid, error } = validate(createRequest)
  t.ok(valid, 'create schema is valid')
  t.error(error, 'should not get any error')
  t.end()
})
