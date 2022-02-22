const test = require('tape')
const validate = require('../helpers/validate-schema')
const cartsSchema = require('../../lib/v1/carts')

test('Carts:v1: create schema validation', function (t) {
  {
    const { valid, error } = validate(cartsSchema.create.request)
    t.ok(valid, 'create request schema is valid')
    t.error(error, 'should not get any error')
  }

  {
    const { valid, error } = validate(cartsSchema.create.response)
    t.ok(valid, 'create response schema is valid')
    t.error(error, 'should not get any error')
  }

  t.end()
})

test('Carts:v1: read schema validation', function (t) {
  {
    const { valid, error } = validate(cartsSchema.read.all.response)
    t.ok(valid, 'read.all response schema is valid')
    t.error(error, 'should not get any error')
  }

  {
    const { valid, error } = validate(cartsSchema.read.one.response)
    t.ok(valid, 'read.one response schema is valid')
    t.error(error, 'should not get any error')
  }

  t.end()
})

test('Carts:v1: patch schema validation', function (t) {
  {
    const { valid, error } = validate(cartsSchema.patch.request)
    t.ok(valid, 'patch request schema is valid')
    t.error(error, 'should not get any error')
  }

  {
    const { valid, error } = validate(cartsSchema.patch.response)
    t.ok(valid, 'patch response schema is valid')
    t.error(error, 'should not get any error')
  }

  t.end()
})
