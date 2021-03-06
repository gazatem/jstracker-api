'use strict';

const globalHooks = require('../../../hooks');
const hooks = require('feathers-hooks');
const process = require('./process');
const auth = require('./auth');

exports.before = {
  all: [auth()],
  find: [],
  get: [],
  create: [process()],
  update: [process()],
  patch: [],
  remove: []
};

exports.after = {
  all: [],
  find: [],
  get: [],
  create: [],
  update: [],
  patch: [],
  remove: []
};
