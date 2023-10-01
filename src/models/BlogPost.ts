export type BlogPost = {
  slug: string
  title: string
  date: string
  coverImage: string
  ogImage: {
    url: string
  }
  content: string
  tags: string[]
}

export type BlogPostPreview = Omit<BlogPost, 'content' | 'ogImage'>

export type SelectedBlogPostInfo = Record<keyof Partial<BlogPost>, unknown>
