import { getPostBySlug } from './get-post-by-slug'
import { getPostSlugs } from './get-post-slugs'
import { Post, PostProperty } from '../types'

const byNewest = (post1: Post, post2: Post) =>
  post1.date > post2.date ? -1 : 1

export const getAllPosts = (fields: PostProperty[] = []) => {
  const slugs = getPostSlugs()
  const posts = slugs.map((slug) => getPostBySlug(slug, fields)).sort(byNewest)

  return posts
}
