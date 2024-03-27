/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "uydthufkzpkpaoiatwqm.supabase.co",
        port: "",
      },
    ],
  },
};

export default nextConfig;
