const test = require('tape')
const validate = require('../helpers/validate-schema')

test('Products V1 Customzations: create schema validation', function (t) {
  t.plan(2)
  const createRequest = require('../../lib/v1/products').customizations.create.request
  const { valid, error } = validate(createRequest)
  t.ok(valid, 'create schema is valid')
  t.error(error, 'should not get any error')
  t.end()
})

test('Products V1 Customzations: update schema validation', function (t) {
  t.plan(2)
  const updateRequest = require('../../lib/v1/products').customizations.update.request
  const { valid, error } = validate(updateRequest)
  t.ok(valid, 'update schema is valid')
  t.error(error, 'should not get any error')
  t.end()
})
