---
to: "lib/<%= version %>/<%= name %>/base.js"
---
module.exports = {
  // add here the properties you need
  client_id: {
    description: 'A identifier used locally on POS for their own reference.',
    oneOf: [
      {
        type: 'string',
        maxLength: 128
      },
      {
        type: 'null'
      }
    ]
  },
  active: {
    description: 'Soft disable or enabled this <%= name %>.',
    type: 'boolean',
    default: true
  },
  deleted: {
    description: 'Soft delete this <%= name %>.',
    type: 'boolean',
    default: false
  }
}
