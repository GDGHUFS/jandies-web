import { createVanillaExtractPlugin } from '@vanilla-extract/next-plugin';
import { type NextConfig } from 'next';

const withVanillaExtract = createVanillaExtractPlugin();

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'unsplash.com',
      },
    ],
  },
};

export default withVanillaExtract(nextConfig);
