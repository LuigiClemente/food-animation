/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // Enable static HTML export
  reactStrictMode: false,
  trailingSlash: false, // Disable trailing slashes to avoid redirect issues
  images: {
    unoptimized: true // Disable image optimization for static export
  },
  // Disable all automatic redirects
  experimental: {
    disableOptimizedLoading: true
  }
};

module.exports = nextConfig;
