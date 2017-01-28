'use strict';

// src/services/message/hooks/process.js
//
// Use this hook to manipulate incoming or outgoing data.
// For more information on hooks see: http://docs.feathersjs.com/hooks/readme.html

module.exports = function(options) {
  return function(hook) {
    const client_id = hook.data.client.client_id.substring(0, 50).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;');
    const api_key = hook.data.client.api_key.substring(0, 50).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;');
    
    const product_id = hook.data.product.id;
    const product_price = hook.data.product.price;
    const product_model = hook.data.product.model;
    const product_name = hook.data.product.name;

    const customer_name = hook.data.customer.name;
    const customer_id = hook.data.customer.id;
    const customer_email = hook.data.customer.email;
    const customer_phone = hook.data.customer.phone;

    const referrer = hook.data.headers.referrer.replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;');
    const documentURI = hook.data.headers.uri.replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;');
    const userAgent = hook.data.headers.agent.replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;');
    // Override the original data
    hook.data = {
        client_id,
        api_key,
        product_id,
        product_name,
        product_model,
        product_price,
        customer_id,
        customer_name,
        customer_email,
        customer_phone,
        referrer,
        documentURI,
        userAgent,
        createdAt: new Date().getTime()
    };
  };
};