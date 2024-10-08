import ErrorPage from 'next/error'
import { useRouter } from 'next/router'
import { SITE_NAME } from '@/src/config/constants'
import { BlogPost } from '@/src/models/BlogPost'
import { PageLayout } from '@/src/components/base/PageLayout/PageLayout'
import { BackButton } from '@/src/components/base/BackButton/BackButton'
import { PageHeader } from '@/src/components/base/PageHeader'
import { Meta } from '@/src/components/base/Meta'
import { FormattedContentBody } from '@/src/components/base/FormattedContentBody'
import { useTranslation } from '@/src/hooks/useTranslation'
import { PostHeader } from '../PostHeader'
import S from './PostPage.module.css'

export type PostProps = {
  post: BlogPost
  url: string
}

export const PostPage = ({ post, url }: PostProps) => {
  const router = useRouter()
  const { translate } = useTranslation()

  if (!router.isFallback && !post?.slug) {
    return <ErrorPage statusCode={404} />
  }

  return (
    <PageLayout header={<PageHeader />}>
      <Meta
        title={`${post.title} | ${SITE_NAME}`}
        description={post.excerpt}
        url={url}
        ogImageUrl={post.ogImageUrl}
      />
      {router.isFallback ? (
        <>Loading...</>
      ) : (
        <>
          <article className={S.postContainer}>
            <div className={S.backButtonContainer}>
              <BackButton href="/">{translate('base.back-to-home')}</BackButton>
              <BackButton href="/posts">
                {translate('post.back-to-other-posts')}
              </BackButton>
            </div>
            <PostHeader
              title={post.title}
              coverImage={post.coverImage}
              date={post.date}
              tags={post.tags}
            />
            <FormattedContentBody content={post.content} />
          </article>
        </>
      )}
    </PageLayout>
  )
}
