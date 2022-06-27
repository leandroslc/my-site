import { getAllPosts } from '@/src/lib/services'
import { Post } from '@/src/lib/types/post'
import { HomePage } from '@/src/modules/home'

type Props = {
  allPosts: Post[]
}

const Index = ({ allPosts }: Props) => {
  return <HomePage posts={allPosts} />
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
    props: { allPosts },
  }
}
