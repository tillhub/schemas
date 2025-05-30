module.exports = {
  id: {
    type: "string",
    format: "uuid"
  },
  name: {
    type: "string",
    minLength: 1
  },
  location: {
    type: "string",
    format: "uuid"
  },
  tables_count: {
    type: "integer",
    minimum: 0
  },
  active: {
    type: "boolean",
    default: true
  },
  layout: {
    type: "object",
    additionalProperties: true,
    default: {}
  },
  new_tables: {
    type: "array",
    items: {
      type: "string",
      format: "uuid"
    }
  },
  changed_tables: {
    type: "array",
    items: {
      type: "string",
      format: "uuid"
    }
  },
  deleted_tables: {
    type: "array",
    items: {
      type: "string",
      format: "uuid"
    }
  },
  combinations: {
    type: "array",
    items: {
      type: "array",
      items: {
        type: "string",
        format: "uuid"
      }
    }
  }
};
