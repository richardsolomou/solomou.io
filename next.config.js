/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  poweredByHeader: false,
  async redirects() {
    return [
      // Social media
      { source: '/linkedin', destination: 'https://linkedin.com/in/richardsolomou', permanent: false },
      { source: '/github', destination: 'https://github.com/richardsolomou', permanent: false },
      { source: '/twitter', destination: 'https://twitter.com/richardsolomou', permanent: false },

      // Link shorteners
      { source: '/link/digitalocean', destination: 'https://m.do.co/c/b75444449cb8', permanent: false },
    ];
  },
};

module.exports = nextConfig;
