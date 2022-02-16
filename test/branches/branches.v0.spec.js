const test = require('tape')
const validate = require('../helpers/validate-schema')
const branchesSchema = require('../../lib/v0/branches')

test('Branches:v0: create schema validation', function (t) {
  {
    const { valid, error } = validate(branchesSchema.create.request)
    t.ok(valid, 'create request schema is valid')
    t.error(error, 'should not get any error')
  }

  {
    const { valid, error } = validate(branchesSchema.create.response)
    t.ok(valid, 'create response schema is valid')
    t.error(error, 'should not get any error')
  }

  t.end()
})

test('Branches:v0: read.all schema validation', function (t) {
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

test('Branches:v0: read.one schema validation', function (t) {
  const { valid, error } = validate(branchesSchema.read.one.response)
  t.ok(valid, 'read query schema is valid')
  t.error(error, 'should not get any error')

  t.end()
})

test('Branches:v0: update schema validation', function (t) {
  {
    const { valid, error } = validate(branchesSchema.update.request)
    t.ok(valid, 'update request schema is valid')
    t.error(error, 'should not get any error')
  }

  {
    const { valid, error } = validate(branchesSchema.update.response)
    t.ok(valid, 'update response schema is valid')
    t.error(error, 'should not get any error')
  }

  t.end()
})
