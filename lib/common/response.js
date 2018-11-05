const cursor = {
  type: 'object',
  additionalProperties: false,
  description: 'Optional cursor in pagable API calls. The cursor next field must be called as fully qualifyable URI in order to hit the next page',
  properties: {
    next: {
      type: 'string',
      format: 'uri',
      description: 'The URI pointing to the next page.',
      example: 'https://api.tillhub.com/api/v1/products/061f91a3-eba2-40b8-9a76-115189d6741e?first=2018-07-02T21%3A47%3A44.382Z&page=0&size=10&cursor_field=updated_at'
    },
    first: {
      type: 'string',
      format: 'uri',
      description: 'The URI pointing to the the first page.',
      example: 'https://api.tillhub.com/api/v1/products/061f91a3-eba2-40b8-9a76-115189d6741e?first=2018-07-02T21%3A47%3A44.382Z&page=1&size=10&cursor_field=updated_at'
    },
    self: {
      type: 'string',
      format: 'uri',
      description: 'The URI pointing to this page.',
      example: 'https://api.tillhub.com/api/v1/products/061f91a3-eba2-40b8-9a76-115189d6741e?first=2018-07-02T21%3A47%3A44.382Z&page=0&size=10&cursor_field=updated_at'
    }
  }
}

/**
 * Generate a common response
 * @param {Object} payload
 * @param {Object} options
 */
function commonResponse ({ resultItems, results, additionals } = {}, { hasCursor = false } = {}) {
  if (!resultItems) throw new TypeError('common response requires result items to be set')

  if (!results) {
    results = {
      type: 'array',
      description: 'The envelope of items, that are usually objects. We are generally sending back arrays even if there was just one requested resource.',
      items: resultItems
    }
  }

  return {
    type: 'object',
    additionalProperties: false,
    properties: {
      msg: {
        type: 'string',
        minLength: 1,
        example: 'Queried transactions sucessefully.',
        description: 'Any English sentence, meant as information for developers and implementers. Avoid displaying this to the users and especially do not expect thos messages to stay stable.'
      },
      msg_localised: {
        type: 'string',
        minLength: 1,
        example: 'Queried transactions sucessefully.',
        description: 'Optional localised message that can be displayed to the user if existing. The language can be set by in the request or will fallback to English.'
      },
      request: {
        type: 'object',
        additionalProperties: false,
        description: 'Information about the request itself.',
        properties: {
          id: {
            type: 'string',
            description: 'The request uuid that can be used to identify and trace API calls.',
            format: 'uuid'
          },
          host: {
            type: 'string',
            minLength: 1,
            example: 'https://api.tillhub.com',
            description: 'Server host and protocol from which request was handled.'
          }
        }
      },
      cursor: hasCursor ? cursor : undefined,
      count: {
        type: 'number',
        description: 'the length of the results array.',
        example: hasCursor ? 10 : 1
      },
      results,
      ...additionals
    }
  }
}

module.exports = commonResponse
