# Tillhub API Schemas [![CircleCI](https://circleci.com/gh/tillhub/schemas/tree/master.svg?style=svg)](https://circleci.com/gh/tillhub/schemas/tree/master) [![semantic-release](https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg)](https://github.com/semantic-release/semantic-release)

> All Tillhub API OpenAPI 3 compatible JSON Schemas.

## Getting Started

```bash
npm install @tillhub/schemas
```

Use this library to pre-validate request objects. This will always be up-to-date and versioned, since the Tillhub API uses this library as well.

```js
const createCartSchema = require('@tillhub/schemas').v1.carts.create.request
console.log(createCartSchema)
// prints a JS object of the full schema
// {
//   type: 'object',
//   additionalProperties: true,
//   properties: {
//     ...
//   }
// }
```

## Contributing

Contributions are welcome in the case of falsy information. Those schemas are used as internaly driven data logic and quality.

Contributors should commit only via the following command. Deployment and change tracking is automatised by the underlying semantic-release implementation.

```bash
npm run commit
```

### Resources CRUD CLI

Use the schema cli to create new resources automatically using Hygen:

```console
$ npm run new:schema
> # interactive CLI
```

It will create the resources for the new schema and the route for it.
Feel free to edit any files you need and don't forget to add the custom properties (if necessary) on:

`/lib/<version>/base.js`

## License

Apache-2.0

## Notice

For triggering a new release, commit message must be started from "feat" or "fix" prefix 
