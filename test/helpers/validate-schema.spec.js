const test = require('tape')
const mockSchema = require('./mock-schema')
const validate = require('./validate-schema')

test('Schema validation', function (t) {
  t.plan(2)
  const { valid, error } = validate(mockSchema)
  t.notOk(valid, 'expect result to invalid')
  t.ok(error, 'get expected error')
  t.end()
})
