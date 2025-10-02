/** @type {import('next').NextConfig} */
const nextConfig = {
  trailingSlash: true,
  assetPrefix: process.env.NODE_ENV === 'production' ? 'https://yourdomain.com' : '',
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true, // Игнорировать TypeScript ошибки временно
  },
};

module.exports = nextConfig;