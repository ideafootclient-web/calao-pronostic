/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [],
  },
  experimental: {
    serverActions: {
      allowedOrigins: ['*'],
    },
  },
};

export default nextConfig;
