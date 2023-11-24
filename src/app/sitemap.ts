import { MetadataRoute } from 'next'
import { defaultLocale, availableLocales } from '@/src/config/i18n'
import { getAllPosts } from '@/src/services/BlogPostsService'
import { makeAbsoluteUrl } from '@/src/services/UrlService'

type Sitemap = MetadataRoute.Sitemap
type Item = MetadataRoute.Sitemap[0]

const mapLocales = (callback: (locale: string) => Sitemap) =>
  ['', ...Object.values(availableLocales)].flatMap((locale) => callback(locale))

const getUrl = (locale: string, url: string) =>
  locale ? makeAbsoluteUrl(`/${locale}${url}`) : makeAbsoluteUrl(url)

export default function sitemap(): Sitemap {
  return [
    ...mapLocales((locale) => [
      {
        url: getUrl(locale, '/'),
        lastModified: new Date(),
        changeFrequency: 'monthly',
        priority: 1,
      },
      {
        url: getUrl(locale, '/posts'),
        lastModified: new Date(),
        changeFrequency: 'daily',
        priority: 0.9,
      },
      {
        url: getUrl(locale, '/terms-of-use'),
        lastModified: new Date(),
        changeFrequency: 'yearly',
        priority: 0.5,
      },
      ...(locale
        ? getAllPosts(locale).flatMap(
            (post) =>
              ({
                url: getUrl(locale, `/posts/${post.slug}`),
                lastModified: post.date,
                changeFrequency: 'yearly',
                priority: 0.8,
              }) as Item,
          )
        : []),
    ]),
    ...getAllPosts(defaultLocale).flatMap(
      (post) =>
        ({
          url: getUrl('', `/posts/${post.slug}`),
          lastModified: post.date,
          changeFrequency: 'yearly',
          priority: 0.8,
        }) as Item,
    ),
  ]
}
