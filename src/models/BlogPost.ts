export type BlogPost = {
  slug: string
  title: string
  date: string
  coverImage: string
  excerpt: string
  ogImage: {
    url: string
  }
  content: string
}

export type BlogPostProperty = keyof BlogPost

export type SelectedBlogPostInfo = {
  [key: string]: string
}
