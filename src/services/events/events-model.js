'use strict';

// events-model.js - A mongoose model
//
// See http://mongoosejs.com/docs/models.html
// for more of what you can do here.

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const eventsSchema = new Schema({
  apiKey: { type: String },
  clientId: { type: String },
  referrer: { type: String },
  documentURI: { type: String },
  userAgent: { type: String },
  product_sku: { type: String },
  product_price: { type: String },
  createdAt: { type: Date, 'default': Date.now },
  updatedAt: { type: Date, 'default': Date.now }
});

const eventsModel = mongoose.model('events', eventsSchema);

module.exports = eventsModel;