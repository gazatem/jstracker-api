'use strict';

// carts-model.js - A mongoose model
// 
// See http://mongoosejs.com/docs/models.html
// for more of what you can do here.

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const cartsSchema = new Schema({
  tracker: { type: Object, required: true },
  cart_info: { type: Object },
  products: { type: Array },
  createdAt: { type: Date, 'default': Date.now },
  updatedAt: { type: Date, 'default': Date.now }
});

const cartsModel = mongoose.model('carts', cartsSchema);

module.exports = cartsModel;