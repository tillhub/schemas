const test = require('tape')
const validate = require('../../helpers/validate-schema')

test('Audits:logs: read.response schema validation', function (t) {
  t.plan(2)
  const readResponse = require('../../../lib/v0/audits/logs').read.response
  const { valid, error } = validate(readResponse)
  t.ok(valid, 'create schema is valid')
  t.error(error, 'should not get any error')
  t.end()
})
