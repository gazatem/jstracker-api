'use strict';

const service = require('feathers-mongoose');
const orders = require('./orders-model');
const hooks = require('./hooks');

module.exports = function() {
  const app = this;

  const options = {
    Model: orders,
    paginate: {
      default: 5,
      max: 25
    }
  };

  // Initialize our service with any options it requires
  app.use('/orders', service(options));

  // Get our initialize service to that we can bind hooks
  const ordersService = app.service('/orders');

  // Set up our before hooks
  ordersService.before(hooks.before);

  // Set up our after hooks
  ordersService.after(hooks.after);
};
