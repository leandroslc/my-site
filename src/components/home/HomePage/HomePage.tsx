import {
  GITHUB_URL,
  LINKEDIN_URL,
  SITE_NAME,
  YOUTUBE_URL,
} from '@/src/config/constants'
import { BlogPostPreview } from '@/src/models/BlogPost'
import { PageLayout } from '@/src/components/base/PageLayout'
import { Meta } from '@/src/components//base/Meta'
import { Emoji } from '@/src/components//base/Emoji'
import { useTranslation } from '@/src/hooks/useTranslation'
import { HomeHeader } from '../HomeHeader'
import { HomeLink } from '../HomeLink'
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

        <S.Section>
          <S.SectionTitle>{translate('home.blog-title')}</S.SectionTitle>
          <S.SectionDescription>
            <p>{translate('home.blog-description-first')}</p>
            <p>
              {translateWithElements(
                'home.blog-description-second',
                <Emoji
                  symbol="&#x1F642;"
                  alt={translate('emojis.slightly-smiling-face')}
                />,
              )}
            </p>
          </S.SectionDescription>
          <S.SectionSideLink as={HomeLink} href="/posts">
            {translate('home.blog-link')}
          </S.SectionSideLink>
        </S.Section>

        <S.Posts>
          {posts.map((post, index) => (
            <PostPreview key={index} post={post} />
          ))}
        </S.Posts>

        <S.SectionReverse>
          <S.SectionTitle>{translate('home.profile-title')}</S.SectionTitle>
          <S.SectionImage
            src="/assets/site/home/work.webp"
            alt={translate('home.profile-image-alt')}
          />
          <S.SectionDescription>
            {translate('home.profile-description')}
          </S.SectionDescription>
          <S.SectionLink as={HomeLink} href={LINKEDIN_URL}>
            {translate('home.profile-link')}
          </S.SectionLink>
        </S.SectionReverse>

        <S.Section>
          <S.SectionTitle>{translate('home.music-title')}</S.SectionTitle>
          <S.SectionImage
            src="/assets/site/home/music.webp"
            alt={translate('home.music-image-alt')}
          />
          <S.SectionDescription>
            <p>
              {translateWithElements(
                'home.music-description',
                <Emoji
                  symbol="&#x1F60A;"
                  alt={translate('emojis.smiling-face-with-smiling-eyes')}
                />,
              )}
            </p>
          </S.SectionDescription>
          <S.SectionLink as={HomeLink} href={YOUTUBE_URL}>
            {translate('home.music-link')}
          </S.SectionLink>
        </S.Section>

        <S.SectionReverse>
          <S.SectionTitle>{translate('home.projects-title')}</S.SectionTitle>
          <S.SectionImage
            src="/assets/site/home/portfolio.webp"
            alt={translate('home.projects-image-alt')}
          />
          <S.SectionDescription>
            <p>
              {translateWithElements(
                'home.projects-description',
                <Emoji
                  symbol="&#x1F60A;"
                  alt={translate('emojis.smiling-face-with-smiling-eyes')}
                />,
              )}
            </p>
          </S.SectionDescription>
          <S.SectionLink as={HomeLink} href={GITHUB_URL}>
            {translate('home.projects-link')}
          </S.SectionLink>
        </S.SectionReverse>
      </S.Content>
    </PageLayout>
  )
}
