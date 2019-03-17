/**
 * Create common base object
 * @param {Object} [options]
 */
function baseObject (options = {}) {
  return {
    id: {
      type: 'string',
      format: 'uuid',
      example: '936835f7-2d75-41d2-9001-38ed6e458328'
    },
    created_at: {
      type: 'string',
      format: 'date-time',
      example: '2019-03-17T21:12:04.849Z'
    },
    updated_at: {
      type: 'string',
      format: 'date-time',
      example: '2019-03-17T21:12:04.849Z'
    }
  }
}

module.exports = baseObject
