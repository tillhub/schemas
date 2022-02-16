const standardParams = {
  start: {
    description: 'The start date to filter entities by "updated_at" field value',
    example: '2022-02-01T00:00:00.000Z',
    type: 'string',
    format: 'date-time'
  },
  end: {
    description: 'The end date to filter entities by "updated_at" field value',
    example: '2022-02-28T23:59:59.999Z',
    type: 'string',
    format: 'date-time'
  },
  limit: {
    description: 'The maximum amount of entries on page (for paginated output)',
    example: 50,
    type: 'integer',
    minimum: 1
  },
  active: {
    description: 'Filter entities by "active" field value',
    example: 'true',
    type: 'string',
    enum: ['true', 'false']
  },
  deleted: {
    description: 'Filter entities which are deleted or not',
    example: 'true',
    type: 'string',
    enum: ['true', 'false']
  }
}

/**
 * Generate a common query for entities set
 * @param {Object} required Required fields to restrict the amount of entries
 */
function getQuery ({
  standard = ['start', 'end'],
  required = ['start', 'end'],
  additional = {}
} = {}) {
  const properties = standard.reduce((memo, paramName) => {
    if (!standardParams[paramName]) {
      throw new ReferenceError(`Parameter '${paramName}' is not standard`)
    }

    memo[paramName] = { ...standardParams[paramName] }

    return memo
  }, {})

  Object.assign(properties, additional)

  return {
    $schema: 'http://json-schema.org/draft-07/schema#',
    additionalProperties: false,
    type: 'object',
    required,
    properties
  }
}

module.exports = getQuery
