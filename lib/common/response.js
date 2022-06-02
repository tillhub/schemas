const cursors = {
  'first-self': {
    type: 'object',
    description: 'Optional cursor in paginated API calls. The cursor next field must be called as fully quantifiable URI in order to hit the next if available.',
    additionalProperties: false,
    required: ['self'],
    properties: {
      next: {
        type: 'string',
        format: 'uri',
        description: 'The URI pointing to the next page.',
        example: 'https://api.tillhub.com/api/v1/products/061f91a3-eba2-40b8-9a76-115189d6741e?cursor=2018-07-02T21%3A47%3A44.382Z&size=10&cursor_field=updated_at'
      },
      first: {
        type: 'string',
        format: 'uri',
        description: 'The URI pointing to the the first page.',
        example: 'https://api.tillhub.com/api/v1/products/061f91a3-eba2-40b8-9a76-115189d6741e?cursor=2018-07-02T21%3A47%3A44.382Z&size=10&cursor_field=updated_at'
      },
      self: {
        type: 'string',
        format: 'uri',
        description: 'The URI pointing to this page.',
        example: 'https://api.tillhub.com/api/v1/products/061f91a3-eba2-40b8-9a76-115189d6741e?cursor=2018-07-02T21%3A47%3A44.382Z&size=10&cursor_field=updated_at'
      }
    }
  },
  'current-next': {
    type: 'object',
    description: 'Optional cursor in paginated API calls. The cursor provides URIs in order to get near pages if available.',
    additionalProperties: false,
    required: ['current'],
    properties: {
      current: {
        type: 'string',
        format: 'uri',
        description: 'The URI pointing to current page.',
        example: 'https://api.tillhub.com/api/v1/products/061f91a3-eba2-40b8-9a76-115189d6741e?size=10&cursor=5694834'
      },
      next: {
        type: 'string',
        format: 'uri',
        description: 'The URI pointing to the next page.',
        example: 'https://api.tillhub.com/api/v1/products/061f91a3-eba2-40b8-9a76-115189d6741e?size=10&cursor=5694847'
      }
    }
  }
}

/**
 * Generate a common response
 * @param {Object} payload
 * @param {Object} options
 */
function commonResponse ({
  resultItems,
  results,
  additionals
} = {}, {
  hasCursor = false,
  cursorType = ''
} = {}) {
  if (!resultItems) throw new TypeError('common response requires result items to be set')

  if (!results) {
    results = {
      type: 'array',
      description: 'The envelope of items, that are usually objects. We are generally sending back arrays even if there was just one requested resource.',
      items: resultItems
    }
  }

  const response = {
    type: 'object',
    additionalProperties: false,
    properties: {
      msg: {
        type: 'string',
        minLength: 1,
        example: 'Queried transactions successfully.',
        description: 'Any English sentence, meant as information for developers and implementers. Avoid displaying this to the users and especially do not expect those messages to stay stable.'
      },
      msg_localised: {
        description: 'Optional localized message that can be displayed to the user if existing. The language can be set by in the request or will fallback to English.',
        example: 'Abgefragte Transaktionen erfolgreich.',
        type: 'string',
        minLength: 1
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
      count: {
        type: 'number',
        description: 'the length of the results array.',
        example: hasCursor ? 10 : 1
      },
      results,
      ...additionals
    }
  }

  if (hasCursor && !cursorType) {
    cursorType = 'first-self'
  }

  if (cursorType) {
    if (!cursors[cursorType]) {
      throw new Error(`Unknown cursor type '${cursorType}'`)
    }
    response.properties.cursor = cursors[cursorType]
  }

  return response
}

module.exports = commonResponse
