
import type { NextConfig } from 'next';


const nextConfig: NextConfig = {
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

