const test = require('tape')
const validate = require('../../helpers/validate-schema')

test('Services V0: create request schema validation', t => {
  t.plan(2)
  const createRequest = require('../../../lib/v0/services').create.request
  const { valid, error } = validate(createRequest)
  t.ok(valid, 'create request schema is valid')
  t.error(error, 'should not get any error')
  t.end()
})

test('Services V0: create response schema validation', t => {
  t.plan(2)
  const createResponse = require('../../../lib/v0/services').create.response
  const { valid, error } = validate(createResponse)
  t.ok(valid, 'create response schema is valid')
  t.error(error, 'should not get any error')
  t.end()
})
