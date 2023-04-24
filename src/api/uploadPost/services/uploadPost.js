const { createCoreService } = require("@strapi/strapi").factories;

// const productId = "api::product.product";
module.exports = ({ ctx, strapi }) => ({
getPosts: async (val) => {
   return val
  },
});
