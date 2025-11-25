/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  // Disable file watching
  webpack: (config, { dev, isServer }) => {
    if (dev) {
      config.watchOptions = {
        ignored: ['**/*'],
      };
    }
    return config;
  },
  // Disable Fast Refresh
  experimental: {
    reactRefresh: false,
  },
  // Disable type checking and linting
  typescript: { ignoreBuildErrors: true },
  eslint: { ignoreDuringBuilds: true },
}

module.exports = nextConfig