import { NextConfig } from 'next';

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'http',
        hostname: '**', // Permite qualquer hostname
      },
      {
        protocol: 'https',
        hostname: '**', // Permite qualquer hostname
      },
    ],
  },
};

export default nextConfig;
