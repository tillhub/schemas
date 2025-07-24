const test = require('tape')
const validate = require('../../helpers/validate-schema')

test('User Permission Templates V0: create schema validation', function (t) {
  t.plan(2)
  const createRequest = require('../../../lib/v0/user_permission_templates').create.request
  const { valid, error } = validate(createRequest)
  t.ok(valid, 'create schema is valid')
  t.error(error, 'should not get any error')
  t.end()
})

test('User Permission Templates V0: update schema validation', function (t) {
  t.plan(2)
  const updateRequest = require('../../../lib/v0/user_permission_templates').update.request
  const { valid, error } = validate(updateRequest)
  t.ok(valid, 'update schema is valid')
  t.error(error, 'should not get any error')
  t.end()
})

test('User Permission Templates V0: scopes validation - valid enum', function (t) {
  const createRequest = require('../../../lib/v0/user_permission_templates').create.request
  const validate = require('../../helpers/validate-schema')
  const validPayload = {
    name: 'Test Template',
    scopes: [require('../../../lib/common/permissions').staff.items.enum[0]],
    active: true,
    deleted: false
  }
  const { valid, error } = validate(createRequest, validPayload)
  t.ok(valid, 'should accept valid enum value in scopes')
  t.error(error, 'should not get any error')
  t.end()
})

test('User Permission Templates V0: scopes validation - arbitrary string (backward compatible)', function (t) {
  const createRequest = require('../../../lib/v0/user_permission_templates').create.request
  const validate = require('../../helpers/validate-schema')
  const validPayload = {
    name: 'Test Template',
    scopes: ['some:custom:permission'],
    active: true,
    deleted: false
  }
  const { valid, error } = validate(createRequest, validPayload)
  t.ok(valid, 'should accept arbitrary string in scopes for backward compatibility')
  t.error(error, 'should not get any error')
  t.end()
})

test('User Permission Templates V0: scopes validation - invalid type', function (t) {
  const createRequest = require('../../../lib/v0/user_permission_templates').create.request
  const validate = require('../../helpers/validate-schema')
  const invalidPayload = {
    name: 'Test Template',
    scopes: [123],
    active: true,
    deleted: false
  }
  const { valid, error } = validate(createRequest, invalidPayload)
  t.notOk(valid, 'should reject non-string values in scopes')
  t.ok(error, 'should get an error')
  t.end()
})
