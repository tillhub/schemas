# Tillhub API Schemas [![CircleCI](https://circleci.com/gh/tillhub/schemas/tree/master.svg?style=svg)](https://circleci.com/gh/tillhub/schemas/tree/master) [![semantic-release](https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg)](https://github.com/semantic-release/semantic-release)

> All Tillhub API OpenAPI 3 compatible JSON Schemas.

## Getting Started

```bash
npm install @tillhub/schemas
```

Use this library to pre-validate request objects. This will always be up-to-date and versioned, since the Tillhub API uses this library as well.

```js
const createProductSchema = require('@tillhub/schemas').v1.products.create
console.log(createProductSchema)
// prints a JS object of the full schema
// {
//   type: 'object',
//   additionalProperties: true,
//   properties: {
//     ...
//   }
// }
```

## License

Apache-2.0
