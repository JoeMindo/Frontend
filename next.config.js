/** @type {import('next').NextConfig} */
const withLess = require("next-with-less");

const nextConfig = withLess({
  reactStrictMode: true,
  images: {
    loader: 'akamai',
    path: '',
  },
  lessLoaderOptions: {},
})


module.exports = nextConfig
