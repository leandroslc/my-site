import ErrorPage from 'next/error'
import Head from 'next/head'
import { useRouter } from 'next/router'
import { SITE_NAME } from '@/src/config/constants'
import { BlogPost } from '@/src/models/BlogPost'
import { PageLayout } from '@/src/components/base/PageLayout/PageLayout'
import { BackButton } from '../BackButton/BackButton'
import { PostPageHeader } from '../PostPageHeader'
import { PostBody } from '../PostBody'
import { PostHeader } from '../PostHeader'
import * as S from './PostPage.styles'

export type PostProps = {
  post: BlogPost
}

export const PostPage = ({ post }: PostProps) => {
  const router = useRouter()

  if (!router.isFallback && !post?.slug) {
    return <ErrorPage statusCode={404} />
  }

  return (
    <PageLayout
      title={`${post.title} | ${SITE_NAME}`}
      header={<PostPageHeader />}
    >
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
