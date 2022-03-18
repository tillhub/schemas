const dateObject = require('./date_object')

/**
 * Create common base object
 * @param {Object} [options]
 */
function baseObject ({
  splitDate = false
} = {}) {
  const dateType = splitDate ? dateObject : {
    type: 'string',
    format: 'date-time',
    example: '2019-03-17T21:12:04.849Z'
  }

  return {
    id: {
      description: 'Unique entity ID',
      type: 'string',
      format: 'uuid',
      example: '936835f7-2d75-41d2-9001-38ed6e458328'
    },
    created_at: {
      ...dateType,
      description: 'The date and time entity was created'
    },
    updated_at: {
      ...dateType,
      description: 'The date and time entity was updated'
    }
  }
}

module.exports = baseObject
