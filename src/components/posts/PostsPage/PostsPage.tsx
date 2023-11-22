import { useRef } from 'react'
import { FiFolder } from 'react-icons/fi'
import { SITE_NAME } from '@/src/config/constants'
import { BlogPostPreview } from '@/src/models/BlogPost'
import { BackButton } from '@/src/components/base/BackButton'
import { PageLayout } from '@/src/components/base/PageLayout'
import { PageTitle } from '@/src/components/base/PageTitle'
import { Meta } from '@/src/components//base/Meta'
import { useSimpleSearch } from '@/src/hooks/useSimpleSearch'
import { useTranslation } from '@/src/hooks/useTranslation'
import { PageHeader } from '@/src/components/base/PageHeader'
import { PostPreview } from '@/src/components/home/PostPreview'
import { SearchBox } from '../SearchBox'
import * as S from './PostsPage.styles'

export type PostsProps = {
  posts: BlogPostPreview[]
  ogImageUrl: string
}

export const PostsPage = ({ posts, ogImageUrl }: PostsProps) => {
  const postsRef = useRef<HTMLElement>(null)
  const noResultsRef = useRef<HTMLDivElement>(null)
  const { translate } = useTranslation()
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
          <span>Todas as postagens de blog que escrevi estão aqui</span>
        </S.TitleContainer>
        <S.SearchBoxContainer>
          <SearchBox
            label="Pesquisar postagens do blog..."
            onInput={onSearch}
          />
        </S.SearchBoxContainer>
        <S.Posts ref={postsRef}>
          {posts.map((post, index) => (
            <PostPreview key={index} post={post} />
          ))}
        </S.Posts>
        <S.NoResultsContainer ref={noResultsRef}>
          <S.NoResultsIconContainer>
            <S.NoResultsIcon as={FiFolder} />
          </S.NoResultsIconContainer>
          <p>Nenhuma postagem encontrada</p>
        </S.NoResultsContainer>
      </S.Content>
    </PageLayout>
  )
}
