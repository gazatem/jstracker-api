'use strict';

// src/services/message/hooks/process.js
//
// Use this hook to manipulate incoming or outgoing data.
// For more information on hooks see: http://docs.feathersjs.com/hooks/readme.html

module.exports = function(options) {
  return function(hook) {

    const client_id = hook.data.tracker.client_id.substring(0, 50).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;');
    const api_key = hook.data.tracker.api_key.substring(0, 50).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;');
    const referrer = hook.data.tracker.referrer.replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;');
    const userAgent = hook.data.tracker.agent.replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;');
    const remote_adddr = hook.data.tracker.remote_adddr.replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;');
    const products = hook.data.products;
    const cart_info = hook.data.cart_info;
    // Override the original data
    hook.data = {
        client_id,
        api_key,
        referrer,
        userAgent,
        remote_adddr,
        products,
        cart_info,
        createdAt: new Date().getTime()
    };
  };
};