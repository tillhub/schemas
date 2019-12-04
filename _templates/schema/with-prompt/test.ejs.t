---
to: "test/<%= name %>/<%= version %>/<%= name %>.<%= version %>.spec.js"
---

const test = require('tape')
const validate = require('../../helpers/validate-schema')

test('<%= h.inflection.titleize(name) %> <%= h.inflection.titleize(version) %>: create schema validation', function (t) {
  t.plan(2)
  const createRequest = require('../../../lib/<%= version %>/<%= name %>').create.request
  const { valid, error } = validate(createRequest)
  t.ok(valid, 'create schema is valid')
  t.error(error, 'should not get any error')
  t.end()
})

test('<%= h.inflection.titleize(name) %> <%= h.inflection.titleize(version) %>: update schema validation', function (t) {
  t.plan(2)
  const updateRequest = require('../../../lib/<%= version %>/<%= name %>').update.request
  const { valid, error } = validate(updateRequest)
  t.ok(valid, 'update schema is valid')
  t.error(error, 'should not get any error')
  t.end()
})
