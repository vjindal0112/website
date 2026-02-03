/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    return [
      {
        source: "/_a/s.js",
        destination: "https://www.varunjindal.com/_vercel/insights/script.js",
      },
      {
        source: "/_a/i/:path*",
        destination: "https://www.varunjindal.com/_vercel/insights/:path*",
      },
    ];
  },
};

module.exports = nextConfig;
