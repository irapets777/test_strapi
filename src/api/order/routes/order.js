module.exports = {
  routes: [
    {
      method: "GET",
      path: "/order",
      handler: "order.create",
      config: {
        policies: [],
        middlewares: [],
      },
    },
  ],
};
