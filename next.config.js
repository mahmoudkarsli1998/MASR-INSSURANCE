// next.config.js
const path = require('path');

/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: { ignoreBuildErrors: true },
  eslint:      { ignoreDuringBuilds: true },
  images: {
    remotePatterns: [{
      protocol: 'https',
      hostname: 'placehold.co',
      port: '',
      pathname: '/**',
    }],
  },
  webpack(config) {
    config.resolve.alias['@'] = path.resolve(__dirname, 'src');
    return config;
  },
};

module.exports = nextConfig;
