const { oneOf } = require('../../helpers/payload-or-null')

const hook = {
  type: 'object',
  additionalProperties: false,
  required: [
    'endpoint',
    'method'
  ],
  properties: {
    endpoint: {
      type: 'string',
      description: 'The url of the cloud based function',
      example: 'https://us-central1-<project-id>.cloudfunctions.net/date'
    },
    method: oneOf({
      type: 'string',
      enum: [
        'GET',
        'POST',
        'PUT'
      ]
    }),
    auth: {
      type: 'object',
      additionalProperties: false,
      required: [
        'type'
      ],
      properties: {
        type: {
          type: 'string',
          enum: [
            'basic',
            'token',
            'bearer_token'
          ]
        },
        token: {
          type: 'string'
        },
        user: {
          type: 'string'
        }
      }
    }
  },
  example: {
    endpoint: 'https://us-central1-<project-id>.cloudfunctions.net/date',
    method: 'GET',
    auth: {
      type: 'basic',
      user: 'some_user_name_123123',
      token: 'abc123456789'
    }
  }
}

module.exports = {
  name: {
    type: 'string',
    example: 'Miles and More',
    minLength: 1,
    maxLength: 128
  },
  system_vendor: {
    type: 'string',
    enum: [
      'miles_and_more',
      'payback',
      'tillhub_loyalties'
    ],
    example: 'tillhub_loyalties'
  },
  description: oneOf({
    type: 'string',
    minLength: 1,
    maxLength: 4096
  }),
  deleted: {
    type: 'boolean'
  },
  active: {
    type: 'boolean'
  },
  value_configurations: oneOf({
    type: 'array',
    description: 'This is where the main configuration of the values that are being saved in the loyalty account lives. Per item an entry is being saved. By default, if value_types is not defined, the mere revenue from the cart item is saved. E.g. if the transaction_cart_item has a total_value of 30.00 EUR, an entry will be saved in the account\'s value of 30 EUR. If the implementor desires to save only 1% of the revenue as a value, then he needs to define a value_type item where factor = 0.01.',
    items: {
      type: 'object',
      additionalProperties: false,
      minItems: 1,
      required: [
        'base'
      ],
      properties: {
        custom_unit: oneOf({
          type: 'string',
          description: 'Custom unit names can be defined here. If custom_unit is not defined, it will default to the currency of the cart item.',
          examples: [
            'miles',
            'points',
            'stamps'
          ],
          minLength: 1,
          maxLength: 128
        }),
        base: {
          type: 'string',
          description: 'The value that is being saved in the loyalty account is calculated by: base * factor = value [unit]. A choice of "lookup" means that the base will be looked up in the products table. A choice of "custom" means that a custom function (defined in the property "incoming_hook") will be applied.',
          enum: [
            'revenue',
            'lookup',
            'custom'
          ]
        },
        factor: oneOf({
          type: 'number',
          description: 'The value that is being saved in the loyalty account is calculated by: base * factor = value [unit]. If not defined, a factor of 1 will be applied.',
          minimum: 0,
          multipleOf: 0.01,
          default: 1
        }),
        incoming_hook: oneOf({
          ...hook,
          description: 'The configuration of a cloud based function. It will be applied then property base has been set as "custom". The arguments that are being passed into the function are the transaction, the product data and the customer data.'
        }),
        outgoing_hook: oneOf({
          ...hook,
          description: 'The url of a cloud based function. This function will be applied to the values, when they are booked away from the account using the route POST "/loyalties/:user/:system_id/book". The arguments that are being passed into the function are the transaction, the product data and the customer data.'
        })
      }
    }
  }),
  eligible_products: oneOf({
    type: 'array',
    description: 'Only these products will generate an value entry in the loyalty account. It is additive with eligible_product_groups. If not defined, there will be no restrictions.',
    minItems: 1,
    items: {
      type: 'string',
      format: 'uuid'
    }
  }),
  eligible_product_groups: oneOf({
    type: 'array',
    description: 'Only these product groups will generate an value entry in the loyalty account. It is additive with eligible_products. If not defined, there will be no restrictions.',
    minItems: 1,
    items: {
      type: 'string',
      format: 'uuid'
    }
  }),
  branches: oneOf({
    type: 'array',
    description: 'Only these branches will generate an value entry in the loyalty account. If not defined, there will be no restriction on which branches can use this system.',
    minItems: 1,
    items: {
      type: 'string',
      format: 'uuid'
    }
  }),
  region: oneOf({
    type: 'string',
    description: 'The international format for regional sub category of a country e.g. a state or province.'
  }),
  country: oneOf({
    type: 'string',
    description: 'A country as ISO Alpha-2 code.',
    minLength: 2,
    maxLength: 2,
    pattern: '^[A-Z]{2}$'
  }),
  metadata: oneOf({
    type: 'object'
  })
}
