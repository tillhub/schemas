module.exports.getEvent = function getEvent (payload, {
  eventEntityExample = 'ice-cream',
  eventTypeExample = 'create',
  eventVersionExample = 0
} = {}) {
  return {
    description: 'The webhook data set',
    type: 'object',
    additionalProperties: false,
    properties: {
      webhook_id: {
        description: 'The webhook UUID',
        example: 'ff30cfdf-5167-4f72-b4fc-c1d72db3c07e',
        type: 'string',
        format: 'uuid'
      },
      event_id: {
        description: 'The event UUID',
        example: 'c6fe918a-7bdc-4ccd-af36-95c03853233d',
        type: 'string',
        format: 'uuid'
      },
      event_entity: {
        description: 'The entity name the event refers to',
        example: eventEntityExample,
        type: 'string'
      },
      event_type: {
        description: 'The event type (e.g. create, update, delete)',
        example: eventTypeExample,
        type: 'string'
      },
      event_version: {
        description: 'The event payload version',
        example: eventVersionExample,
        type: 'number'
      },
      entity_instance_id: {
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
