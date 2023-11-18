import { GetStaticProps } from 'next'
import { BlogPostPreview } from '@/src/models/BlogPost'
import { getAllPosts } from '@/src/services/BlogPostsService'
import { makeAbsoluteUrl } from '@/src/services/UrlService'
import { HOME_OG_IMAGE_URL } from '@/src/config/constants'
import { PostsPage, PostsProps } from '@/src/components/posts/PostsPage'

const Index = ({ posts, ogImageUrl }: PostsProps) => {
  return <PostsPage posts={posts} ogImageUrl={ogImageUrl} />
}

export default Index

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  const allPosts = getAllPosts({
    locale: locale!,
    fields: ['title', 'date', 'slug', 'coverImage', 'tags'],
  }) as unknown as BlogPostPreview

  return {
    props: {
      posts: allPosts,
      ogImageUrl: makeAbsoluteUrl(HOME_OG_IMAGE_URL),
    },
  }
}
