const { createCoreController } = require("@strapi/strapi").factories;

const moduleId = "api::product.product";

module.exports = createCoreController(moduleId, ({ strapi }) => ({
    test: async (ctx) => {
        console.log("TEST");
    },
    create: async (ctx) => {
        const PAYLOAD = ctx.request.body;
        const RESPONSE = await strapi.service(moduleId).createProduct(PAYLOAD);
  
        ctx.send(RESPONSE);
    },
    sum: async (ctx) =>{
        ctx.send(await strapi.service(moduleId).calcSumProducts())
    }
}));