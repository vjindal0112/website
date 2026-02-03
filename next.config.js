/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    return [
      {
        source: "/_a/s.js",
        destination: "/_vercel/insights/script.js",
      },
      {
        source: "/_a/i",
        destination: "/_vercel/insights",
      },
    ];
  },
};

module.exports = nextConfig;
