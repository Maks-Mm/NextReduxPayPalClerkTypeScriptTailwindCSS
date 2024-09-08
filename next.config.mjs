/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "dummyjson.com",
      },
      {
        protocol: "https",
        hostname: "cdn.pixabay.com",
      },
      {
        protocol: "https",
        hostname: "fakestoreapi.com", // Hinzufügen des Hostnamens fakestoreapi.com
      },
      
    ],
  },
};

export default nextConfig;
