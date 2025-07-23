import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  /* config options here */
  experimental: {
    ppr: 'incremental', // Enable Partial Prerendering
  }
};

export default nextConfig;
