const test = require('tape')
const validate = require('../helpers/validate-schema')
const branchesSchema = require('../../lib/v1/branches')

test('Branches:v1: read.all schema validation', function (t) {
  {
    const { valid, error } = validate(branchesSchema.read.all.query)
    t.ok(valid, 'read query schema is valid')
    t.error(error, 'should not get any error')
  }

  {
    const { valid, error } = validate(branchesSchema.read.all.response)
    t.ok(valid, 'read response schema is valid')
    t.error(error, 'should not get any error')
  }

  t.end()
})
