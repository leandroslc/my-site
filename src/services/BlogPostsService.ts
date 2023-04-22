import fs from 'fs'
import { join } from 'path'
import matter from 'gray-matter'
import { postsDirectory } from '@/src/config/config'
import {
  BlogPost,
  BlogPostProperty,
  SelectedBlogPostInfo,
} from '@/src/models/BlogPost'

export const getPostSlugs = () => {
  return fs.readdirSync(postsDirectory)
}

export const getPostBySlug = (
  slug: string,
  fields: BlogPostProperty[] = []
) => {
  const realSlug = slug.replace(/\.md$/, '')
  const fullPath = join(postsDirectory, `${realSlug}.md`)
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

export const getAllPosts = (fields: BlogPostProperty[] = []) => {
  const slugs = getPostSlugs()
  const posts = slugs.map((slug) => getPostBySlug(slug, fields)).sort(byNewest)

  return posts
}
