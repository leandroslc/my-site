export type BlogPost = {
  slug: string
  title: string
  date: string
  coverImage: string
  excerpt: string
  ogImageUrl: string
  content: string
  tags: string[]
}

export type RawBlogPostsData = Record<
  string,
  {
    title: string
    excerpt: string
    tags: string[]
    date: string
    cover: string
  }
>

export type BlogPostPreview = Omit<
  BlogPost,
  'content' | 'ogImageUrl' | 'excerpt'
>
