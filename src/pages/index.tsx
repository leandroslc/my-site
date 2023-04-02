import { getAllPosts } from '@/src/lib/services/posts'
import { HomePage, HomeProps } from '@/src/components/home/HomePage'

const Index = ({ posts }: HomeProps) => {
  return <HomePage posts={posts} />
}

export default Index

export const getStaticProps = async () => {
  const allPosts = getAllPosts([
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
