import { SITE_NAME } from '@/src/config/constants'
import { BlogPostPreview } from '@/src/models/BlogPost'
import { PageLayout } from '@/src/components/base/PageLayout'
import { Meta } from '@/src/components//base/Meta'
import { Emoji } from '@/src/components//base/Emoji'
import { useTranslation } from '@/src/hooks/useTranslation'
import { HomeHeader } from '../HomeHeader'
import { PostPreview } from '../PostPreview'
import { Hero } from '../Hero'
import * as S from './HomePage.styles'

export type HomeProps = {
  posts: BlogPostPreview[]
  ogImageUrl: string
}

export const HomePage = ({ posts, ogImageUrl }: HomeProps) => {
  const { translate, translateWithElements } = useTranslation()

  return (
    <PageLayout header={<HomeHeader />}>
      <Meta
        title={SITE_NAME}
        description={translate('home.meta-description')}
        ogImageUrl={ogImageUrl}
      />
      <S.Content>
        <Hero />
        <S.Title>{translate('home.blog-title')}</S.Title>
        <S.Description>
          {translateWithElements(
            'home.blog-description',
            <Emoji
              symbol="&#x1F642;"
              alt={translate('emojis.slightly-smiling-face')}
            />
          )}
        </S.Description>
        <S.Posts>
          {posts.map((post, index) => (
            <PostPreview key={index} post={post} />
          ))}
        </S.Posts>
      </S.Content>
    </PageLayout>
  )
}
