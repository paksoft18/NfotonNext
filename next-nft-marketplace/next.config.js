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
        destination: `${process.env.NEXT_PUBLIC_REACT_BASE_URI}/:path*`,
      },
      {
        source: "/",
        destination: process.env.NEXT_PUBLIC_REACT_BASE_URI,
      },
    ];
  },
};
