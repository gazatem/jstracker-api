'use strict';

// src/services/message/hooks/process.js
//
// Use this hook to manipulate incoming or outgoing data.
// For more information on hooks see: http://docs.feathersjs.com/hooks/readme.html

module.exports = function(options) {
  return function(hook) {
    const clientId = hook.data.client.clientId.substring(0, 50).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;');
    const apiKey = hook.data.client.apiKey.substring(0, 50).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;');
    const productId = hook.data.product.prodid.replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;');
    const productPrice = hook.data.product.price;
    const referrer = hook.data.headers.referrer.replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;');
    const documentURI = hook.data.headers.uri.replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;');
    const userAgent = hook.data.headers.agent.replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;');
    const customerId = hook.data.customer.customerId;
    // Override the original data
    hook.data = {
        apiKey,
        clientId,
        productId,
        productPrice,
        customerId,
        referrer,
        documentURI,
        userAgent,
        createdAt: new Date().getTime()
    };
  };
};