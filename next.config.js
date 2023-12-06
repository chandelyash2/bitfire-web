/** @type {import('next').NextConfig} */
const graphql = require("next-plugin-graphql");

const nextConfig = {
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: "/",
        destination: "/account/balance",
        permanent: true,
      },
    ];
  },
};

module.exports = () => {
  const plugins = [graphql];
  const config = plugins.reduce((acc, plugin) => plugin(acc), {
    ...nextConfig,
  });
  return config;
};
