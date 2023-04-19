'use strict'

module.exports = {
    routes: [
        {
            method: "GET",
            path: "/product/test",
            handler: "custom-products.test",
        },
        {
            method: "POST",
            path: "/product/create",
            handler: "custom-products.create",
        },
        {
            method: "GET",
            path: "/product/sum",
            handler: "custom-products.sum",
        },
    ],
};