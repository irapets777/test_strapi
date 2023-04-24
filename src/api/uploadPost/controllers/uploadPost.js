"use strict";

/**
 * A set of functions called "actions" for `crm`
 */
// const orderId = "api::uploadPost.uploadPost";

module.exports = {
  send: async (ctx, next) => {
    // const data = ctx.request.body;
    let response = await strapi
      .service(orderId)
      .getPosts("hello");

    ctx.send(response);
  },
  
};
