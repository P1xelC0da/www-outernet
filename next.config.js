/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  async redirects() {
    return [
      {
        source: '/stipends',
        destination: 'https://airtable.com/shr4Hx3nkLvOt7GMQ',
        permanent: true,
      },
      {
        source: '/shuttles',
        destination: 'https://airtable.com/shrKxW4Vga4uWFAL7',
        permanent: true,
      },
      {
        source: '/airlines',
        destination: 'http://hack.af/outernet-airlines',
        permanent: true,
      }
    ];
  },
};

module.exports = nextConfig;
