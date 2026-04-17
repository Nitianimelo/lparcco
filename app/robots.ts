import { MetadataRoute } from 'next'

const BASE_URL = 'https://arccoai.com.br'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
      },
      // Allow AI crawlers that power GEO/AEO (Generative Engine Optimization)
      {
        userAgent: 'GPTBot',
        allow: '/',
      },
      {
        userAgent: 'Google-Extended',
        allow: '/',
      },
      {
        userAgent: 'PerplexityBot',
        allow: '/',
      },
      {
        userAgent: 'ClaudeBot',
        allow: '/',
      },
    ],
    sitemap: `${BASE_URL}/sitemap.xml`,
    host: BASE_URL,
  }
}
