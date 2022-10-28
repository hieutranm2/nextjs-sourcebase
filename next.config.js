const StylelintWebpackPlugin = require('stylelint-webpack-plugin')

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  pageExtensions: ['page.tsx'],
  webpack(config) {
    config.plugins.push(new StylelintWebpackPlugin())
    return config
  },
}

module.exports = nextConfig
