import { MetadataRoute } from 'next'
import { makeAbsoluteUrl } from '../services/UrlService'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      disallow: ['/*.webp', '/*.png', '/*.svg'],
      crawlDelay: 10,
    },
    sitemap: makeAbsoluteUrl('/sitemap.xml'),
  }
}
