import markdownToHtml from '@/src/lib/services/markdown/markdown-to-html'
import { getAllPosts, getPostBySlug } from '@/src/lib/services/posts'
import { PostPage, PostProps } from '@/src/modules/post'

const Post = ({ post }: PostProps) => {
  return <PostPage post={post} />
}

export default Post

type Params = {
  params: {
    slug: string
  }
}

export const getStaticProps = async ({ params }: Params) => {
  const post = getPostBySlug(params.slug, [
    'title',
    'date',
    'slug',
    'content',
    'ogImage',
    'coverImage',
  ])
  const content = await markdownToHtml(post.content || '')

  return {
    props: {
      post: {
        ...post,
        content,
      },
    },
  }
}

export const getStaticPaths = async () => {
  const posts = getAllPosts(['slug'])

  return {
    paths: posts.map((post) => {
      return {
        params: {
          slug: post.slug,
        },
      }
    }),
    fallback: false,
  }
}
