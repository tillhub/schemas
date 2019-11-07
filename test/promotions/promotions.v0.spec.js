const test = require('tape')
const validate = require('../helpers/validate-schema')

test('Promotions: create schema validation', function (t) {
  t.plan(2)
  const createRequest = require('../../lib/v0/promotions').create.request
  const { valid, error } = validate(createRequest)
  t.ok(valid, 'create schema is valid')
  t.error(error, 'should not get any error')
  t.end()
})

test('Promotions: update schema validation', function (t) {
  t.plan(2)
  const updateRequest = require('../../lib/v0/promotions').update.request
  const { valid, error } = validate(updateRequest)
  t.ok(valid, 'update schema is valid')
  t.error(error, 'should not get any error')
  t.end()
})
