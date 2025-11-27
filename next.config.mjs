/** @type {import('next').NextConfig} */
const nextConfig = {
  /* config options here */
  reactStrictMode: true,
    images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "bss.alekh.online",
        port: "",
        pathname: "/public/storage/**",   // adjust path if needed
      },
    ],
  },
};

export default nextConfig;
