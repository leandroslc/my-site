import ErrorPage from 'next/error'
import Head from 'next/head'
import { useRouter } from 'next/router'
import { SITE_NAME } from '@/src/lib/constants'
import { Post } from '@/src/lib/types'
import { PageLayout } from '@/src/modules/app'
import { BackButton } from '../components/back-button'
import { Header } from '../components/header'
import { PostBody } from '../components/post-body'
import { PostHeader } from '../components/post-header'
import * as S from './styles'

export type PostProps = {
  post: Post
}

export const PostPage = ({ post }: PostProps) => {
  const router = useRouter()

  if (!router.isFallback && !post?.slug) {
    return <ErrorPage statusCode={404} />
  }

  return (
    <PageLayout title={`${post.title} | ${SITE_NAME}`} header={<Header />}>
      {router.isFallback ? (
        <>Loading...</>
      ) : (
        <>
          <Head>
            <meta property="og:image" content={post.ogImage.url} />
          </Head>
          <S.PostContainer>
            <BackButton />
            <PostHeader
              title={post.title}
              coverImage={post.coverImage}
              date={post.date}
            />
            <PostBody content={post.content} />
          </S.PostContainer>
        </>
      )}
    </PageLayout>
  )
}
