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

export type BlogPostPreview = Omit<
  BlogPost,
  'content' | 'ogImageUrl' | 'excerpt'
>

export type SelectedBlogPostInfo = Record<keyof Partial<BlogPost>, unknown>
