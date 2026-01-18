/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    domains: ['picsum.photos', 'unsplash.com'],
  },
  env: {
    DATABASE_URL: process.env.DATABASE_URL,
    NEXTAUTH_SECRET: process.env.NEXTAUTH_SECRET,
    NEXTAUTH_URL: process.env.NEXTAUTH_URL,
    NOVU_API_KEY: process.env.NOVU_API_KEY,
    REDIS_URL: process.env.REDIS_URL,
  },
};

module.exports = nextConfig;
