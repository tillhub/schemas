const test = require('tape')
const validate = require('../helpers/validate-schema')

test('Configurations: create schema validation', function (t) {
  t.plan(2)
  const createRequest = require('../../lib/v1/configurations').create.request
  const { valid, error } = validate(createRequest)
  t.ok(valid, 'create schema is valid')
  t.error(error, 'should not get any error')
  t.end()
})

test('Configurations: update schema validation', function (t) {
  t.plan(2)
  const updateRequest = require('../../lib/v1/configurations').update.request
  const { valid, error } = validate(updateRequest)
  t.ok(valid, 'update schema is valid')
  t.error(error, 'should not get any error')
  t.end()
})

test('Configurations: patch schema validation', function (t) {
  t.plan(2)
  const createRequest = require('../../lib/v1/configurations').patch.request
  const { valid, error } = validate(createRequest)
  t.ok(valid, 'patch schema is valid')
  t.error(error, 'should not get any error')
  t.end()
})
