import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { postsDirectory } from '@/src/config/config'
import {
  BlogPost,
  BlogPostProperty,
  SelectedBlogPostInfo,
} from '@/src/models/BlogPost'

export const getPostSlugs = (locale: string) => {
  return fs.readdirSync(path.join(postsDirectory, locale))
}

export const getPostBySlug = (
  locale: string,
  slug: string,
  fields: BlogPostProperty[] = []
) => {
  const realSlug = slug.replace(/\.md$/, '')
  const fullPath = path.join(postsDirectory, locale, `${realSlug}.md`)
  const fileContents = fs.readFileSync(fullPath, 'utf8')
  const { data, content } = matter(fileContents)

  const items: SelectedBlogPostInfo = {}

  // Ensure only the minimal needed data is exposed
  fields.forEach((field) => {
    if (field === 'slug') {
      items[field] = realSlug
    }

    if (field === 'content') {
      items[field] = content
    }

    if (typeof data[field] !== 'undefined') {
      items[field] = data[field]
    }
  })

  return items as unknown as BlogPost
}

const byNewest = (post1: BlogPost, post2: BlogPost) =>
  post1.date > post2.date ? -1 : 1

export const getAllPosts = (
  locale: string,
  fields: BlogPostProperty[] = []
) => {
  const slugs = getPostSlugs(locale)
  const posts = slugs
    .map((slug) => getPostBySlug(locale, slug, fields))
    .sort(byNewest)

  return posts
}
