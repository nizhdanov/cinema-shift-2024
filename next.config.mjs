/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'shift-backend.onrender.com',
        port: '',
        pathname: '/static/images/**'
      }
    ]
  }
  // async rewrites() {
  //   return {
  //     fallback: [
  //       {
  //         source: '/mobile',
  //         destination: '/mobile'
  //       }
  //     ]
  //   };
  // }
};

export default nextConfig;
