/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  assetPrefix:
    process.env.NEXT_PUBLIC_NODE_ENV === 'production' ? '/next-transition' : '',
};

module.exports = nextConfig;
