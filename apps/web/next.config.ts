import { createVanillaExtractPlugin } from '@vanilla-extract/next-plugin';
import { type NextConfig } from 'next';

const withVanillaExtract = createVanillaExtractPlugin();

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
    ],
  },
};

export default withVanillaExtract(nextConfig);
