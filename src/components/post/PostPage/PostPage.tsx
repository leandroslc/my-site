import ErrorPage from 'next/error'
import { useRouter } from 'next/router'
import { SITE_NAME } from '@/src/config/constants'
import { BlogPost } from '@/src/models/BlogPost'
import { PageLayout } from '@/src/components/base/PageLayout/PageLayout'
import { BackButton } from '@/src/components/base/BackButton/BackButton'
import { PageHeader } from '@/src/components/base/PageHeader'
import { FormattedContentBody } from '@/src/components/base/FormattedContentBody'
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
      description={post.excerpt}
      ogImageUrl={post.ogImageUrl}
      header={<PageHeader />}
    >
      {router.isFallback ? (
        <>Loading...</>
      ) : (
        <>
          <S.PostContainer>
            <BackButton />
            <PostHeader
              title={post.title}
              coverImage={post.coverImage}
              date={post.date}
              tags={post.tags}
            />
            <FormattedContentBody content={post.content} />
          </S.PostContainer>
        </>
      )}
    </PageLayout>
  )
}
