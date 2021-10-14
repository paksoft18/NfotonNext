module.exports = {
  reactStrictMode: true,

  rewrites() {
    return [
      {
        source: "/:path*",
        destination: "/:path*",
      },
      {
        source: "/:path*",
        destination: "http://localhost:3001/:path*",
      },
      {
        source: "/",
        destination: "http://localhost:3001/",
      },
    ];
  },
};
