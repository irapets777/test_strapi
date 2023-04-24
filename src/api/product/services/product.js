'use strict';

/**
 * product service
 */

const { createCoreService } = require('@strapi/strapi').factories;
const moduleId = 'api::product.product';
module.exports = createCoreService(moduleId, ({strapi, ctx}) =>({
    createProduct: async (payload) => {
        const response = await strapi.db.query(moduleId).create({
            data: {
                publishedAt: new Date(),
              ...payload
            },
          });
        return response;
    },

    calcSumProducts: async () => {
        const response = await strapi.db.query(moduleId).findMany({
            select: ['price', "ID"],
           
        });
        console.log(response);
        let sum = 0;
        let brokeList = [];
        response.forEach((el) => {
            el.price ? sum += el.price : brokeList.push(el)
        })
        return {
            success: true,
            data: {
                sum
            },
            brokeList
        }
    }
}));


