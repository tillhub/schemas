const test = require('tape')
const validate = require('../helpers/validate-schema')

test('Stocks Book: create schema validation', function (t) {
  const createEvent = require('../../lib/v0/stocks_book').create.event
  const { valid, error } = validate(createEvent)
  t.ok(valid, 'create event schema is valid')
  t.error(error, 'should not get any error')
  t.end()
})

test('Stocks Book: read schema validation', function (t) {
  const readAllResponse = require('../../lib/v0/stocks_book').read.all.response
  const { valid, error } = validate(readAllResponse)
  t.ok(valid, 'read all response schema is valid')
  t.error(error, 'should not get any error')
  t.end()
})
