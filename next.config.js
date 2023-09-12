/** @type {import('next').NextConfig} */
const graphql = require('next-plugin-graphql');

const nextConfig = {
  reactStrictMode: true,
}

module.exports = () => {
  const plugins = [graphql];
  const config = plugins.reduce((acc, plugin) => plugin(acc), {
    ...nextConfig,
  });
  return config;
};
