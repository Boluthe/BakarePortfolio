/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '/BakarePortfolio',
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  env: {
    NEXT_PUBLIC_BASE_PATH: '/BakarePortfolio',
  },
};

export default nextConfig;
