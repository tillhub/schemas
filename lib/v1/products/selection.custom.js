module.exports = {
  $id: "https://schemas.tillhub.com/v1/products.selection.custom.request.schema.json",
  $schema: "http://json-schema.org/draft-07/schema#",
  additionalProperties: false,
  type: "object",
  required: ["custom_ids"],
  properties: {
    custom_ids: {
      type: "array",
      minItems: 1,
      maxItems: 100,
      items: {
        description: "Product Custom ID",
        type: "string",
        example: "12345678"
      }
    }
  }
};
