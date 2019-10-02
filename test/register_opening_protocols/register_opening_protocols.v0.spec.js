const test = require('tape')
const validate = require('../helpers/validate-schema')

test('Register Opening Protocols: create request schema validation', function (t) {
  t.plan(2)
  const createRequest = require('../../lib/v0/register_opening_protocols').create.request
  const { valid, error } = validate(createRequest)
  t.ok(valid, 'create schema is valid')
  t.error(error, 'should not get any error')
  t.end()
})

test('Register Opening Protocols: create response schema validation', function (t) {
  t.plan(2)
  const createRequest = require('../../lib/v0/register_opening_protocols').create.response
  const { valid, error } = validate(createRequest)
  t.ok(valid, 'create schema is valid')
  t.error(error, 'should not get any error')
  t.end()
})

test('Register Opening Protocols: update schema validation', function (t) {
  t.plan(2)
  const createRequest = require('../../lib/v0/register_opening_protocols').update.request
  const { valid, error } = validate(createRequest)
  t.ok(valid, 'create schema is valid')
  t.error(error, 'should not get any error')
  t.end()
})

test('Register Opening Protocols: update response schema validation', function (t) {
  t.plan(2)
  const updateRequest = require('../../lib/v0/register_opening_protocols').update.response
  const { valid, error } = validate(updateRequest)
  t.ok(valid, 'update schema is valid')
  t.error(error, 'should not get any error')
  t.end()
})

test('Register Opening Protocols: "get latest" request schema validation', function (t) {
  t.plan(2)
  const createRequest = require('../../lib/v0/register_opening_protocols').get.latest.request
  const { valid, error } = validate(createRequest)
  t.ok(valid, '"get latest" request schema is valid')
  t.error(error, 'should not get any error')
  t.end()
})

test('Register Opening Protocols: "get latest" response schema validation', function (t) {
  t.plan(2)
  const updateRequest = require('../../lib/v0/register_opening_protocols').get.latest.response
  const { valid, error } = validate(updateRequest)
  t.ok(valid, '"get latest" response schema is valid')
  t.error(error, 'should not get any error')
  t.end()
})
