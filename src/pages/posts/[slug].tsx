import { GetStaticPaths } from 'next'
import markdownToHtml from '@/src/services/MarkdownToHtmlService'
import { getAllPosts, getPostBySlug } from '@/src/services/BlogPostsService'
import { PostPage, PostProps } from '@/src/components/post/PostPage'

const Post = ({ post }: PostProps) => {
  return <PostPage post={post} />
}

export default Post

type Params = {
  params: {
    slug: string
  }
  locale: string
}

export const getStaticProps = async ({ params, locale }: Params) => {
  const post = getPostBySlug(locale, params.slug, [
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

export const getStaticPaths: GetStaticPaths = async ({ locales }) => {
  const paths = locales!.flatMap((locale) => {
    const posts = getAllPosts(locale, ['slug'])

    return posts.map((post) => {
      return {
        params: {
          slug: post.slug,
        },
        locale,
      }
    })
  })

  return {
    paths,
    fallback: false,
  }
}
