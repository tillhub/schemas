module.exports = {
  type: 'object',
  properties: {
    use_individual_closing_days: {
      type: 'boolean'
    },
    closing_days: {
      type: 'array',
      items: {
        type: 'object',
        properties: {
          reason: {
            type: 'string'
          },
          start_date: {
            type: 'string',
            format: 'date'
          },
          end_date: {
            type: 'string',
            format: 'date'
          }
        }
      }
    },
    customization: {
      type: 'object',
      properties: {
        theme: {
          type: 'object',
          properties: {
            font: {
              type: 'string'
            },
            logo: {
              oneOf: [
                { type: 'null' },
                { type: 'string' }
              ]
            },
            color: {
              type: 'string'
            }
          }
        },
        max_booking_lead_time: {
          type: 'object',
          properties: {
            type: {
              type: 'string'
            },
            value: {
              type: 'number'
            }
          }
        },
        min_booking_lead_time: {
          type: 'object',
          properties: {
            type: {
              type: 'string'
            },
            value: {
              type: 'number'
            }
          }
        },
        cancellation_lead_time: {
          type: 'object',
          properties: {
            type: {
              type: 'string'
            },
            value: {
              type: 'number'
            }
          }
        },
        allow_employee_selection: {
          type: 'boolean'
        },
        reservations_page_activated: {
          type: 'boolean'
        },
        max_services_per_appointment: {
          type: 'number'
        },
        reservation_frequency_minutes: {
          type: 'number'
        }
      }
    },
    use_individual_opening_hours: {
      type: 'boolean'
    },
    opening_hours: {
      type: 'array',
      items: {
        type: 'object',
        properties: {
          day_index: {
            type: 'number'
          },
          closed: {
            type: 'boolean'
          },
          open_from: {
            type: 'string'
          },
          open_to: {
            type: 'string'
          },
          break_from: {
            oneOf: [
              { type: 'null' },
              { type: 'string' }
            ]
          },
          break_to: {
            oneOf: [
              { type: 'null' },
              { type: 'string' }
            ]
          }
        }
      }
    }
  }
}
