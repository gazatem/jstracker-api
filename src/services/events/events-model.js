'use strict';

// events-model.js - A mongoose model
//
// See http://mongoosejs.com/docs/models.html
// for more of what you can do here.

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const eventsSchema = new Schema({
  client_id: { type: String },
  api_key: { type: String },
  product_id: { type: String },
  product_name: { type: String },
  product_model: { type: String },
  product_price: { type: String },
  customer_id: { type: String },
  customer_name: { type: String },
  customer_email: { type: String },
  customer_phone: { type: String},
  referrer: { type: String },
  documentURI: { type: String },
  userAgent: { type: String },
  createdAt: { type: Date, 'default': Date.now },
  updatedAt: { type: Date, 'default': Date.now }
});

const eventsModel = mongoose.model('events', eventsSchema);

module.exports = eventsModel;