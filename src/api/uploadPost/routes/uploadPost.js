module.exports = {
  routes: [
    {
      method: "GET",
      path: "/uploadPost",
      handler: "uploadPost.send",
      config: {
        policies: [],
        middlewares: [],
      },
    },
  ],
};
