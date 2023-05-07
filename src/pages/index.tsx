import { GetStaticProps } from 'next'
import { getAllPosts } from '@/src/services/BlogPostsService'
import { HomePage, HomeProps } from '@/src/components/home/HomePage'

const Index = ({ posts }: HomeProps) => {
  return <HomePage posts={posts} />
}

export default Index

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  const allPosts = getAllPosts(locale!, [
    'title',
    'date',
    'slug',
    'coverImage',
    'excerpt',
  ])

  return {
    props: { posts: allPosts },
  }
}
