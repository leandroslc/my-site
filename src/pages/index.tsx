import { GetStaticProps } from 'next'
import { BlogPostPreview } from '@/src/models/BlogPost'
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
    'tags',
  ]) as unknown as BlogPostPreview

  return {
    props: { posts: allPosts },
  }
}
