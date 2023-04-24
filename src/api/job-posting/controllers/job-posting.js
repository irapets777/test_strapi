"use strict";

/**
 * A set of functions called "actions" for `crm`
 */

module.exports = {
  create: async (ctx, next) => {
    // const data = ctx.request.body;
    let response = await strapi
      .service("api::job-posting.job-posting")
      .createPost("hello");
    ctx.send(response);
  },
};
