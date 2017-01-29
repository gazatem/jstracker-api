'use strict';

module.exports = function(options) {
  return function(hook) {
      throw new Error('You need to be logged in');
  }
}