/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '/bakareportfolio',
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
