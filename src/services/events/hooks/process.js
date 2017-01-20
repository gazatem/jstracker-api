'use strict';

// src/services/message/hooks/process.js
//
// Use this hook to manipulate incoming or outgoing data.
// For more information on hooks see: http://docs.feathersjs.com/hooks/readme.html

module.exports = function(options) {
  return function(hook) {
    // The actual message text
    const clientId = hook.data.client.clientId
      // Messages can't be longer than 400 characters
      .substring(0, 50)
      // Do some basic HTML escaping
      .replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;');

    // Override the original data
    hook.data = {
      clientId,
      createdAt: new Date().getTime()
    };
  };
};