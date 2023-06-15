/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  modularizeImports: {
    '@mui/material': {
      transform: '@mui/material/{{member}}',
    },
    '@mui/icons-material': {
      transform: '@mui/icons-material/{{member}}',
    },
  },
  async redirects() {
    return [
      // Social media
      { source: '/linkedin', destination: 'https://linkedin.com/in/richardsolomou', permanent: false },
      { source: '/github', destination: 'https://github.com/richardsolomou', permanent: false },
      { source: '/twitter', destination: 'https://twitter.com/richardsolomou', permanent: false },
      { source: '/instagram', destination: 'https://instagram.com/richard.solomou', permanent: false },

      // Link shorteners
      { source: '/link/digitalocean', destination: 'https://m.do.co/c/b75444449cb8', permanent: false },
    ];
  },
};

module.exports = nextConfig;
