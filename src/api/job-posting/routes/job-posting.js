module.exports = {
  routes: [
    {
      method: "GET",
      path: "/job-posting/create",
      handler: "job-posting.create",
      config: {
        policies: [],
        middlewares: [],
      },
    },
  ],
};
