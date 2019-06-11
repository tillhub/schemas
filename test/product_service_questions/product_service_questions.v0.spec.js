const test = require('tape')
const validate = require('../helpers/validate-schema')

test('Product Service Questions: create schema validation: request', function (t) {
  t.plan(2)
  const createRequest = require('../../lib/v0/product_service_questions').create.request
  const { valid, error } = validate(createRequest)
  t.ok(valid, 'create request schema is valid')
  t.error(error, 'should not get any error')
  t.end()
})

test('Product Service Questions: create schema validation: response', function (t) {
  t.plan(2)
  const createResponse = require('../../lib/v0/product_service_questions').create.response
  const { valid, error } = validate(createResponse)
  t.ok(valid, 'create response schema is valid')
  t.error(error, 'should not get any error')
  t.end()
})

test('Product Service Questions: update schema validation: request', function (t) {
  t.plan(2)
  const updateRequest = require('../../lib/v0/product_service_questions').update.request
  const { valid, error } = validate(updateRequest)
  t.ok(valid, 'update request schema is valid')
  t.error(error, 'should not get any error')
  t.end()
})

test('Product Service Questions: update schema validation: response', function (t) {
  t.plan(2)
  const updateResponse = require('../../lib/v0/product_service_questions').update.response
  const { valid, error } = validate(updateResponse)
  t.ok(valid, 'update response schema is valid')
  t.error(error, 'should not get any error')
  t.end()
})

test('Product Service Questions: get schema validation: query', function (t) {
  t.plan(2)
  const getQuery = require('../../lib/v0/product_service_questions').get.query
  const { valid, error } = validate(getQuery)
  t.ok(valid, 'get query schema is valid')
  t.error(error, 'should not get any error')
  t.end()
})
