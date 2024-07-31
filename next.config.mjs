/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "*",
      },
      // {
      //   protocol: "https",
      //   hostname: "www.themealdb.com",
      // },
      // {
      //   protocol: "https",
      //   hostname: "picsum.photos",
      // },
    ],
  },
};

export default nextConfig;
