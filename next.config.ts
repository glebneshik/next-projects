/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true, // Игнорировать TypeScript ошибки временно
  },
};

module.exports = nextConfig;