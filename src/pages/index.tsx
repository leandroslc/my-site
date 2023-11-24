import { GetServerSideProps } from 'next'
import { BlogPostPreview } from '@/src/models/BlogPost'
import { getRandomPosts } from '@/src/services/BlogPostsService'
import { makeAbsoluteUrl } from '@/src/services/UrlService'
import { HOME_OG_IMAGE_URL } from '@/src/config/constants'
import { HomePage, HomeProps } from '@/src/components/home/HomePage'

const ONE_DAY_IN_SECONDS = 86_400
const ONE_HOUR_IN_SECONDS = 3_600

const Index = ({ posts, ogImageUrl, url }: HomeProps) => {
  return <HomePage posts={posts} ogImageUrl={ogImageUrl} url={url} />
}

export default Index

export const getServerSideProps: GetServerSideProps = async ({
  locale,
  res,
}) => {
  const allPosts = getRandomPosts(locale!, 2) as unknown as BlogPostPreview

  res.setHeader(
    'Cache-Control',
    `max-age=${ONE_DAY_IN_SECONDS}, stale-while-revalidate=${ONE_HOUR_IN_SECONDS}`,
  )

  return {
    props: {
      posts: allPosts,
      ogImageUrl: makeAbsoluteUrl(HOME_OG_IMAGE_URL),
      url: makeAbsoluteUrl(`/${locale}`),
    },
  }
}
