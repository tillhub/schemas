/**
 * Create common base object
 * @param {Object} [options]
 */
function baseObject (options = {}) {
  return {
    id: {
      description: 'Unique entity ID',
      type: 'string',
      format: 'uuid',
      example: '936835f7-2d75-41d2-9001-38ed6e458328'
    },
    created_at: {
      description: 'The date and time entity was created',
      type: 'string',
      format: 'date-time',
      example: '2019-03-17T21:12:04.849Z'
    },
    updated_at: {
      description: 'The date and time entity was updated',
      type: 'string',
      format: 'date-time',
      example: '2019-03-17T21:12:04.849Z'
    }
  }
}

module.exports = baseObject
