import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { postsDirectory } from '@/src/config/config'
import { BlogPost, SelectedBlogPostInfo } from '@/src/models/BlogPost'
import { makeAbsoluteUrl } from './UrlService'

export const getPostSlugs = (locale: string) => {
  return fs.readdirSync(path.join(postsDirectory, locale))
}

export const getPostBySlug = (
  locale: string,
  slug: string,
  fields: (keyof BlogPost)[] = [],
) => {
  const realSlug = slug.replace(/\.md$/, '')
  const fullPath = path.join(postsDirectory, locale, `${realSlug}.md`)
  const fileContents = fs.readFileSync(fullPath, 'utf8')
  const { data, content } = matter(fileContents)

  const items = {} as SelectedBlogPostInfo

  fields.forEach((field) => {
    if (typeof data[field] !== 'undefined') {
      items[field] = data[field]
    }

    if (field === 'slug') {
      items[field] = realSlug
    }

    if (field === 'content') {
      items[field] = content
    }

    if (field === 'ogImageUrl') {
      items[field] = makeAbsoluteUrl(data[field])
    }
  })

  return items as BlogPost
}

type GetRandomPostsParams = {
  locale: string
  numberOfPosts: number
  fields?: (keyof BlogPost)[]
}

const random = (min: number, max: number) =>
  Math.floor(Math.random() * (max - min) + min)

export const getRandomPosts = ({
  locale,
  numberOfPosts,
  fields = [],
}: GetRandomPostsParams) => {
  let availableSlugs = getPostSlugs(locale)
  const randomPosts: BlogPost[] = []

  while (randomPosts.length < numberOfPosts) {
    const randomIndex = random(0, availableSlugs.length)
    const slug = availableSlugs[randomIndex]
    const post = getPostBySlug(locale, slug, fields)

    randomPosts.push(post)

    availableSlugs.splice(randomIndex, 1)
  }

  return randomPosts
}

type GetAllPostsParams = {
  locale: string
  fields?: (keyof BlogPost)[]
}

const byNewest = (post1: BlogPost, post2: BlogPost) =>
  post1.date > post2.date ? -1 : 1

export const getAllPosts = ({ locale, fields = [] }: GetAllPostsParams) => {
  const slugs = getPostSlugs(locale)
  const posts = slugs
    .map((slug) => getPostBySlug(locale, slug, fields))
    .sort(byNewest)

  return posts
}
