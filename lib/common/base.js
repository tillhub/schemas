const dateObject = require('./date_object')

/**
 * Create common base object
 * @param {Object} [options]
 */
function baseObject ({
  entityName = 'entity',
  splitDate = false
} = {}) {
  const dateType = splitDate ? dateObject : {
    type: 'string',
    format: 'date-time',
    example: '2019-03-17T21:12:04.849Z'
  }

  return {
    id: {
      description: `Unique ${entityName} ID`,
      type: 'string',
      format: 'uuid',
      example: '936835f7-2d75-41d2-9001-38ed6e458328'
    },
    created_at: {
      ...dateType,
      description: `The date and time ${entityName} was created`
    },
    updated_at: {
      ...dateType,
      description: `The date and time ${entityName} was updated`
    }
  }
}

module.exports = baseObject
