module.exports = {
  $id: 'https://schemas.tillhub.com/v1/configurations.patch.request.schema.json',
  $schema: 'http://json-schema.org/draft-07/schema#',
  additionalProperties: false,
  type: 'array',
  items: {
    description: 'one JSON Patch operation',
    allOf: [
      {
        description: 'Members common to all operations',
        type: 'object',
        required: [
          'op',
          'path'
        ],
        properties: {
          path: {
            $ref: '#/definitions/jsonPointer'
          }
        }
      },
      {
        $ref: '#/definitions/oneOperation'
      }
    ]
  },
  definitions: {
    jsonPointer: {
      type: 'string',
      pattern: '^(/[^/~]*(~[01][^/~]*)*)*$'
    },
    add: {
      description: 'add operation. Value can be any JSON value.',
      properties: {
        op: {
          enum: [
            'add'
          ]
        }
      },
      required: [
        'value'
      ]
    },
    remove: {
      description: 'remove operation. Only a path is specified.',
      properties: {
        op: {
          enum: [
            'remove'
          ]
        }
      }
    },
    replace: {
      description: 'replace operation. Value can be any JSON value.',
      properties: {
        op: {
          enum: [
            'replace'
          ]
        }
      },
      required: [
        'value'
      ]
    },
    move: {
      description: 'move operation. \'from\' is a JSON Pointer.',
      properties: {
        op: {
          enum: [
            'move'
          ]
        },
        from: {
          $ref: '#/definitions/jsonPointer'
        }
      },
      required: [
        'from'
      ]
    },
    copy: {
      description: 'copy operation. \'from\' is a JSON Pointer.',
      properties: {
        op: {
          enum: [
            'copy'
          ]
        },
        from: {
          $ref: '#/definitions/jsonPointer'
        }
      },
      required: [
        'from'
      ]
    },
    test: {
      description: 'test operation. Value can be any JSON value.',
      properties: {
        op: {
          enum: [
            'test'
          ]
        }
      },
      required: [
        'value'
      ]
    },
    oneOperation: {
      oneOf: [
        {
          $ref: '#/definitions/add'
        },
        {
          $ref: '#/definitions/remove'
        },
        {
          $ref: '#/definitions/replace'
        },
        {
          $ref: '#/definitions/move'
        },
        {
          $ref: '#/definitions/copy'
        },
        {
          $ref: '#/definitions/test'
        }
      ]
    }
  }
}
