module.exports.request = {
  $id: 'https://schemas.tillhub.com/v0/loyalty_values.book.request.query.schema.json',
  $schema: 'http://json-schema.org/draft-07/schema#',
  additionalProperties: false,
  type: 'object',
  required: [
    'operation',
    'account'
  ],
  properties: {
    operation: {
      type: 'string',
      enum: [
        'book_to_voucher'
      ]
    },
    account: {
      type: 'string',
      description: 'The alphanumeric uuid of the loyalty account where the values should be booked from.',
      format: 'uuid'
    }
  }
}

// module.exports.response = {
//   $id: 'https://schemas.tillhub.com/v0/loyalty_values.book.response.schema.json',
//   $schema: 'http://json-schema.org/draft-07/schema#',
//   additionalProperties: false,
//   type: 'object',
//   required: [
//     'operation',
//     'account'
//   ],
//   properties: {
//     operation: {
//       type: 'string',
//       enum: [
//         'book_to_voucher'
//       ]
//     },
//     account: {
//       type: 'string',
//       description: 'The alphanumeric uuid of the loyalty account where the values should be booked from.',
//       format: 'uuid'
//     }
//   }
// }
