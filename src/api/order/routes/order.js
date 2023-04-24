module.exports = {
  routes: [
    {
      method: "GET",
      path: "/order",
      handler: "order",
      config: {
        policies: [],
        middlewares: [],
      },
      method: "GET",
      path: "/order/exp",
      handler: "order.exp",
      config: {
        policies: [],
        middlewares: [],
      },
    },
  ],
};
