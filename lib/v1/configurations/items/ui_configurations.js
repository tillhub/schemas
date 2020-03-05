
module.exports = {
  oneOf: [
    {
      type: 'null'
    },
    {
      type: 'object',
      properties: {
        dashboard: {
          type: 'object',
          properties: {
            products: {
              type: 'object',
              properties: {
                list: {
                  type: 'object',
                  properties: {
                    quick_view_enabled: {
                      type: 'boolean'
                    }
                  }
                },
                edit: {
                  type: 'object',
                  properties: {
                    prices: {
                      type: 'object',
                      properties: {
                        click_to_edit_enabled: {
                          type: 'boolean'
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  ]
}
