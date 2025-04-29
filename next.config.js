/** @type {import('next').NextConfig} */
const nextConfig = {
  // 输出为静态HTML，这对Netlify部署很重要
  output: 'export',
  
  // 禁用图像优化，因为静态导出不支持
  images: {
    unoptimized: true,
  },
  
  // 确保路径正确
  trailingSlash: true,
  
  // 禁用严格模式以避免潜在问题
  reactStrictMode: false,
};

module.exports = nextConfig;
