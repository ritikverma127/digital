/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "dummy-api-f49w.onrender.com",
        pathname: "/**",
      },
    ],
  },
};

module.exports = nextConfig;
