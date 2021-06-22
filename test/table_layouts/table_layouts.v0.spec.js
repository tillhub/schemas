const test = require('tape')
const validate = require('../helpers/validate-schema')

test('Table Layouts: v0: create request schema', function (t) {
  t.plan(2)
  const createRequest = require('../../lib/v0/table_layouts').register.create.request
  const { valid, error } = validate(createRequest)
  t.ok(valid, 'create schema is valid')
  t.error(error, 'should not get any error')
  t.end()
})

test('Table Layouts: v0: create response schema', function (t) {
  t.plan(2)
  const createResponse = require('../../lib/v0/table_layouts').register.create.response
  const { valid, error } = validate(createResponse)
  t.ok(valid, 'get schema is valid')
  t.error(error, 'should not get any error')
  t.end()
})

test('Table Layouts: v0: get response schema', function (t) {
  t.plan(2)
  const getResponse = require('../../lib/v0/table_layouts').register.get.response
  const { valid, error } = validate(getResponse)
  t.ok(valid, 'get schema is valid')
  t.error(error, 'should not get any error')
  t.end()
})
