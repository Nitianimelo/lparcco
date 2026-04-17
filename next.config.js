/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'maas-log-prod.cn-wlcb.ufileos.com',
      },
      {
        protocol: 'https',
        hostname: 'qscezcbpwvnkqoevulbw.supabase.co',
      },
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
    ],
  },
}

module.exports = nextConfig
