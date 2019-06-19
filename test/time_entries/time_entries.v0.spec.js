const test = require('tape')
const validate = require('../helpers/validate-schema')

test('Time Entries: create schema validation', function (t) {
  t.plan(2)
  const createRequest = require('../../lib/v0/time_entries').create.request
  const { valid, error } = validate(createRequest)
  t.ok(valid, 'create schema is valid')
  t.error(error, 'should not get any error')
  t.end()
})

test('Time Entries: update schema validation', function (t) {
  t.plan(2)
  const updateRequest = require('../../lib/v0/time_entries').update.request
  const { valid, error } = validate(updateRequest)
  t.ok(valid, 'update schema is valid')
  t.error(error, 'should not get any error')
  t.end()
})
