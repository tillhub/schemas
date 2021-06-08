const test = require('tape')
const validate = require('../helpers/validate-schema')

test('Products V1: create bulk schema validation', function (t) {
  t.plan(2)
  const createRequest = require('../../lib/v1/products').bulk.create.request
  const { valid, error } = validate(createRequest)
  t.ok(valid, 'bulk create schema is valid')
  t.error(error, 'should not get any error')
  t.end()
})

test('Products V1: update bulk schema validation', function (t) {
  t.plan(2)
  const updateRequest = require('../../lib/v1/products').bulk.update.request
  const { valid, error } = validate(updateRequest)
  t.ok(valid, 'bulk update schema is valid')
  t.error(error, 'should not get any error')
  t.end()
})
