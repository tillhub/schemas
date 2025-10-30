module.exports = {
  type: 'object',
  properties: {
    shop_name: {
      type: 'string'
    },
    favicon_url: {
      oneOf: [
        { type: 'null' },
        { type: 'string' }
      ]
    },
    brand_color: {
      oneOf: [
        { type: 'null' },
        { type: 'string' }
      ]
    },
    background_color: {
      oneOf: [
        { type: 'null' },
        { type: 'string' }
      ]
    },
    text_color: {
      oneOf: [
        { type: 'null' },
        { type: 'string' }
      ]
    },
    payment_form_background_color: {
      oneOf: [
        { type: 'null' },
        { type: 'string' }
      ]
    },
    basket_background_color: {
      oneOf: [
        { type: 'null' },
        { type: 'string' }
      ]
    },
    link_color: {
      oneOf: [
        { type: 'null' },
        { type: 'string' }
      ]
    },
    font_style: {
      oneOf: [
        { type: 'null' },
        { type: 'string' }
      ]
    },
    form_style: {
      oneOf: [
        { type: 'null' },
        { type: 'string' }
      ]
    },
    shadows: {
      oneOf: [
        { type: 'null' },
        { type: 'boolean' }
      ]
    },
    unzer_logo_in_footer: {
      oneOf: [
        { type: 'null' },
        { type: 'boolean' }
      ]
    },
    shop_logo: {
      oneOf: [
        { type: 'null' },
        {
          type: 'object',
          properties: {
            original: { type: 'string' },
            '1x': { type: 'string' }
          },
          required: ['original']
        }
      ]
    },
    background_image: {
      oneOf: [
        { type: 'null' },
        {
          type: 'object',
          properties: {
            original: { type: 'string' },
            '1x': { type: 'string' }
          },
          required: ['original']
        }
      ]
    }
  },
  required: ['shop_name']
}
