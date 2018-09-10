const test = require('tape')
const validate = require('../helpers/validate-schema')

test('Branches: create schema validation', function (t) {
  t.plan(2)
  const createRequest = require('../../lib/v0/branches').create.request
  const { valid, error } = validate(createRequest)
  t.ok(valid, 'create schema is valid')
  t.error(error, 'should not get any error')
  t.end()
})

test('Branches: update schema validation', function (t) {
  t.plan(2)
  const updateRequest = require('../../lib/v0/branches').update.request
  const { valid, error } = validate(updateRequest)
  t.ok(valid, 'create schema is valid')
  t.error(error, 'should not get any error')
  t.end()
})
