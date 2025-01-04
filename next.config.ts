
import type { NextConfig } from 'next';


const nextConfig: NextConfig = {
  env: {
    NEXT_PUBLIC_SANITY_DATASET: process.env.NEXT_PUBLIC_SANITY_DATASET || "production",
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'res.cloudinary.com', 
      },
      {
        protocol: 'https',
        hostname: 'cdn.sanity.io', 
      },
      
    ],
  },
};

export default nextConfig;

