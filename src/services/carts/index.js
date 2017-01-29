'use strict';

const service = require('feathers-mongoose');
const carts = require('./carts-model');
const hooks = require('./hooks');

module.exports = function() {
  const app = this;

  const options = {
    Model: carts,
    paginate: {
      default: 5,
      max: 25
    }
  };

  // Initialize our service with any options it requires
  app.use('/carts', service(options));

  // Get our initialize service to that we can bind hooks
  const cartsService = app.service('/carts');

  // Set up our before hooks
  cartsService.before(hooks.before);

  // Set up our after hooks
  cartsService.after(hooks.after);
};
