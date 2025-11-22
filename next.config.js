// Legacy config removed in favor of modern Next.js configuration.
const path = require('path');
const env = process.env.NODE_ENV || 'development';

// Modern Next.js 15 configuration with static export compatibility.
const prod = env === 'production';
const nextConfig = {
  reactStrictMode: true,
  trailingSlash: true,
  basePath: prod ? '/cinematics' : '',
  assetPrefix: prod ? '/cinematics/' : '',
  images: { unoptimized: true }, // allows next export without image optimization
  async redirects() {
    return [
      {
        source: '/',
        destination: '/home',
        permanent: false
      }
    ];
  },
  // No custom webpack rules needed; using Next.js default asset handling via /public
};

module.exports = nextConfig;
