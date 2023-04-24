"use strict";

/**
 * A set of functions called "actions" for `crm`
 */
const orderId = "api::order.order";

module.exports = {
  create: async (ctx, next) => {
    // const data = ctx.request.body;
    let response = await strapi
      .service(orderId)
      .createPost("hello");
    ctx.send(response);
  },
};
