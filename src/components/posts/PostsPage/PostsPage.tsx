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
import * as S from './PostsPage.styles'

export type PostsProps = {
  posts: BlogPostPreview[]
  ogImageUrl: string
}

export const PostsPage = ({ posts, ogImageUrl }: PostsProps) => {
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
        ogImageUrl={ogImageUrl}
      />
      <S.Content>
        <S.BackButtonContainer>
          <BackButton href="/">{translate('base.back-to-home')}</BackButton>
        </S.BackButtonContainer>
        <S.TitleContainer>
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
        </S.TitleContainer>
        <S.SearchBoxContainer>
          <SearchBox
            label={translate('posts.search-placeholder')}
            onInput={onSearch}
          />
        </S.SearchBoxContainer>
        <S.Posts ref={postsRef}>
          {posts.map((post, index) => (
            <PostPreview key={index} post={post} />
          ))}
        </S.Posts>
        <S.NoResultsContainer as={NoResults} ref={noResultsRef} />
      </S.Content>
    </PageLayout>
  )
}
