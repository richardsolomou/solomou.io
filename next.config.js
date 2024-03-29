/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      // Social media
      { source: '/linkedin', destination: 'https://linkedin.com/in/richardsolomou', permanent: false },
      { source: '/github', destination: 'https://github.com/richardsolomou', permanent: false },
      { source: '/twitter', destination: 'https://twitter.com/richardsolomou', permanent: false },
      { source: '/x', destination: 'https://x.com/richardsolomou', permanent: false },
      { source: '/instagram', destination: 'https://instagram.com/richard.solomou', permanent: false },
      { source: '/blog', destination: 'https://blog.solomou.io', permanent: false },
      // Link shorteners
      { source: '/link/digitalocean', destination: 'https://m.do.co/c/b75444449cb8', permanent: false },
    ];
  },
  async rewrites() {
    return [
      // CV
      { source: '/cv', destination: '/cv.pdf' },
    ];
  },
};

module.exports = nextConfig;
