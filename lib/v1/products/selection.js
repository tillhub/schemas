module.exports = {
  $id: "https://schemas.tillhub.com/v1/products.selection.request.schema.json",
  $schema: "http://json-schema.org/draft-07/schema#",
  additionalProperties: false,
  type: "object",
  required: [],
  anyOf: [{ required: ["product_ids"] }, { required: ["custom_ids"] }],
  properties: {
    product_ids: {
      type: "array",
      minItems: 1,
      maxItems: 100,
      items: {
        description: "Product UUID",
        type: "string",
        format: "uuid",
        example: "05297f58-3408-44d0-8bf4-125d4e86c08a"
      }
    },
    custom_ids: {
      type: "array",
      minItems: 1,
      maxItems: 100,
      items: {
        description: "Custom string ID",
        type: "string",
        example: "custom_id_12345"
      }
    }
  }
};
