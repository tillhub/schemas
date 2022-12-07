const { oneOf } = require('../../../helpers/payload-or-null')

module.exports = {
  enabled: {
    type: 'boolean',
    description: 'defines whether time tracking feature is active or not',
    default: 'false'
  },
  type: {
    ...oneOf({
      description: 'The time tracking type to use, e.g. Klier (without conf.) or in Auris (for Gidor)',
      type: 'string',
      default: 'klier',
      enum: [
        'klier',
        'gidor'
      ]
    })
  },
  configuration: {
    description: 'Necessary for third party tracking types',
    anyOf: [
      {
        type: 'object',
        description: 'Configuration for (Auris) Gidor',
        properties: {
          url: {
            ...oneOf({
              type: 'string',
              description: 'A custom url for this time tracking feature',
              example: 'https://cbms.gidor.ch:4442/Praesenzzeit/',
              default: 'https://cbms.gidor.ch:4442/Praesenzzeit/'
            })
          }
        }
      },
      {
        type: 'null'
      }
    ]
  }
}
