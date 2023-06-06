const path = require('path')

/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack: (config, { defaultLoaders }) => {
    const srcPath = path.join(__dirname, '/');
    config.resolve.alias['@'] = srcPath
    return config
  },
  reactStrictMode: true,
  swcMinify: true,
  env: {
    API_URL: process.env.API_URL,
    SECRET_KEY_JWT: process.env.SECRET_KEY_JWT,
    TOKEN_HEADER_KEY: process.env.TOKEN_HEADER_KEY
  }

}

module.exports = nextConfig
