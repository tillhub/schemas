module.exports.getEvent = function getEvent (payload) {
  return {
    description: 'The webhook data set',
    type: 'object',
    additionalProperties: false,
    properties: {
      webhookId: {
        description: 'The webhook UUID',
        example: 'ff30cfdf-5167-4f72-b4fc-c1d72db3c07e',
        type: 'string',
        format: 'uuid'
      },
      eventId: {
        description: 'The event UUID',
        example: 'c6fe918a-7bdc-4ccd-af36-95c03853233d',
        type: 'string',
        format: 'uuid'
      },
      eventEntity: {
        description: 'The entity name the event refers to',
        example: 'transaction',
        type: 'string'
      },
      eventType: {
        description: 'The event type (e.g. create, update, delete)',
        example: 'create',
        type: 'string'
      },
      eventVersion: {
        description: 'The event payload version',
        example: 0,
        type: 'number'
      },
      entityInstanceId: {
        description: 'The entity instance UUID',
        example: '10b06f38-031d-4e0c-8706-0474c8c5b61c',
        type: 'string',
        format: 'uuid'
      },
      timestamp: {
        description: 'The date and time event was received by webhooks service',
        example: new Date().toISOString(),
        type: 'string',
        format: 'date-time'
      },
      payload
    }
  }
}