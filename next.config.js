/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  skipTrailingSlashRedirect: true,
  trailingSlash: true,
  basePath:
    process.env.NEXT_PUBLIC_NODE_ENV === 'production' ? '/next-transition' : '',
};

module.exports = nextConfig;
