import { GetStaticProps } from 'next'
import { BlogPostPreview } from '@/src/models/BlogPost'
import { getAllPosts } from '@/src/services/BlogPostsService'
import { makeAbsoluteUrl } from '@/src/services/UrlService'
import { HOME_OG_IMAGE_URL } from '@/src/config/constants'
import { PostsPage, PostsProps } from '@/src/components/posts/PostsPage'

const Index = ({
  posts,
  ogImageUrl,
  url,
}: PostsProps & { slugs: string[] }) => {
  return <PostsPage posts={posts} ogImageUrl={ogImageUrl} url={url} />
}

export default Index

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  const allPosts = getAllPosts(locale!) as unknown as BlogPostPreview

  return {
    props: {
      posts: allPosts,
      ogImageUrl: makeAbsoluteUrl(HOME_OG_IMAGE_URL),
      url: makeAbsoluteUrl(`/${locale}/posts`),
    },
  }
}
