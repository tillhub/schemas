---
to: "lib/<%= version %>/<%= name %>/base.js"
---
module.exports = {
  // add the properties you need here
  client_id: {
    description: 'An identifier used locally on POS for their own reference.',
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
    description: 'Soft disable or enable this <%= name %>.',
    type: 'boolean',
    default: true
  },
  deleted: {
    description: 'Soft delete this <%= name %>.',
    type: 'boolean',
    default: false
  }
}
