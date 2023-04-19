const {createCoreControler} = require("@strapi/strapi").factories;

const moduleId = "api::product.product";

module.exports = createCoreControler(moduleId, ({ strapi }) => ({
    test: async (ctx) => {
        console.log("TEST");
    }
}));