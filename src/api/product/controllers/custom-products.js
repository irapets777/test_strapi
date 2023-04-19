const { createCoreController } = require("@strapi/strapi").factories;

const moduleId = "api::product.product";

module.exports = createCoreController(moduleId, ({ strapi }) => ({
    test: async (ctx) => {
        console.log("TEST");
    }
}));