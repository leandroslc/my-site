import fs from 'fs'
import { join } from 'path'
import matter from 'gray-matter'
import { postsDirectory } from '../config'
import { Post, PostProperty } from '../types'

type SelectedItems = {
  [key: string]: string
}

export const getPostBySlug = (slug: string, fields: PostProperty[] = []) => {
  const realSlug = slug.replace(/\.md$/, '')
  const fullPath = join(postsDirectory, `${realSlug}.md`)
  const fileContents = fs.readFileSync(fullPath, 'utf8')
  const { data, content } = matter(fileContents)

  const items: SelectedItems = {}

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

  return items as unknown as Post
}
