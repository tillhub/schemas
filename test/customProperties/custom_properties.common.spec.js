const test = require('tape')
const validate = require('../helpers/validate-schema')
const customProperties = require('../../lib/common/custom_properties')

test('Cutom Properties: implementation schema validation', function (t) {
  const { valid, error } = validate(customProperties.implementation)
  t.ok(valid, 'implementation schema is valid')
  t.error(error, 'should not get any error')
  t.end()
})

test('Cutom Properties: definition schema validation', function (t) {
  const { valid, error } = validate(customProperties.definition)
  t.ok(valid, 'definition schema is valid')
  t.error(error, 'should not get any error')
  t.end()
})
