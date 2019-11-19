
module.exports = {
  name: {
    description: 'Any arbitrary name for an export that can be displayed in applications.',
    anyOf: [
      {
        type: 'string',
        maxLength: 64,
        minLength: 1
      },
      {
        type: 'null'
      }
    ]
  },
  description: {
    description: 'Any arbitrary description for an export that can be displayed in applications.',
    anyOf: [
      {
        type: 'string',
        maxLength: 4096,
        minLength: 1
      },
      {
        type: 'null'
      }
    ]
  },
  started_at: {
    oneOf: [
      {
        type: 'null'
      },
      {
        type: 'string',
        format: 'date-time'
      }
    ]
  },
  finished_at: {
    oneOf: [
      {
        type: 'null'
      },
      {
        type: 'string',
        format: 'date-time'
      }
    ]
  },
  client_id: {
    description: 'An identifier a caller might refer to in a client side application.',
    oneOf: [
      {
        type: 'string',
        maxLength: 128
      },
      {
        type: 'null'
      }
    ]
  },
  type: {
    description: 'Denotes the type of the query. E.g. external_api denotes an external caller. This is important because only some types are replayable or "managed".',
    type: 'string',
    enum: [
      'custom',
      'api',
      'external_api'
    ]
  },
  resource: {
    description: 'Denotes the base resource that was exported if available.',
    oneOf: [
      {
        type: 'string',
        maxLength: 128
      },
      {
        type: 'null'
      }
    ]
  },
  job: {
    description: 'Denotes the job that was used e.g. a defined analytics job.',
    oneOf: [
      {
        type: 'string',
        maxLength: 256
      },
      {
        type: 'null'
      }
    ]
  },
  status: {
    oneOf: [
      {
        type: 'null'
      },
      {
        type: 'string',
        enum: [
          'backoff',
          'received',
          'scheduled',
          'unscheduable',
          'active',
          'failed',
          'completed'
        ]
      }
    ]
  },
  date_start: {
    description: 'A baseline query param that defines the inclusive time scope (>= start) of this query. This is in parts redundant to the .query property, which should hold the same information, however implementors of this resource will send define this property to allow for an easy export seperation of e.g. two consecutive exports.',
    oneOf: [
      {
        type: 'null'
      },
      {
        type: 'string',
        format: 'date-time'
      }
    ]
  },
  date_end: {
    description: 'A baseline query param that defines the exclusive time scope (< end) of this query. This is in parts redundant to the .query property, which should hold the same information, however implementors of this resource will send define this property to allow for an easy export seperation of e.g. two consecutive exports.',
    oneOf: [
      {
        type: 'null'
      },
      {
        type: 'string',
        format: 'date-time'
      }
    ]
  },
  query: {
    description: 'Any arbitrary combination of query parameters that have been used during this export.',
    oneOf: [
      { type: 'object' },
      { type: 'null' }
    ]
  },
  status_detail: {
    oneOf: [
      { type: 'object' },
      { type: 'null' }
    ]
  },
  metadata: {
    oneOf: [
      { type: 'object' },
      { type: 'null' }
    ]
  }
}
