module.exports = {
  type: 'object',
  properties: {
    description: 'The effective voucher delta record for this item (thus reversable if needed)',
    additionalProperties: false,
    required: [
      'client_id',
      'source_id',
      'api',
      'delta_amount',
      'delta_currency',
      'system',
      'type',
      'status'
    ],
    properties: {
      client_id: {
        type: 'string',
        example: 'd0d40841-b1a7-438a-9d1e-2bfec590d2e3',
        minLength: 6,
        maxLength: 64,
        description: 'A implementer defined identifier. This can be used for local resource matching and has no business implication.'
      },
      source_id: {
        type: 'string',
        example: 'd0d40841-b1a7-438a-9d1e-2bfec590d2e3',
        minLength: 6,
        maxLength: 64,
        description: 'The Tillhub or Fleurop Id of the source voucher.'
      },
      api: {
        type: 'string',
        enum: [
          'fleurop-voucher-api',
          'tillhub-voucher-api'
        ]
      },
      delta_amount: {
        description: 'The effective change in the value of the voucher.',
        type: 'number',
        minimum: -1000000,
        maximum: 1000000,
        multipleOf: 0.01
      },
      delta_currency: {
        type: 'string',
        description: 'The three letter [ISO currency](https://en.wikipedia.org/wiki/ISO_4217) of this item.',
        example: 'EUR',
        minLength: 3,
        maxLength: 3
      },
      barcode: {
        default: null,
        type: 'string',
        minLength: 3,
        maxLength: 128,
        description: 'Voucher EAN.'
      },
      code: {
        default: null,
        type: 'string',
        minLength: 3,
        maxLength: 128,
        description: 'Voucher number.'
      },
      system: {
        default: null,
        type: 'string',
        minLength: 3,
        maxLength: 128,
        description: 'Identifier for the voucher system.'
      },
      title: {
        default: null,
        description: 'Title of the source voucher.'
      },
      type: {
        type: 'string',
        description: 'Mainly legacy support for Fleurop flows.',
        enum: [
          'undefined',
          'fleuropRedeem',
          'fleuropSellOrRecharge',
          'ownBrandedRecharge',
          'ownBrandedRedeem',
          'externalSellAndActivate',
          'tillhubSell',
          'tillhubRecharge',
          'tillhubRedeem'
        ]
      },
      status: {
        type: 'string',
        description: 'Client side recorded booking state of the delta operation.',
        enum: [
          'unknown',
          'pending',
          'locked',
          'succeed',
          'failed',
          'scheduled'
        ]
      }
    }
  }
}
