import { useRef } from 'react'
import { SITE_NAME } from '@/src/config/constants'
import { BlogPostPreview } from '@/src/models/BlogPost'
import { BackButton } from '@/src/components/base/BackButton'
import { Emoji } from '@/src/components/base/Emoji'
import { PageLayout } from '@/src/components/base/PageLayout'
import { PageTitle } from '@/src/components/base/PageTitle'
import { Meta } from '@/src/components/base/Meta'
import { useSimpleSearch } from '@/src/hooks/useSimpleSearch'
import { useTranslation } from '@/src/hooks/useTranslation'
import { PageHeader } from '@/src/components/base/PageHeader'
import { PostPreview } from '@/src/components/home/PostPreview'
import { SearchBox } from '../SearchBox'
import { NoResults } from '../NoResults'
import S from './PostsPage.module.css'

export type PostsProps = {
  posts: BlogPostPreview[]
  ogImageUrl: string
  url: string
}

export const PostsPage = ({ posts, ogImageUrl, url }: PostsProps) => {
  const postsRef = useRef<HTMLElement>(null)
  const noResultsRef = useRef<HTMLDivElement>(null)
  const { translate, translateWithElements } = useTranslation()
  const { onSearch } = useSimpleSearch({
    itemSelector: 'a',
    searchOnRef: postsRef,
    noResultsRef,
  })

  return (
    <PageLayout header={<PageHeader />}>
      <Meta
        title={`Blog | ${SITE_NAME}`}
        description={translate('home.meta-description')}
        url={url}
        ogImageUrl={ogImageUrl}
      />
      <section className={S.content}>
        <div className={S.backButtonContainer}>
          <BackButton href="/">{translate('base.back-to-home')}</BackButton>
        </div>
        <div className={S.titleContainer}>
          <PageTitle>{translate('posts.title')}</PageTitle>
          <span>
            {translateWithElements(
              'posts.description',
              <Emoji
                symbol="&#x1F60A;"
                alt={translate('emojis.smiling-face-with-smiling-eyes')}
              />,
            )}
          </span>
        </div>
        <div className={S.searchBoxContainer}>
          <SearchBox
            label={translate('posts.search-placeholder')}
            onInput={onSearch}
          />
        </div>
        <main className={S.posts} ref={postsRef}>
          {posts.map((post, index) => (
            <PostPreview key={index} post={post} />
          ))}
        </main>
        <NoResults ref={noResultsRef} hidden />
      </section>
    </PageLayout>
  )
}
