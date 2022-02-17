const test = require('tape')
const validate = require('../helpers/validate-schema')
const customers = require('../../lib/v0/customers')

test('Customers:v0: create schema validation', function (t) {
  {
    const { valid, error } = validate(customers.create.request)
    t.ok(valid, 'create request schema is valid')
    t.error(error, 'should not get any error')
  }

  {
    const { valid, error } = validate(customers.create.response)
    t.ok(valid, 'create response schema is valid')
    t.error(error, 'should not get any error')
  }

  t.end()
})

test('Customers:v0: update schema validation', function (t) {
  {
    const { valid, error } = validate(customers.update.request)
    t.ok(valid, 'update request schema is valid')
    t.error(error, 'should not get any error')
  }

  {
    const { valid, error } = validate(customers.update.response)
    t.ok(valid, 'update response schema is valid')
    t.error(error, 'should not get any error')
  }

  t.end()
})

test('Customers:v0: create ext schema validation', function (t) {
  {
    const { valid, error } = validate(customers.ext.create.request)
    t.ok(valid, 'create ext request schema is valid')
    t.error(error, 'should not get any error')
  }

  {
    const { valid, error } = validate(customers.ext.create.response)
    t.ok(valid, 'create ext response schema is valid')
    t.error(error, 'should not get any error')
  }

  t.end()
})

test('Customers:v0: update ext schema validation', function (t) {
  {
    const { valid, error } = validate(customers.ext.update.request)
    t.ok(valid, 'update ext request schema is valid')
    t.error(error, 'should not get any error')
  }

  {
    const { valid, error } = validate(customers.ext.update.response)
    t.ok(valid, 'update ext response schema is valid')
    t.error(error, 'should not get any error')
  }

  t.end()
})

test('Customers:v0: read.all schema validation', function (t) {
  const { valid, error } = validate(customers.read.all.response)
  t.ok(valid, 'update response schema is valid')
  t.error(error, 'should not get any error')

  t.end()
})

test('Customers:v0: read.one schema validation', function (t) {
  const { valid, error } = validate(customers.read.one.response)
  t.ok(valid, 'update response schema is valid')
  t.error(error, 'should not get any error')

  t.end()
})
