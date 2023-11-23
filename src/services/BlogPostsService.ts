import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { postsDirectory, postsDataFilePath } from '@/src/config/config'
import { BlogPost, RawBlogPostsData } from '@/src/models/BlogPost'
import { makeAbsoluteUrl } from './UrlService'

const getRawPostsData = (locale: string) => {
  const file = path.join(postsDataFilePath, `posts.${locale}.json`)

  return JSON.parse(fs.readFileSync(file, 'utf8')) as RawBlogPostsData
}

const parsePostData = (data: RawBlogPostsData, slug: string) => {
  const post = data[slug]

  return {
    slug,
    title: post.title,
    excerpt: post.excerpt,
    date: post.date,
    coverImage: post.cover,
    ogImageUrl: makeAbsoluteUrl(post.cover),
    tags: post.tags,
    content: '',
  } as BlogPost
}

const getPosts = (locale: string) => {
  const data = getRawPostsData(locale)

  return Object.keys(data).map((slug) => parsePostData(data, slug))
}

export const getPostBySlug = (locale: string, slug: string) => {
  const data = getRawPostsData(locale)
  const post = parsePostData(data, slug)
  const fullPath = path.join(postsDirectory, locale, `${slug}.md`)
  const fileContents = fs.readFileSync(fullPath, 'utf8')
  const { content } = matter(fileContents)

  return {
    ...post,
    content,
  } as BlogPost
}

const random = (min: number, max: number) =>
  Math.floor(Math.random() * (max - min) + min)

export const getRandomPosts = (locale: string, numberOfPosts: number) => {
  let availablePosts = getPosts(locale)
  const randomPosts: BlogPost[] = []

  while (randomPosts.length < numberOfPosts) {
    const randomIndex = random(0, availablePosts.length)
    const post = availablePosts[randomIndex]

    randomPosts.push(post)

    availablePosts.splice(randomIndex, 1)
  }

  return randomPosts
}

const byNewest = (post1: BlogPost, post2: BlogPost) =>
  post1.date > post2.date ? -1 : 1

export const getAllPosts = (locale: string) => {
  const posts = getPosts(locale).sort(byNewest)

  return posts
}
