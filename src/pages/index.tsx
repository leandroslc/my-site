import { GetStaticProps } from 'next'
import { BlogPostPreview } from '@/src/models/BlogPost'
import { getAllPosts } from '@/src/services/BlogPostsService'
import { makeAbsoluteUrl } from '@/src/services/UrlService'
import { HOME_OG_IMAGE_URL } from '@/src/config/constants'
import { HomePage, HomeProps } from '@/src/components/home/HomePage'

const Index = ({ posts, ogImageUrl }: HomeProps) => {
  return <HomePage posts={posts} ogImageUrl={ogImageUrl} />
}

export default Index

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  const allPosts = getAllPosts(locale!, [
    'title',
    'date',
    'slug',
    'coverImage',
    'tags',
  ]) as unknown as BlogPostPreview

  return {
    props: {
      posts: allPosts,
      ogImageUrl: makeAbsoluteUrl(HOME_OG_IMAGE_URL),
    },
  }
}
