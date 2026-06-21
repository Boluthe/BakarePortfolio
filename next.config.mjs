/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '/BakarePortfolio',
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
