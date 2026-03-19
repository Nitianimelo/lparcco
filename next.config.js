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
    ],
  },
}

module.exports = nextConfig
