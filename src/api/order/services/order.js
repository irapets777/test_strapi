const { createCoreService } = require("@strapi/strapi").factories;

module.exports = ({ ctx, strapi }) => ({
  createPost: async (val) => {
   return val
  }
});
