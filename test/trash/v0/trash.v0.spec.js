
const test = require('tape')
const validate = require('../../helpers/validate-schema')

test('Trash V0: create schema validation', function (t) {
  t.plan(2)
  const getRequest = require('../../../lib/v0/trash').get.query
  const { valid, error } = validate(getRequest)
  t.ok(valid, 'get schema is valid')
  t.error(error, 'should not get any error')
  t.end()
})

test('Trash V0: update schema validation', function (t) {
  t.plan(2)
  const updateRequest = require('../../../lib/v0/trash').update.request
  const { valid, error } = validate(updateRequest)
  t.ok(valid, 'update schema is valid')
  t.error(error, 'should not get any error')
  t.end()
})
