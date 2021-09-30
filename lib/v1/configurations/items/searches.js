const { oneOf } = require('../../../helpers/payload-or-null')

const searchEntity = {
  type: 'object',
  properties: {
    type: {
      description: 'Searchable entities within the iOS client app',
      type: 'string',
      enum: [
        'transactions',
        'products',
        'customers',
        'vouchers',
        'loyalty_cards',
        'hooks'
      ]
    },
    behavior: {
      description: 'Search behavior within a single entity, limited by availability (e.g. vouchers: only online_first)',
      type: 'string',
      default: 'online_first',
      enum: [
        'online_first', // then offline if available
        'offline_first', // then online if avialable
        'online_only', // e.g. vouchers
        'offline_only', // e.g. optimized product scan
        'race' // in parallel if available, results will be merged unless trigger_action == on_first
      ]
    }
  }
}

const searchBehavior = {
  type: 'object',
  properties: {
    trigger_action: {
      description: 'Trigger a context specific action (e.g. addToCart, refundSale) on a result condition',
      type: 'string',
      enum: [
        'on_first', // the first usable result will trigger the action immediately
        'on_unique', // a unique final result will trigger the action
        'on_none' // the user always has to manually trigger the action
      ]
    },
    no_result_action: {
      description: 'Trigger a specific behavior if the search ended without results',
      type: 'string',
      enum: [
        'none', // no specific UI is triggered
        'toast', // a toast is shown (does not require user interaction)
        'modal' // a modal is presented that requires cashier confirmation
      ]
    },
    no_result_sound: {
      description: 'If true - triggers a specific sound if the search ended without results',
      type: 'boolean',
      default: false
    },
    timeout: {
      description: 'Timeout (in seconds) to end a search if there are no results',
      type: 'number',
      minimum: 0,
      default: 60
    },
    search_entities: {
      description: 'Entities that should be searched in a specific context. Searches will be performed in parallel (within an entity per defined behavior).',
      type: 'array',
      items: {
        ...searchEntity
      }
    }
  }
}

module.exports = {
  type: 'object',
  properties: {
    // additional views must be explicitely defined
    // (only white listing supported by client context switches)
    search_view: {
      description: 'Scan view, should be limited to products/offlineFirst',
      type: 'object',
      ...searchBehavior
    },
    tile_view: {
      description: 'Tile view, no limitations, probably account requirements dependent',
      type: 'object',
      ...searchBehavior
    },
    history: oneOf({
      description: 'Transaction history view',
      type: 'object',
      properties: {
        search_field: oneOf({
          description: 'Search text field for the full list',
          type: 'object',
          properties: {
            transaction_number: oneOf({
              description: 'If true and the search text qualifies as an integer number - search for transactions with that transaction number',
              type: 'boolean',
              default: true
            }),
            transaction_total: oneOf({
              description: 'If true and the search text qualifies as a decimal number - search for transactions with that total amount',
              type: 'boolean',
              default: false
            })
          }
        })
      }
    })
    // history, voucher scan view etc. already come with limited scope - searchBehavior should not be configurable there
  }
}
