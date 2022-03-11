const dateObject = require('./date_object')
const commonResponse = require('./response')

/**
 * Generate a common analytics response
 * @param {Array<{job: string, type: string}>} metrics
 * @param {Object[]} values
 */
function analyticsResponse (metrics, values) {
  if (!Array.isArray(metrics)) {
    throw new TypeError('Analytics response requires metrics to be set')
  }
  if (!Array.isArray(values)) {
    throw new TypeError('Analytics response requires values to be set')
  }
  if (metrics.length !== values.length) {
    throw new TypeError('Analytics response requires matrics and values to have the same length')
  }

  return {
    $schema: 'http://json-schema.org/draft-07/schema#',
    additionalProperties: false,
    ...commonResponse({
      resultItems: {
        anyOf: metrics.map((metric, index) => ({
          type: 'object',
          additionalProperties: false,
          properties: {
            created_at: {
              ...dateObject,
              description: 'Job date'
            },
            metric: {
              description: 'Metric description',
              type: 'object',
              additionalProperties: false,
              properties: {
                user: {
                  description: 'Client ID',
                  type: 'string',
                  format: 'uuid',
                  example: '936835f7-2d75-41d2-9001-38ed6e458328'
                },
                ...metric
              }
            },
            count: {
              description: 'Dataset entries count',
              example: 67,
              type: 'integer'
            },
            values: {
              description: 'Dataset for this metric',
              type: 'array',
              items: {
                type: 'object',
                additionalProperties: false,
                properties: values[index]
              }
            }
          }
        }))
      }
    })
  }
}

module.exports = analyticsResponse
