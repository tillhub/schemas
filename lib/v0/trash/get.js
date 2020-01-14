module.exports.request = {
  $id: 'https://schemas.tillhub.com/v0/trash.create.request.schema.json',
  $schema: 'http://json-schema.org/draft-07/schema#',
  additionalProperties: true,
  required: [
  ],
  properties: {
    start: {
      type: 'string',
      format: 'date-time'
    },
    end: {
      type: 'string',
      format: 'date-time'
    },
    type: {
      type: 'string',
      enum: [
        'accounts',
        'branch_groups',
        'branches',
        'categories',
        'category_trees',
        'clients',
        'customers',
        'device_groups',
        'discounts',
        'expense_accounts',
        'favourites',
        'functions',
        'manufacturers',
        'payment_options',
        'processes',
        'product_groups',
        'product_service_question_groups',
        'product_service_questions',
        'product_templates',
        'products_v1',
        'promotions',
        'reasons',
        'regions',
        'safes',
        'seasons',
        'staff',
        'staff_groups',
        'staff_permission_templates',
        'storefronts',
        'tags',
        'taxes',
        'templates',
        'warehouses'
      ]
    }
  },
  type: 'object'
}
