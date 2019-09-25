---
inject: true
to: lib/<%= version %>/index.js
before: hygen:injection
---
module.exports.<%= name %> = require('./<%= name %>')
