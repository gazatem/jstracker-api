'use strict';

const assert = require('assert');
const app = require('../../../src/app');

describe('orders service', function() {
  it('registered the orders service', () => {
    assert.ok(app.service('orders'));
  });
});
