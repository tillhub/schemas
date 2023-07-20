const test = require('tape')
const validate = require('../../helpers/validate-schema')

test('Service Categories V0: create request schema validation', t => {
  t.plan(2)
  const createRequest = require('../../../lib/v0/service_categories').create.request
  const { valid, error } = validate(createRequest)
  t.ok(valid, 'create request schema is valid')
  t.error(error, 'should not get any error')
  t.end()
})

test('Service Categories V0: create response schema validation', t => {
  t.plan(2)
  const createResponse = require('../../../lib/v0/service_categories').create.response
  const { valid, error } = validate(createResponse)
  t.ok(valid, 'create response schema is valid')
  t.error(error, 'should not get any error')
  t.end()
})
