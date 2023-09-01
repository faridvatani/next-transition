/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  trailingSlash: true,
  basePath: "/next-transition",
  experimental: {
    appDir: true,
  },
};

module.exports = nextConfig;
