const test = require('tape')
const validate = require('../helpers/validate-schema')

test('Templates: create schema validation', function (t) {
  t.plan(2)
  const createRequest = require('../../lib/v0/pdfs/').templates.invoices.create.request
  const { valid, error } = validate(createRequest)
  t.ok(valid, 'create schema is valid')
  t.error(error, 'should not get any error')
  t.end()
})

test('Templates: update schema validation', function (t) {
  t.plan(2)
  const updateRequest = require('../../lib/v1/templates').put.request
  const { valid, error } = validate(updateRequest)
  t.ok(valid, 'put schema is valid')
  t.error(error, 'should not get any error')
  t.end()
})
