const test = require('tape')
const validate = require('../helpers/validate-schema')

test('Product Addon Groups V0: create request schema validation', t => {
  t.plan(2)
  const createRequest = require('../../lib/v0/product_addon_groups').create.request
  const { valid, error } = validate(createRequest)
  t.ok(valid, 'create schema is valid')
  t.error(error, 'should not get any error')
  t.end()
})

test('Product Addon Groups V0: create response schema validation', t => {
  t.plan(2)
  const createRequest = require('../../lib/v0/product_addon_groups').create.response
  const { valid, error } = validate(createRequest)
  t.ok(valid, 'create schema is valid')
  t.error(error, 'should not get any error')
  t.end()
})

test('Product Addon Groups V0: update request schema validation', t => {
  t.plan(2)
  const updateRequest = require('../../lib/v0/product_addon_groups').update.request
  const { valid, error } = validate(updateRequest)
  t.ok(valid, 'update schema is valid')
  t.error(error, 'should not get any error')
  t.end()
})

test('Product Addon Groups V0: update response schema validation', t => {
  t.plan(2)
  const updateRequest = require('../../lib/v0/product_addon_groups').update.response
  const { valid, error } = validate(updateRequest)
  t.ok(valid, 'update schema is valid')
  t.error(error, 'should not get any error')
  t.end()
})
