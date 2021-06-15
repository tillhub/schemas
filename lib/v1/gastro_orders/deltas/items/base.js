const { stripIndents } = require('common-tags')
const { oneOf } = require('../../../../helpers/payload-or-null')

module.exports = {
  type: 'object',
  additionalProperties: false,
  required: [
    'quantity',
    'text',
    'price_per_unit'
  ],
  description: stripIndents`
      A line item in context of a delta-order, representing newly added and newly removed line items.

      In den processData der Bestellung werden die einzelnen Bestellpositionen in CSVDarstellung
      mit den Spalten Menge, Bezeichnung und Preis abgebildet.
      Als Zeilentrennzeichen ist “\r” (Wagenrücklauf, Unicode U+000D) und als Spaltentrennzeichen
      “;” (Semikolon, Unicode U+003B) zu verwenden.

      Translation:
      In the processData of an order (delta) the positions will be encoded in CSV format
      with the colums "quantity", "text" and "effective price" (per quantity=1.0)

      The line separator is “\r” (Carriage Return, Unicode U+000D),
      the separator for columns is ";" (Semicolon, Unicode U+003B)

      e.g.:
      2;”Eisbecher ““Himbeere“““;3.99
      1;”Eiskaffee“;2.99
      `,
  properties: {
    quantity: {
      description: stripIndents`
        The quantity of this item. e.g. 1 pc or 0.125kg - DSFinV_K: "Menge"'

        For the removal of items from the whole process the quantity will be negative

        In a call to the Fiskaly-API this is encoded as a string: "quantity": "10.9814"
        `,
      type: 'number',
      example: 10.9814,
      minimum: -32767,
      maximum: 32767,
      multipleOf: 0.0001
    },
    text: {
      description: stripIndents`
      The descriptive text of this item - DSFinV_K: "Bezeichnung"'

      In a call to the Fiskaly-API this is encoded as: "text": "Eisbecher “Himbeere“"
      `,
      type: 'string',
      example: '”Schnitzel ””Wiener Art”””'
    },
    price_per_unit: {
      description: stripIndents`
      The effective gross price of an item per quantity=1.0, after applying discounts - DSFinV_K: "Preis"',
      (= total_gross / quantity, quantity != 0)
      changing the price or the discounts will cause removal of this item and adding another one with the updated values,

      In a call to the Fiskaly-API this is encoded as a string: "price_per_unit": "20.25" - 2 decimals always required
      `,
      type: 'number',
      example: 20.25,
      minimum: -1000000,
      maximum: 1000000,
      multipleOf: 0.01
    },
    product: oneOf({
      type: 'string',
      format: 'uuid',
      description: 'The Tillhub product resource reference ID. This is a convinience add on and not required by order-signing',
      example: '43847a66-97dc-4ac2-8e8a-c44920e1f22f'
    })
  }
}
