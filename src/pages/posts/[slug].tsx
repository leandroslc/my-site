import { GetStaticPaths } from 'next'
import markdownToHtml from '@/src/services/MarkdownToHtmlService'
import { getAllPosts, getPostBySlug } from '@/src/services/BlogPostsService'
import { PostPage, PostProps } from '@/src/components/post/PostPage'
import { makeAbsoluteUrl } from '@/src/services/UrlService'

const Post = ({ post, url }: PostProps) => {
  return <PostPage post={post} url={url} />
}

export default Post

type Params = {
  params: {
    slug: string
  }
  locale: string
}

export const getStaticProps = async ({ params, locale }: Params) => {
  const post = getPostBySlug(locale, params.slug)
  const content = await markdownToHtml(post.content || '')

  return {
    props: {
      post: {
        ...post,
        content,
      },
      url: makeAbsoluteUrl(`/${locale}/posts/${post.slug}`),
    },
  }
}

export const getStaticPaths: GetStaticPaths = async ({ locales }) => {
  const paths = locales!.flatMap((locale) => {
    const posts = getAllPosts(locale)

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
