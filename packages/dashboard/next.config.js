const isProduction = process.env.NODE_ENV === "production";

const nextConfig = {
  reactStrictMode: true,
  basePath: isProduction ? "/tour.js" : null,
  assetPrefix: isProduction ? "/tour.js" : null,
};

module.exports = nextConfig;
