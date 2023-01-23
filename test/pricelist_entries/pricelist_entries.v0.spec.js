const test = require('tape')
const validate = require('../helpers/validate-schema')

test('Pricelist: v0: get all schema validation', function (t) {
  t.plan(2)
  const getResponse = require('../../lib/v0/pricelist_entries').get.all.response
  const { valid, error } = validate(getResponse)
  t.ok(valid, 'get schema is valid')
  t.error(error, 'should not get any error')
  t.end()
})

test('Pricelist: v0: get one schema validation', function (t) {
  t.plan(2)
  const getResponse = require('../../lib/v0/pricelist_entries').get.one.response
  const { valid, error } = validate(getResponse)
  t.ok(valid, 'get schema is valid')
  t.error(error, 'should not get any error')
  t.end()
})
