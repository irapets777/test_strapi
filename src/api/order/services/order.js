const { createCoreService } = require("@strapi/strapi").factories;

const productId = "api::product.product";
module.exports = ({ ctx, strapi }) => ({
  createPost: async (val) => {
   return val
  },
  exp: async () => {
    const resp = await strapi.db.query(productId).findMany({
        // select: ['price', "ID"],   
    });
    let targetProdct = {...resp[0]};
    resp.forEach((el) => {
      if (el.price > targetProdct.price){
        targetProdct = {};
        targetProdct = el;
      }
    }); 
    
    return {
      success: true,
      data: {
        ...targetProdct
      },
      comments: ""
    } 
}
});
